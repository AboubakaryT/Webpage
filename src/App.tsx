import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Stats />
      <Marquee items={marqueeItems} />
      <Experience />
      <Marquee items={marqueeItems} />
      <Education />
      <Marquee items={marqueeItems} />
      <TechStack />
      <Marquee items={marqueeItems} />
      <Projects/>
      <Marquee items={marqueeItems} />
      <Contact/>
      <Footer />
    </>
  )
}

export default App;