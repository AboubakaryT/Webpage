import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Marquee from "./components/Marquee";
import { BrowserRouter, Route } from "react-router";
import Contact from "./components/Contact";

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
      <Projects/>
      <Marquee items={marqueeItems} />
      <Contact/>
    </>
  )
}

export default App;