import liberty from "../assets/images.png";
import zof from "../assets/Zof.jpeg";
import nvidia from "../assets/nvidia.jpg";
const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Experience() {
  const experiences = [
    {
      title: "Technology Support Intern",
      company: "Liberty Mutual Insurance",
      img: liberty,
      location: "Plano, TX",
      date: "Incoming Summer 2026",
      description: "Incoming Technology Support Intern.",
    },
    {
      title: "Software Engineer Intern",
      company: "Zof AI",
      img: zof,
      location: "Remote",
      date: "Jun 2025 – Sep 2025",
      description:
        "Worked on the full-stack engineering team building production UI features with React, TypeScript, and Tailwind CSS. Contributed to their main dashboard used by 500+ enterprise clients. Learned how to navigate and contribute to a large production codebase.",
    },
    {
      title: "Participant",
      company: "NVIDIA Summer Bridge",
      img: nvidia,
      location: "Remote",
      date: "Jun 2025 – Aug 2025",
      description:
        "Selected for NVIDIA's invitation-only early talent program with a 5% acceptance rate. Gained insight into NVIDIA's engineering culture and built connections with mentors and peers.",
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
          Work Experience
        </h2>
        <span className="text-zinc-600 text-xs tracking-widest uppercase mb-2">
          {experiences.length} roles
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />

        <div className="flex flex-col gap-10 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-6 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-white transition-colors duration-300" />

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="rounded-lg h-12 w-12 object-cover flex-shrink-0 transition-all duration-500"
                    />
                    <div>
                      <h3
                        className="text-white font-medium text-lg leading-tight"
                        style={displayFont}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-zinc-500 text-xs tracking-wide">{exp.date}</span>
                    <p className="text-zinc-600 text-xs mt-1">{exp.location}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}