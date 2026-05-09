import ub from "/Users/abou/Documents/Webpage/src/assets/UB.png";;
import lehman from "/Users/abou/Documents/Webpage/src/assets/Lehman.webp";
const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Education() {
  const education = [
    {
      school: "University at Buffalo",
      degree: "B.S. in Computer Science, Concentration in AI",
      img: ub,
      location: "Buffalo, NY",
      date: "2025 – 2028",
      description:
        "Studying Computer Science with a concentration in Artificial Intelligence. Relevant coursework includes Data Structures & Algorithms, Systems Programming, Discrete Mathematics, and Calculus II. Active member of UB ACM as Underclassmen Representative.",
    },
    {
      school: "Lehman College",
      degree: "Computer Science",
      img: lehman,
      location: "Bronx, NY",
      date: "2024 – 2025",
      description:
        "Began my Computer Science journey at Lehman College before transferring to the University at Buffalo.",
    },
  ];

  return (
    <section className="px-8 pb-24 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-zinc-800 pb-6">
        <h2
          className="font-light leading-none"
          style={{ ...displayFont, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
        >
          Education
        </h2>
        <span className="text-zinc-600 text-xs tracking-widest uppercase mb-2">
          {education.length} institutions
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />

        <div className="flex flex-col gap-10 pl-8">
          {education.map((edu, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-8 top-6 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-white transition-colors duration-300" />

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="rounded-lg h-12 w-12 object-cover flex-shrink-0  transition-all duration-500"
                    />
                    <div>
                      <h3
                        className="text-white font-medium text-lg leading-tight"
                        style={displayFont}
                      >
                        {edu.school}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-0.5">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-zinc-500 text-xs tracking-wide">{edu.date}</span>
                    <p className="text-zinc-600 text-xs mt-1">{edu.location}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}