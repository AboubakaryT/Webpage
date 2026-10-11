import { motion } from "framer-motion";
import { FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPostgresql } from "react-icons/si";

const displayFont = { fontFamily: "'Cormorant Garamond', serif" };

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: FaReact,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: FaNode,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express", "Python", "REST APIs"]
    },
    {
      category: "AI/ML",
      icon: SiTensorflow,
      color: "from-orange-500 to-red-500",
      skills: ["TensorFlow", "PyTorch", "NLP", "Data Analysis"]
    },
    {
      category: "Databases",
      icon: SiPostgresql,
      color: "from-purple-500 to-pink-500",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Data Modeling"]
    },
    {
      category: "DevOps",
      icon: FaGitAlt,
      color: "from-indigo-500 to-blue-500",
      skills: ["Git", "Docker", "CI/CD", "Cloud Deployment"]
    },
    {
      category: "Tools",
      icon: FaDatabase,
      color: "from-yellow-500 to-orange-500",
      skills: ["VS Code", "Figma", "Postman", "Linux"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="px-8 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16 text-center">
        <h2
          className="font-light leading-none text-white mb-3"
          style={{ ...displayFont, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
        >
          Tech Stack
        </h2>
        <p className="text-zinc-400 text-lg">Tools and technologies I work with</p>
      </div>

      {/* Tech Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              className="group relative"
              variants={itemVariants}
            >
              {/* Card background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[10px] bg-zinc-900 flex items-center justify-center">
                    <Icon className="text-2xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold text-lg mb-3"
                  style={displayFont}
                >
                  {tech.category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 group-hover:bg-blue-500/20 group-hover:text-blue-300 border border-zinc-700 group-hover:border-blue-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-zinc-400 text-lg mb-6">
          Always learning and staying up-to-date with the latest technologies
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
        >
          Let's Build Something Amazing
        </a>
      </div>
    </section>
  );
}
