import { useState } from "react";

const features = [
  {
    icon: "ri-team-line",
    title: "Personel Yönetimi",
    desc: "Tüm çalışanlarınızın bilgilerini, sertifikalarını ve eğitim durumlarını merkezi olarak takip edin.",
    color: "from-emerald-900/60 to-emerald-800/30",
  },
  {
    icon: "ri-folder-shield-2-line",
    title: "Evrak Yönetimi",
    desc: "Güvenlik belgelerini kategorize ederek sisteme yükleyin, düzenleyin ve arşivleyin.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-building-4-line",
    title: "Firma Bazlı Çalışma",
    desc: "Her firmayı ayrı bir yapı olarak tanımlayın, verilerini izole ve güvenli şekilde yönetin.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-file-excel-2-line",
    title: "Excel ile Toplu İşlem",
    desc: "Personel ve evrak verilerini Excel üzerinden toplu olarak içe aktarın ve dışa aktarın.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-draft-line",
    title: "Tutanak Oluşturma",
    desc: "Kaza, ramak kala ve teftiş tutanaklarını dijital ortamda oluşturun, imzalayın ve arşivleyin.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-price-tag-3-line",
    title: "Kategori Bazlı Evrak Takibi",
    desc: "Belgelerinizi kategoriye göre filtreleyin, vadesi yaklaşan evrakları anında görün.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-download-cloud-2-line",
    title: "Toplu Evrak İndirme",
    desc: "Seçili personel veya firmaya ait tüm belgeleri tek tıkla paketleyerek indirin.",
    color: "from-slate-800 to-slate-700/80",
  },
  {
    icon: "ri-lock-password-line",
    title: "Güvenli Giriş Sistemi",
    desc: "Rol bazlı yetkilendirme ve güvenli kimlik doğrulama ile verilerinizi koruyun.",
    color: "from-slate-800 to-slate-700/80",
  },
];

export default function FeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="features" className="bg-slate-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              Özellikler
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-3">
              Tüm İSG Araçları
              <br />
              <span className="text-emerald-400">Bir Arada</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-md leading-relaxed">
            İSG süreçlerinizin her aşamasını kapsayan modüler yapı ile ihtiyacınıza göre esnek çalışın.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`relative bg-gradient-to-br ${feat.color} border rounded-lg p-6 transition-all duration-300 cursor-default ${
                activeIdx === idx
                  ? "border-emerald-500/60 scale-[1.02]"
                  : "border-white/8 hover:border-white/20"
              }`}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-md mb-5 ${
                activeIdx === idx ? "bg-emerald-600" : "bg-white/10"
              } transition-colors`}>
                <i className={`${feat.icon} text-white text-xl`} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{feat.title}</h3>
              <p className={`text-sm leading-relaxed transition-colors ${
                activeIdx === idx ? "text-slate-300" : "text-slate-500"
              }`}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
