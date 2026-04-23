import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Marquee from "./components/Marquee";

const marqueeItems = [
  "Software Engineer",
  "Full-Stack Development",
  "Artificial Intelligence",
  "First-Generation College Student",
  "UB Computer Science",
  "Builder",
];

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Marquee items={marqueeItems} />
      <Experience />
      <Marquee items={marqueeItems} />
      <Education />
      <Marquee items={marqueeItems} />
      <Projects />
    </>
  );
}

export default App;