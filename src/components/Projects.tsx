import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

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
    },
    {
      Name: "Blockchain Transaction Processing Automation",
      img: pythonImg,
      description: "A Python-based data pipeline that aggregates, normalizes, and analyzes blockchain transactions across multiple networks including Tron, Polygon, and Solana for streamlined data reconciliation.",
      github: "",
      live: "",
    },
    {
      Name: "Monster Hunter Stat Cards",
      img: mhwImg,
      description: "A compact stat-card web app inspired by the Monster Hunter franchise, displaying game monsters with structured attributes and a clean, interactive UI built using frontend fundamentals. Built this in my freshmen year for fun",
      github: "",
      live: "https://aboubakaryt.github.io/Monster-Hunter-Stat-Cards/",
    },
    {
      Name: "Project Eliza",
      img: elizaImg,
      description: "A recreation of one of the earliest chatbot systems, simulating conversational responses using rule-based logic to demonstrate foundational NLP concepts.",
      github: "https://github.com/AboubakaryT/Project_Eliza",
      live: "",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center px-2 py-10">

      {/* Left */}
      <button onClick={goToPrev} className="hidden md:bloick text-xl mr-4">
        <FaChevronLeft />
      </button>

      {/* Carousel */}
      <div className="embla w-full max-w-6xl">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-4">

            {projects.map((prj, i) => (
              <div
                key={i}
                className="embla__slide flex-none w-[78%] sm:w-[55%] lg:w-[380px] pl-4"
              >

                {/* CARD (NO STATE LOGIC) */}
                <div className="
                  border border-zinc-800
                  rounded-2xl
                  overflow-hidden
                  bg-zinc-900
                  shadow-xl
                  flex flex-col
                  h-full
                ">

                  {/* IMAGE (FIXED SIZE = CLEAN LOOK) */}
                  <div className="h-52 w-full overflow-hidden">
                    <img
                      src={prj.img}
                      alt={prj.Name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h1 className="font-semibold text-lg">
                      {prj.Name}
                    </h1>

                    <p className="text-sm text-zinc-400 mt-2 flex-grow">
                      {prj.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                      {prj.github && (
                        <a
                          href={prj.github}
                          target="_blank"
                          className="text-xs px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition"
                        >
                          GitHub
                        </a>
                      )}

                      {prj.live && (
                        <a
                          href={prj.live}
                          target="_blank"
                          className="text-xs px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 transition"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Right */}
      <button onClick={goToNext} className="hidden md:block text-xl ml-4">
        <FaChevronRight />
      </button>

    </div>
  );
}