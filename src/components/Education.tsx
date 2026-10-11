import ub from "../assets/UB.png";
import lehman from "../assets/Lehman.webp";
import { motion } from "framer-motion";
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
      achievements: ["AI Concentration", "ACM Leadership", "Dean's List"]
    },
    {
      school: "Lehman College",
      degree: "Computer Science",
      img: lehman,
      location: "Bronx, NY",
      date: "2024 – 2025",
      description:
        "Began my Computer Science journey at Lehman College before transferring to the University at Buffalo.",
      achievements: ["Foundation Building", "Transfer Scholar"]
    },
  ];

  return (
    <section className="px-8 pb-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-zinc-800 pb-6">
        <div>
          <h2
            className="font-light leading-none text-white mb-2"
            style={{ ...displayFont, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
          >
            Education
          </h2>
          <p className="text-zinc-400 text-sm">Continuous learning and growth</p>
        </div>
        <span className="text-purple-400 text-sm tracking-widest uppercase font-medium bg-purple-400/10 px-4 py-2 rounded-full border border-purple-400/30">
          {education.length} institutions
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-purple-600/50 via-pink-600/50 to-transparent" />

        <div className="flex flex-col gap-10 pl-12">
          {education.map((edu, i) => (
            <motion.div 
              key={i} 
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 top-7 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-125" />

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-purple-600/50 group-hover:from-zinc-900 group-hover:to-zinc-950 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="rounded-md h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg leading-tight"
                        style={displayFont}
                      >
                        {edu.school}
                      </h3>
                      <p className="text-purple-400 text-sm mt-0.5 font-medium">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-zinc-400 text-xs tracking-wide font-medium block">{edu.date}</span>
                    <p className="text-zinc-500 text-xs mt-1">{edu.location}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 group-hover:text-zinc-200 transition-colors">{edu.description}</p>
                
                {/* Achievements */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors"
                    >
                      {achievement}
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