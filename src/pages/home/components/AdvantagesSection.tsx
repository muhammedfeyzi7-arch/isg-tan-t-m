const advantages = [
  {
    icon: "ri-time-line",
    title: "Zamandan Tasarruf",
    desc: "Manuel evrak takibine harcanan saatleri sıfıra indirin. Otomatik hatırlatmalar ve toplu işlemlerle iş akışınızı hızlandırın.",
    metric: "%70",
    metricLabel: "daha hızlı süreç",
  },
  {
    icon: "ri-error-warning-line",
    title: "Karışıklık Ortadan Kalkar",
    desc: "Dağınık dosyalar, kayıp belgeler ve anlık olmayan bilgiler tarih oluyor. Her şey tek bir sistemde, her zaman güncel.",
    metric: "%95",
    metricLabel: "hata azalması",
  },
  {
    icon: "ri-search-eye-line",
    title: "Evraklara Hızlı Erişim",
    desc: "İstediğiniz belgeye saniyeler içinde ulaşın. Gelişmiş filtreleme ve kategori yapısı ile arama süresini minimize edin.",
    metric: "3sn",
    metricLabel: "ortalama erişim",
  },
  {
    icon: "ri-links-line",
    title: "Entegre Süreçler",
    desc: "Personel, evrak, firma ve tutanak modülleri birbirine entegre çalışır. Veriler otomatik olarak ilişkilendirilir.",
    metric: "8+",
    metricLabel: "entegre modül",
  },
  {
    icon: "ri-shield-check-line",
    title: "Güvenli ve Uyumlu Sistem",
    desc: "Kurumsal standartlarda yönetim altyapısı. Denetimler için her zaman hazır, düzenli ve sistematik bir çalışma ortamı.",
    metric: "✓",
    metricLabel: "İSG standartlarına uygun",
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-slate-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
            Avantajlar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-3 mb-4">
            Neden <span className="text-emerald-400">İSGPanel?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Geleneksel yöntemlerin sınırlılıklarını aşın. Dijital dönüşümün getirdiği hız, düzen ve güveni yaşayın.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.slice(0, 3).map((adv) => (
            <AdvCard key={adv.title} {...adv} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
          {advantages.slice(3).map((adv) => (
            <AdvCard key={adv.title} {...adv} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AdvCardProps {
  icon: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

function AdvCard({ icon, title, desc, metric, metricLabel }: AdvCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/8 hover:border-emerald-500/30 transition-all duration-300 cursor-default group">
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-emerald-600/20 group-hover:bg-emerald-600/30 transition-colors">
          <i className={`${icon} text-emerald-400 text-xl`} />
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-emerald-400">{metric}</span>
          <p className="text-slate-500 text-xs mt-0.5">{metricLabel}</p>
        </div>
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
