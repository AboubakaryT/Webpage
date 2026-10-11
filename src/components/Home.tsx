import { useEffect, useState } from "react";
import pfp from '../assets/pfp.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Home() {
  const arr = [" a Software Engineer", " a Student", "a Leader", "Self-Driven", " a Builder"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev == arr.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <main id = "home" className="text-white pt-20">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 pt-20 pb-32 px-8 max-w-7xl mx-auto">

        {/* Left */}
        <div className="flex flex-col text-center lg:text-left lg:max-w-3xl">

          {/* Big editorial name */}
          <h1
            className="fade-up fade-up-delay-1 font-light leading-none tracking-tight mb-8"
            style={{ ...displayFont, fontSize: "clamp(3.5rem, 10vw, 7.5rem)", fontStyle: "italic" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aboubakary
            </span><br />
            <span style={{ fontStyle: "normal", fontWeight: 700, color: "white" }}>Traore</span>
          </h1>

          {/* Tags row */}
          <div className="fade-up fade-up-delay-2 flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            {["CS @ UB", "AI Concentration", "First-Gen", "Rising Junior"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-300 tracking-wide uppercase font-medium hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rotating line */}
          <div
            className="fade-up fade-up-delay-3 mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem" }}
          >
            <p className="text-zinc-300">
              I am{" "}
              <span
                className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text transition-all duration-500"
                style={{ ...displayFont, fontStyle: "italic" }}
              >
                {arr[index]}
              </span>
            </p>
          </div>

          {/* Blurb */}
          <p
            className="fade-up fade-up-delay-4 text-zinc-300 leading-relaxed text-lg"
            style={{ maxWidth: "550px", lineHeight: "1.7" }}
            >
            I'm a first-gen rising Junior studying Computer Science at the University at Buffalo with a concentration in Artificial Intelligence. I've gained real experience interning at an AI startup, led as an ACM Underclassmen Representative, and built projects I'm genuinely proud of. I'm deeply committed to my craft and to growing as both an engineer and person.
          </p>

          {/* CTA links */}
          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 mt-12">
            <a
              href="#experince"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-zinc-600 text-white font-medium hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300"
            >
              See Projects
            </a>
          </div>

          {/* Social links */}
          <div className="fade-up fade-up-delay-4 flex gap-6 mt-8 justify-center lg:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:bg-blue-500/5"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:bg-blue-500/5"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:bg-blue-500/5"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="fade-up fade-up-delay-2 flex justify-center lg:justify-end shrink-0">
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
            {/* Static border */}
            <div className="absolute -inset-1 rounded-3xl border border-zinc-700 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
            <img
              src={pfp}
              alt="Aboubakary Traore"
              className="relative rounded-3xl w-72 sm:w-80 lg:w-96 h-96 object-cover transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-purple-500/30"
            />
          </div>
        </div>
      </section>
    </main>
  );
}