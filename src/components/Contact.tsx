import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      setInputError(true);
      setSubmitStatus("idle");
      return;
    }

    setInputError(false);
    setSubmitStatus("loading");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <div id="contact" className="px-8 py-20 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-white mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
          >
            Let's Work Together
          </h2>
          <p className="text-zinc-400 text-lg">Have a project or question? I'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <h3 className="text-white font-bold text-xl mb-6">Send me a message</h3>
            
            <div className="flex flex-col gap-5">
              
              <div className="flex flex-col">
                <label className="text-zinc-400 text-sm font-medium mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-zinc-400 text-sm font-medium mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                  className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-zinc-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitStatus === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 mt-2"
              >
                {submitStatus === "loading" ? "Sending..." : "Send Message"}
              </button>

              {inputError && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <FaExclamationCircle size={16} />
                  <span>Please fill in all fields</span>
                </div>
              )}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                  <FaCheckCircle size={16} />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <FaExclamationCircle size={16} />
                  <span>Failed to send. Please try again.</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            {/* Quick Info */}
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all duration-300">
                <h4 className="text-white font-bold mb-2">Email</h4>
                <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  your.email@example.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all duration-300">
                <h4 className="text-white font-bold mb-2">Location</h4>
                <p className="text-zinc-400 text-sm">Buffalo, NY / Remote</p>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-pink-600/50 transition-all duration-300">
                <h4 className="text-white font-bold mb-2">Response Time</h4>
                <p className="text-zinc-400 text-sm">Usually within 24 hours</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-zinc-400 text-sm font-medium mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 font-medium text-sm"
                >
                  <FaGithub size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 font-medium text-sm"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-red-500 hover:bg-red-500/5 transition-all duration-300 font-medium text-sm"
                >
                  <FaEnvelope size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
