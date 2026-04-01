import { useState, useEffect, useRef } from "react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      id: "call",
      label: "Ara — M. Feyzi",
      sublabel: "+90 545 177 28 08",
      href: "tel:+905451772808",
      icon: "ri-phone-fill",
      bg: "bg-emerald-500",
      hoverBg: "hover:bg-emerald-600",
    },
    {
      id: "call-au",
      label: "Ara — A. O. Uysal",
      sublabel: "+90 538 859 08 40",
      href: "tel:+905388590840",
      icon: "ri-phone-fill",
      bg: "bg-emerald-500",
      hoverBg: "hover:bg-emerald-600",
    },
    {
      id: "whatsapp",
      label: "WhatsApp — M. Feyzi",
      sublabel: "+90 545 177 28 08",
      href: "https://wa.me/905451772808?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
      icon: "ri-whatsapp-fill",
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#1db954]",
      target: "_blank",
    },
    {
      id: "whatsapp-au",
      label: "WhatsApp — A. O. Uysal",
      sublabel: "+90 538 859 08 40",
      href: "https://wa.me/905388590840?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
      icon: "ri-whatsapp-fill",
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#1db954]",
      target: "_blank",
    },
    {
      id: "email",
      label: "E-posta",
      sublabel: "muhammedfeyzi@isgdenetim.com.tr",
      href: "mailto:muhammedfeyzi@isgdenetim.com.tr",
      icon: "ri-mail-send-line",
      bg: "bg-slate-600",
      hoverBg: "hover:bg-slate-700",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
    >
      {/* Menu items */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Label card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-slate-100 mb-1">
          <p className="text-slate-700 text-sm font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Bize Ulaşın
          </p>
          <p className="text-slate-400 text-xs">Size yardımcı olmaktan memnuniyet duyarız</p>
        </div>

        {/* Contact options */}
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-3 ${item.bg} ${item.hoverBg} text-white rounded-2xl px-4 py-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer no-underline`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-xl">
              <i className={`${item.icon} text-lg`} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold leading-tight whitespace-nowrap">{item.label}</p>
              <p className="text-xs text-white/70 leading-tight whitespace-nowrap max-w-[180px] truncate">
                {item.sublabel}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Main WhatsApp button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
          isOpen
            ? "bg-slate-700 hover:bg-slate-800 rotate-45"
            : "bg-green-500 hover:bg-green-600 hover:scale-110"
        }`}
        aria-label="İletişim menüsünü aç"
      >
        <div className="flex items-center justify-center w-14 h-14">
          {isOpen ? (
            <i className="ri-close-line text-white text-2xl" />
          ) : (
            <i className="ri-whatsapp-line text-white text-3xl" />
          )}
        </div>
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        )}
      </button>
    </div>
  );
}
