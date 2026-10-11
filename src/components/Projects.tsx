import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import hackYourHeart from "../assets/hackYourHeart.png";
import pythonImg from "../assets/python.png";
import mhwImg from "../assets/MHW.avif";
import elizaImg from "../assets/ELIZA.png";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const projects = [
    {
      Name: "HackYourHeart",
      img: hackYourHeart,
      description: "A health monitoring application built at HackMIT that explores the integration of hardware sensors with software systems to collect and visualize real-time health data.",
      github: "",
      live: "",
      tags: ["Hardware", "IoT", "React", "Data Visualization"]
    },
    {
      Name: "Blockchain Transaction Processing Automation",
      img: pythonImg,
      description: "A Python-based data pipeline that aggregates, normalizes, and analyzes blockchain transactions across multiple networks including Tron, Polygon, and Solana for streamlined data reconciliation.",
      github: "",
      live: "",
      tags: ["Python", "Blockchain", "Data Pipeline", "Web3"]
    },
    {
      Name: "Monster Hunter Stat Cards",
      img: mhwImg,
      description: "A compact stat-card web app inspired by the Monster Hunter franchise, displaying game monsters with structured attributes and a clean, interactive UI built using frontend fundamentals. Built this in my freshmen year for fun",
      github: "",
      live: "https://aboubakaryt.github.io/Monster-Hunter-Stat-Cards/",
      tags: ["React", "Frontend", "Game Dev", "UI/UX"]
    },
    {
      Name: "Project Eliza",
      img: elizaImg,
      description: "A recreation of one of the earliest chatbot systems, simulating conversational responses using rule-based logic to demonstrate foundational NLP concepts.",
      github: "https://github.com/AboubakaryT/Project_Eliza",
      live: "",
      tags: ["NLP", "AI", "Python", "Chatbot"]
    },
  ];

  return (
    <div id="projects" className="w-full px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <h2 
              className="font-light leading-none text-white mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontStyle: "italic" }}
            >
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-sm">Building things that matter</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={goToPrev} 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={goToNext} 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4">
              {projects.map((prj, i) => (
                <motion.div
                  key={i}
                  className="embla__slide flex-none w-[85%] sm:w-[60%] lg:w-[420px] pl-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* CARD */}
                  <div className="group relative border border-zinc-800 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-xl flex flex-col h-full hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* IMAGE */}
                    <div className="relative h-56 w-full overflow-hidden bg-zinc-800">
                      <img
                        src={prj.img}
                        alt={prj.Name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <h2 className="font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {prj.Name}
                      </h2>

                      <p className="text-sm text-zinc-400 mb-4 flex-grow leading-relaxed">
                        {prj.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prj.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-zinc-800/50">
                        {prj.github && (
                          <a
                            href={prj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 text-xs px-3 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 hover:text-white font-medium transition-all duration-300 group-hover:border-blue-500/30"
                          >
                            <FaGithub size={14} /> Code
                          </a>
                        )}

                        {prj.live && (
                          <a
                            href={prj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 text-xs px-3 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                          >
                            <FaExternalLinkAlt size={14} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button 
            onClick={goToPrev} 
            className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={goToNext} 
            className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}