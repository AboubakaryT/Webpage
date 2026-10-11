import liberty from "../assets/images.png";
import zof from "../assets/Zof.jpeg";
import nvidia from "../assets/nvidia.jpg";
import { motion } from "framer-motion";
const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function Experience() {
  const experiences = [
    {    
      title: "TechStart Intern",
      company: "Liberty Mutual Insurance",
      img: liberty,
      location: "Plano, TX",
      date: "Jun 2026 - Aug 2026",
      description: "My summer at Liberty Mutual was my first experience working on a software engineering team at a large company, and it taught me a lot about what it means to build software that people actually depend on. I worked on a real-time translation platform for technical support agents, where I focused primarily on the backend and API development. I really enjoyed taking something that started as an idea and turning it into a working system while learning from the engineers around me. This experience gave me a much better understanding of backend engineering and made me even more excited about building software professionally.",
      tags: ["React", "TypeScript", "Backend", "Real-time Systems"]
    },
    {
      title: "Software Engineer Intern",
      company: "Zof AI",
      img: zof,
      location: "Remote",
      date: "Jun 2025 – Sep 2025",
      description:
        "At Zof AI, I got my first opportunity to work on software for an enterprise AI product. I spent most of my time building frontend features with React and TypeScript, working closely with other engineers to turn ideas and requirements into polished experiences for customers. It was especially valuable getting to see how the things I built fit into a larger product rather than existing as isolated projects. The experience helped me become much more comfortable working on a team and gave me a stronger foundation in frontend development.",
      tags: ["React", "TypeScript", "Frontend", "AI/ML"]
    },
    {
      title: "Participant",
      company: "NVIDIA Summer Bridge",
      img: nvidia,
      location: "Remote",
      date: "Jun 2025 – Aug 2025",
      description:
        "Selected for NVIDIA's invitation-only early talent program with a 5% acceptance rate. Gained insight into NVIDIA's engineering culture and built connections with mentors and peers.",
      tags: ["Mentorship", "Networking", "Professional Development"]
    },
  ];

  return (
    <section id="experince" className="px-8 pb-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-zinc-800 pb-6">
        <div>
          <h2
            className="font-light leading-none text-white mb-2"
            style={{ ...displayFont, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
          >
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm">Crafting solutions at scale</p>
        </div>
        <span className="text-blue-400 text-sm tracking-widest uppercase font-medium bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/30">
          {experiences.length} roles
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent" />

        <div className="flex flex-col gap-10 pl-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 top-7 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-125" />

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-600/50 group-hover:from-zinc-900 group-hover:to-zinc-950 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="rounded-md h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg leading-tight"
                        style={displayFont}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-sm mt-0.5 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-zinc-400 text-xs tracking-wide font-medium block">{exp.date}</span>
                    <p className="text-zinc-500 text-xs mt-1">{exp.location}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 group-hover:text-zinc-200 transition-colors">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}