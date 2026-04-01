import { Link } from "react-router-dom";

const footerLinks = {
  "Hakkında": [
    { label: "Sistem Nedir?", href: "#about", internal: false },
    { label: "Özellikler", href: "#features", internal: false },
    { label: "Nasıl Çalışır?", href: "#how-it-works", internal: false },
    { label: "Panel Önizleme", href: "#dashboard", internal: false },
  ],
  "Yasal": [
    { label: "Gizlilik Politikası", href: "/gizlilik", internal: true },
    { label: "Kullanım Koşulları", href: "/kullanim-kosullari", internal: true },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk", internal: true },
  ],
};

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://storage.readdy-site.link/project_files/32088732-9255-4415-9fac-6f13c8e4aa80/e9d7b15a-eadf-43ba-b7e4-eee29bb2a141_ChatGPT-Image-28-Mar-2026-15_38_07.png?v=f1e78272586c7081b6d13820591aa1f8"
                alt="İSG Denetim Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Firmalar ve OSGB yapıları için geliştirilmiş dijital İSG yönetim platformu. Güvenli, hızlı ve profesyonel.
            </p>
          </div>

          {/* Hakkında & Yasal Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll(link.href);
                        }}
                        className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Bize Ulaşın */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5">Bize Ulaşın</h4>
            <ul className="space-y-3">
              {/* Ara — Muhammed Feyzi */}
              <li>
                <a
                  href="tel:+905451772808"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-emerald-600/20 text-slate-400 group-hover:text-emerald-400 transition-all duration-200">
                    <i className="ri-phone-fill text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Ara · M. Feyzi</p>
                    <span className="text-slate-200 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                      +90 545 177 28 08
                    </span>
                  </div>
                </a>
              </li>

              {/* Ara — Ahmet Orhun Uysal */}
              <li>
                <a
                  href="tel:+905388590840"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-emerald-600/20 text-slate-400 group-hover:text-emerald-400 transition-all duration-200">
                    <i className="ri-phone-fill text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Ara · A. O. Uysal</p>
                    <span className="text-slate-200 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                      +90 538 859 08 40
                    </span>
                  </div>
                </a>
              </li>

              {/* WhatsApp — M. Feyzi */}
              <li>
                <a
                  href="https://wa.me/905451772808?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#25D366]/10 group-hover:bg-[#25D366]/25 text-[#25D366] transition-all duration-200">
                    <i className="ri-whatsapp-fill text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">WhatsApp · M. Feyzi</p>
                    <span className="text-[#25D366] text-sm font-medium group-hover:text-[#1db954] transition-colors">
                      +90 545 177 28 08
                    </span>
                  </div>
                </a>
              </li>

              {/* WhatsApp — A. O. Uysal */}
              <li>
                <a
                  href="https://wa.me/905388590840?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#25D366]/10 group-hover:bg-[#25D366]/25 text-[#25D366] transition-all duration-200">
                    <i className="ri-whatsapp-fill text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">WhatsApp · A. O. Uysal</p>
                    <span className="text-[#25D366] text-sm font-medium group-hover:text-[#1db954] transition-colors">
                      +90 538 859 08 40
                    </span>
                  </div>
                </a>
              </li>

              {/* E-posta — Muhammed Feyzi */}
              <li>
                <a
                  href="mailto:muhammedfeyzi@isgdenetim.com.tr"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 text-slate-500 group-hover:text-slate-300 transition-all duration-200">
                    <i className="ri-mail-send-line text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">E-posta · M. Feyzi</p>
                    <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors truncate max-w-[180px] block">
                      muhammedfeyzi@isgdenetim.com.tr
                    </span>
                  </div>
                </a>
              </li>

              {/* E-posta — Ahmet Orhun Uysal */}
              <li>
                <a
                  href="mailto:orhunuysal@isgdenetim.com.tr"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 text-slate-500 group-hover:text-slate-300 transition-all duration-200">
                    <i className="ri-mail-send-line text-base" />
                  </span>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">E-posta · A. O. Uysal</p>
                    <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors truncate max-w-[180px] block">
                      orhunuysal@isgdenetim.com.tr
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} İSG Denetim. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/gizlilik"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/kvkk"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              KVKK
            </Link>
            <Link
              to="/kullanim-kosullari"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
