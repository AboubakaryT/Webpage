import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      setInputError(true);
    } else {
      setInputError(false);
      await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
    }
  }

  return (
    <div className="flex mr-10 ml-10 items-center justify-center pb-10">
      <div className="flex flex-col bg-zinc-950 border border-zinc-800 w-96 lg:w-1/2 items-center rounded-xl p-8 transition-colors duration-300 hover:border-zinc-600">
        
        <h1 className="text-white font-medium text-2xl leading-tight">
          Contact me!
        </h1>

        <div className="flex flex-col gap-4 w-full mt-6">
          
          <div className="flex flex-col">
            <h1 className="text-zinc-500 text-sm mb-1">Name</h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 transition"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-zinc-500 text-sm mb-1">Email</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 transition"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-zinc-500 text-sm mb-1">Message</h1>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-40 w-full bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 transition"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-zinc-100 text-black px-5 py-2 rounded-lg hover:bg-zinc-300 transition-colors duration-300 mt-6"
        >
          Submit
        </button>

        {inputError && (
          <p className="text-red-400 text-sm mt-3">
            Error! One or more fields is empty!
          </p>
        )}
        {!inputError && <p></p>}
      </div>
    </div>
  );
}