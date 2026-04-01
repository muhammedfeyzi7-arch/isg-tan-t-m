const highlights = [
  { icon: "ri-file-upload-line", title: "Evrak Yükleme", desc: "Tüm belgelerinizi kategorize ederek sisteme yükleyin." },
  { icon: "ri-user-follow-line", title: "Personel Takibi", desc: "Çalışan bilgilerini ve sertifikalarını anlık takip edin." },
  { icon: "ri-building-2-line", title: "Firma Bazlı Yönetim", desc: "Her firmanın verilerini ayrı ve güvenli şekilde yönetin." },
  { icon: "ri-file-text-line", title: "Tutanak Oluşturma", desc: "Dijital tutanakları hızla oluşturun ve arşivleyin." },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              İSG Dijital Dönüşüm
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mt-3">
              Evrak kaosunu bitirin.
              <br />
              <span className="text-emerald-600">Süreçleri tek çatı</span> altında<br />yönetin.
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed">
            İSG süreçlerindeki karmaşıklığı ortadan kaldırmak için tasarlanmış dijital platform. OSGB ve firmalar için kurumsal düzeyde yönetim araçları.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-slate-100 hover:border-emerald-200 transition-all duration-200 cursor-default group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-md bg-emerald-50 group-hover:bg-emerald-100 transition-colors mb-4">
                  <i className={`${item.icon} text-emerald-600 text-xl`} />
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: image */}
          <div className="relative h-80 md:h-[420px] rounded-xl overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20occupational%20health%20safety%20management%20dashboard%20interface%20on%20large%20screen%2C%20clean%20minimalist%20office%20environment%2C%20professional%20workspace%20with%20multiple%20monitors%20displaying%20data%20analytics%20charts%20and%20employee%20records%2C%20soft%20natural%20light%2C%20neutral%20tones%20beige%20white%20walls%2C%20contemporary%20corporate%20interior%20design%2C%20ultra%20clean%20professional%20atmosphere&width=800&height=600&seq=about-isg-002&orientation=landscape"
              alt="İSG Yönetim Sistemi"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-emerald-600">
                <i className="ri-shield-check-line text-white text-lg" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">Güvenli ve Uyumlu Sistem</p>
                <p className="text-slate-500 text-xs mt-0.5">İSG standartlarına uygun sistem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
