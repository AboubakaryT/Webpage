import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "2+", label: "Years of Coding", icon: "💻" },
    { number: "2", label: "Internships Completed", icon: "🚀" },
    { number: "15+", label: "Projects Built", icon: "🏗️" },
    { number: "100%", label: "Passion for Excellence", icon: "⭐" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="px-8 py-16 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="group relative"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
