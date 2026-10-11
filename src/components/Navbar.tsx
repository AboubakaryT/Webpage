
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-8 max-w-7xl mx-auto w-full">
        <a 
          href="#home"
          className="group flex items-center gap-2"
        >
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontStyle: "italic" }}
            className="select-none font-semibold text-white group-hover:text-zinc-300 transition-colors duration-200"
          >
            AT
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { label: "Home", href: "#home" },
            { label: "Experience", href: "#experince" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({label,  href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-zinc-400 hover:text-white transition-colors duration-200
                           after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                           after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu indicator */}
        <div className="md:hidden text-zinc-400 text-sm">≡</div>
      </div>
    </nav>
  );
}