import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "My Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-[70px] md:h-[85px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-baseline gap-2">
          <span className="font-logo text-[28px] md:text-[32px] font-semibold text-[#D5D5D5] tracking-wide">
            NIBIR
          </span>
          <span
            className="font-logo-script text-[20px] md:text-[24px] text-[#D5D5D5]"
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
          >
            Kalita
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-nav text-[18px] lg:text-[20px] font-semibold text-[#D5D5D5] hover:text-[#BED92D] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#D5D5D5] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#D5D5D5] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#D5D5D5] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#070707]/95 backdrop-blur-xl">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-nav text-[18px] font-semibold text-[#D5D5D5] hover:text-[#BED92D] transition-colors duration-200 text-left bg-transparent border-none cursor-pointer py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
