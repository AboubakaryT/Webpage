
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 w-screen bg-white border-b border-slate-100 shadow-sm">
      <div className="flex items-center justify-between h-16 px-8 max-w-6xl mx-auto">
        <span
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontStyle: "italic", color: "#111" }}
          className="select-none font-semibold"
        >
          AT
        </span>

        <ul className="flex items-center gap-4 lg:gap-8 text-sm font-medium text-slate-500">
          {[
            { label: "Home", href: "/" },
            { label: "Experience", href: "#experince" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({label,  href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative pb-0.5 hover:text-black transition-colors duration-200
                           after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                           after:bg-black after:transition-all after:duration-200
                           hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}