const TEAM = [
  {
    name: "Muhammed Feyzi",
    title: "İSG Uzmanı",
    initials: "MF",
    contacts: [
      {
        id: "call-mf",
        icon: "ri-phone-fill",
        label: "Ara",
        sublabel: "Hemen telefon ile ulaşın",
        value: "+90 545 177 28 08",
        href: "tel:+905451772808",
        cardClass: "border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/40",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        labelColor: "text-slate-800",
        sublabelColor: "text-slate-500",
        valueColor: "text-emerald-700",
        badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-200",
        badge: "Hızlı Yanıt",
      },
      {
        id: "wa-mf",
        icon: "ri-whatsapp-fill",
        label: "WhatsApp",
        sublabel: "Mesaj gönderin, anında dönelim",
        value: "wa.me/905451772808",
        href: "https://wa.me/905451772808?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
        target: "_blank",
        cardClass: "border border-[#25D366]/30 hover:border-[#25D366]/70 bg-gradient-to-br from-[#f0fdf4] to-white hover:from-[#dcfce7] hover:to-white",
        iconBg: "bg-[#25D366]/15",
        iconColor: "text-[#1a9e4c]",
        labelColor: "text-slate-800",
        sublabelColor: "text-slate-500",
        valueColor: "text-[#1a9e4c]",
        badgeClass: "bg-[#25D366]/10 text-[#1a9e4c] border border-[#25D366]/30",
        badge: "Önerilen",
      },
      {
        id: "email-mf",
        icon: "ri-mail-send-line",
        label: "E-posta",
        sublabel: "Detaylı konular için yazabilirsiniz",
        value: "muhammedfeyzi@isgdenetim.com.tr",
        href: "mailto:muhammedfeyzi@isgdenetim.com.tr",
        cardClass: "border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        labelColor: "text-slate-700",
        sublabelColor: "text-slate-400",
        valueColor: "text-slate-500",
        badgeClass: "",
        badge: "",
      },
    ],
  },
  {
    name: "Ahmet Orhun Uysal",
    title: "İSG Danışmanı",
    initials: "AU",
    contacts: [
      {
        id: "call-au",
        icon: "ri-phone-fill",
        label: "Ara",
        sublabel: "Hemen telefon ile ulaşın",
        value: "+90 538 859 08 40",
        href: "tel:+905388590840",
        cardClass: "border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/40",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        labelColor: "text-slate-800",
        sublabelColor: "text-slate-500",
        valueColor: "text-emerald-700",
        badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-200",
        badge: "Hızlı Yanıt",
      },
      {
        id: "wa-au",
        icon: "ri-whatsapp-fill",
        label: "WhatsApp",
        sublabel: "Mesaj gönderin, anında dönelim",
        value: "wa.me/905388590840",
        href: "https://wa.me/905388590840?text=Merhaba%2C%20%C4%B0SG%20Denetim%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
        target: "_blank",
        cardClass: "border border-[#25D366]/30 hover:border-[#25D366]/70 bg-gradient-to-br from-[#f0fdf4] to-white hover:from-[#dcfce7] hover:to-white",
        iconBg: "bg-[#25D366]/15",
        iconColor: "text-[#1a9e4c]",
        labelColor: "text-slate-800",
        sublabelColor: "text-slate-500",
        valueColor: "text-[#1a9e4c]",
        badgeClass: "bg-[#25D366]/10 text-[#1a9e4c] border border-[#25D366]/30",
        badge: "Önerilen",
      },
      {
        id: "email-au",
        icon: "ri-mail-send-line",
        label: "E-posta",
        sublabel: "Detaylı konular için yazabilirsiniz",
        value: "orhunuysal@isgdenetim.com.tr",
        href: "mailto:orhunuysal@isgdenetim.com.tr",
        cardClass: "border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        labelColor: "text-slate-700",
        sublabelColor: "text-slate-400",
        valueColor: "text-slate-500",
        badgeClass: "",
        badge: "",
      },
    ],
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-bold tracking-widest uppercase mb-5">
            İletişim
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Bize Ulaşın
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Sorularınız için uzman ekibimizden herhangi biriyle iletişime geçebilirsiniz.
            En hızlı yanıtı WhatsApp üzerinden alırsınız.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {TEAM.map((person) => (
            <div key={person.name} className="flex flex-col gap-4">
              {/* Person Header */}
              <div
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 border border-slate-700"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-base shrink-0">
                  {person.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">{person.name}</p>
                  <p className="text-emerald-400 text-xs font-medium mt-0.5">{person.title}</p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col gap-3">
                {person.contacts.map((opt) => (
                  <a
                    key={opt.id}
                    href={opt.href}
                    target={(opt as { target?: string }).target}
                    rel={(opt as { target?: string }).target === "_blank" ? "nofollow noopener noreferrer" : undefined}
                    className={`group flex items-center gap-5 p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-pointer no-underline ${opt.cardClass}`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${opt.iconBg}`}>
                      <i className={`${opt.icon} text-xl ${opt.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-sm font-bold ${opt.labelColor}`}>{opt.label}</span>
                        {opt.badge && (
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${opt.badgeClass}`}>
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mb-1 ${opt.sublabelColor}`}>{opt.sublabel}</p>
                      <p className={`text-xs font-medium truncate ${opt.valueColor}`}>{opt.value}</p>
                    </div>
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 text-slate-400">
                      <i className="ri-arrow-right-line text-base" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-xs mt-10">
          Çalışma saatleri:{" "}
          <strong className="text-slate-500">Pazartesi – Cumartesi, 09:00 – 18:00</strong>
        </p>
      </div>
    </section>
  );
}
