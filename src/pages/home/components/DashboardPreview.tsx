export default function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
            Panel Önizleme
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mt-3 mb-4">
            Profesyonel Panel
            <br />
            <span className="text-emerald-600">Deneyimi</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Tüm verilerinize gerçek zamanlı erişim. Temiz arayüz, kolay kullanım.
          </p>
        </div>

        {/* Dashboard Mockup — Real Screenshot */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl bg-slate-900 max-w-6xl mx-auto">
          {/* Browser Chrome Bar */}
          <div className="bg-slate-800 px-5 py-3 flex items-center gap-3 border-b border-slate-700">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex-1 mx-4 bg-slate-700 rounded-md px-3 py-1 text-slate-400 text-xs font-mono truncate">
              app.isgdenetim.com.tr/dashboard
            </div>
            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-refresh-line text-slate-500 text-xs" />
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-lock-line text-emerald-500 text-xs" />
              </div>
            </div>
          </div>

          {/* Real Screenshot */}
          <div className="w-full bg-slate-900">
            <img
              src="https://storage.readdy-site.link/project_files/32088732-9255-4415-9fac-6f13c8e4aa80/68a6f51b-5301-4147-8f7e-f5de3356ee18_Ekran-grnts-2026-03-28-155929.png?v=8244926d34c10437c1ab5551fac56db2"
              alt="İSG Denetim Panel Ekran Görüntüsü"
              className="w-full h-auto object-top block"
              style={{ maxHeight: '640px', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* Bottom badges */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-shield-check-line text-emerald-500 text-base" />
            </div>
            Gerçek sistem ekran görüntüsü — demo değil, canlı panel
          </span>
          <span className="hidden sm:block text-slate-300 text-base">·</span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-semibold">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-award-line text-emerald-600 text-base" />
            </div>
            Güvenli ve Uyumlu Sistem &nbsp;·&nbsp; Denetim ve dokümantasyon odaklı altyapı
          </span>
        </div>
      </div>
    </section>
  );
}
