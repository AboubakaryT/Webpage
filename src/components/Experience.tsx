import liberty from "../assets/images.png";
import zof from "../assets/Zof.jpeg";
import nvidia from "../assets/nvidia.jpg";
import Todd from "../assets/Todd.jpeg";
const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Experience() {
  const experiences = [
    {
      title:"Software Engineer Intern",
      company: "Todd Agriscience",
      img: Todd,
      location: "Remote",
      date: "Sep 2026 - Dec 2026",
      description: "Incoming SWE Intern @ TODD :) "
      },
    {    
      title: "TechStart Intern",
      company: "Liberty Mutual Insurance",
      img: liberty,
      location: "Plano, TX",
      date: "Jun 2026 - Aug 2026",
      description: "My summer at Liberty Mutual was my first experience working on a software engineering team at a large company, and it taught me a lot about what it means to build software that people actually depend on. I worked on a real-time translation platform for technical support agents, where I focused primarily on the backend and API development. I really enjoyed taking something that started as an idea and turning it into a working system while learning from the engineers around me. This experience gave me a much better understanding of backend engineering and made me even more excited about building software professionally."

    },
    {
      title: "Software Engineer Intern",
      company: "Zof AI",
      img: zof,
      location: "Remote",
      date: "Jun 2025 – Sep 2025",
      description:
        "At Zof AI, I got my first opportunity to work on software for an enterprise AI product. I spent most of my time building frontend features with React and TypeScript, working closely with other engineers to turn ideas and requirements into polished experiences for customers. It was especially valuable getting to see how the things I built fit into a larger product rather than existing as isolated projects. The experience helped me become much more comfortable working on a team and gave me a stronger foundation in frontend development.",
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
    <section id="experince" className="px-8 pb-24 max-w-6xl mx-auto">
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

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 text-white transition-colors duration-300">
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
                <p className="text-zinc-400 text-sm leading-relaxed hover:text-white">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}