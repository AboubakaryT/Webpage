import { useEffect, useState } from "react";

const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Home() {
  const arr = [" a Software Engineer", " a Student", "a Leader", "Self-Driven", " a Builder"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  function next() {
    setIndex((prev) => {
      if (prev == arr.length - 1) return 0;
      return prev + 1;
    });
  }

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {});

  return (
    <main className="min-h-screen text-white">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 pt-36 pb-24 px-8 max-w-6xl mx-auto">

        {/* Left */}
        <div className="flex flex-col text-center lg:text-left lg:max-w-2xl">

          {/* Big editorial name */}
          <h1
            className="fade-up fade-up-delay-1 font-light leading-none tracking-tight mb-6"
            style={{ ...displayFont, fontSize: "clamp(3.5rem, 8vw, 7rem)", fontStyle: "italic" }}
          >
            Aboubakary<br />
            <span style={{ fontStyle: "normal", fontWeight: 600 }}>Traore.</span>
          </h1>

          {/* Tags row */}
          <div className="fade-up fade-up-delay-2 flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            {["CS @ UB", "AI Concentration", "First-Gen", "Sophomore"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rotating line */}
          <p
            className="fade-up fade-up-delay-3 text-zinc-400 mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
          >
            I am{" "}
            <span
              className="text-white border-b border-zinc-500 pb-0.5 transition-all duration-500"
              style={{ ...displayFont, fontSize: "1.2rem", fontStyle: "italic" }}
            >
              {arr[index]}
            </span>
          </p>

          {/* Blurb */}
          <p
            className="fade-up fade-up-delay-4 text-zinc-400 leading-relaxed"
            style={{ fontSize: "0.95rem", maxWidth: "520px" }}
          >
            I'm a first-gen sophomore studying Computer Science at the University at Buffalo
            with a concentration in Artificial Intelligence. I've interned at an AI startup,
            represented my class in UB's ACM chapter, and built projects I'm genuinely proud of.
            I care deeply about my craft — but even more about the person I'm becoming through it.
          </p>

          {/* CTA links */}
          <div className="fade-up fade-up-delay-4 flex gap-6 mt-10 justify-center lg:justify-start">
            <a
              href="/experience"
              className="text-sm text-white border-b border-white pb-0.5 hover:text-zinc-400 hover:border-zinc-400 transition-colors duration-200"
            >
              View Experience →
            </a>
            <a
              href="/projects"
              className="text-sm text-zinc-500 border-b border-zinc-500 pb-0.5 hover:text-white hover:border-white transition-colors duration-200"
            >
              See Projects →
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="fade-up fade-up-delay-2 flex justify-center lg:justify-end shrink-0">
          <div className="relative">
            {/* Decorative border offset */}
            <div className="absolute -inset-2 rounded-2xl border border-zinc-700 opacity-40" />
            <img
              src="src/assets/pfp.jpeg"
              alt="Aboubakary Traore"
              className="relative rounded-2xl w-64 sm:w-64 lg:w-96 object-cover transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}