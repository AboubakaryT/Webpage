import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Marquee from "./components/Marquee";
import { BrowserRouter, Route } from "react-router";

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
    <BrowserRouter>
    <>
      <Navbar />
      <Home />
      <Marquee items={marqueeItems} />
      <Experience />
      <Marquee items={marqueeItems} />
      <Education />
      <Marquee items={marqueeItems} />
      <Projects />
      <Route>
        
      </Route>
    </>
    </BrowserRouter>
  );
}

export default App;