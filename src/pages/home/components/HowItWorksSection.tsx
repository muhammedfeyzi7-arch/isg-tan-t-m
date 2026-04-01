const steps = [
  {
    step: "01",
    icon: "ri-building-line",
    title: "Firmaları Tanımlayın",
    desc: "Sisteme firmalarınızı ekleyin, her birini kendi yönetim alanında izole biçimde yapılandırın. OSGB veya çoklu firma yapıları için esnek organizasyon.",
    tags: ["Firma Kaydı", "OSGB Yönetimi", "Çoklu Yapı"],
  },
  {
    step: "02",
    icon: "ri-user-settings-line",
    title: "Personel ve Evraklarını Yönetin",
    desc: "Her firmaya bağlı personeli tanımlayın. Sertifika, eğitim belgesi ve kişisel evrakları kategorili yapıda yükleyin, takip edin.",
    tags: ["Personel Kaydı", "Evrak Yükleme", "Sertifika Takibi"],
  },
  {
    step: "03",
    icon: "ri-dashboard-3-line",
    title: "Tek Panelden Takip Edin",
    desc: "Tüm firmaları, personelleri ve evrakları tek bir kontrol panelinden izleyin. Vadesi gelen belgeler için anlık uyarılar alın, raporlar oluşturun.",
    tags: ["Anlık Uyarılar", "Raporlama", "Toplu İşlem"],
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
            Nasıl Çalışır?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mt-3 mb-4">
            3 Adımda Başlayın
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Kurulum gerektirmez. Sistemde hesabınız açıldığı anda tüm süreçleri dijital olarak yönetmeye başlayın.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="relative bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-emerald-200 transition-all duration-300 group cursor-default"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-slate-100 group-hover:text-emerald-100 transition-colors select-none">
                  {s.step}
                </span>
                <div className="w-11 h-11 flex items-center justify-center rounded-md bg-emerald-600 group-hover:bg-emerald-500 transition-colors">
                  <i className={`${s.icon} text-white text-xl`} />
                </div>
              </div>

              <h3 className="text-slate-900 font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Connector line (not for last) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-10 w-8 h-0.5 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
