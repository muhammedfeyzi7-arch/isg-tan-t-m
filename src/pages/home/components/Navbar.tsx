import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Genel", href: "#hero" },
  { label: "Sistem", href: "#about" },
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "Avantajlar", href: "#advantages" },
  { label: "Panel", href: "#dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={() => handleNavClick("#hero")} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
            <img
              src="https://storage.readdy-site.link/project_files/32088732-9255-4415-9fac-6f13c8e4aa80/e9d7b15a-eadf-43ba-b7e4-eee29bb2a141_ChatGPT-Image-28-Mar-2026-15_38_07.png?v=f1e78272586c7081b6d13820591aa1f8"
              alt="İSG Denetim Logo"
              className="relative h-16 md:h-20 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.isgdenetim.com.tr"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Panele Giriş Yap
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <i className={`ri-${menuOpen ? "close" : "menu"}-line text-2xl ${scrolled ? "text-slate-800" : "text-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-700 font-medium text-left text-sm cursor-pointer hover:text-emerald-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://app.isgdenetim.com.tr"
            className="mt-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-md text-center whitespace-nowrap cursor-pointer"
          >
            Panele Giriş Yap
          </a>
        </div>
      )}
    </header>
  );
}
