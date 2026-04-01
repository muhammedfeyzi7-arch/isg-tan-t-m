export default function CtaSection() {
  return (
    <section id="cta" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-600/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
          Başlamaya Hazır Mısınız?
        </span>
        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
          İSG Süreçlerinizi
          <br />
          <span className="text-emerald-400">Bugün Dijitale Taşıyın</span>
        </h2>
        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Kurumunuzun İSG yönetimini modernleştirin. Evraklar, personel ve tutanaklar tek bir sistemde. Güvenli, hızlı ve profesyonel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.isgdenetim.com.tr"
            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-3"
          >
            <i className="ri-login-box-line text-lg" />
            Panele Giriş Yap
            <i className="ri-arrow-right-line" />
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "ri-shield-check-line", text: "Güvenli Altyapı" },
            { icon: "ri-customer-service-2-line", text: "7/24 Destek" },
            { icon: "ri-cloud-line", text: "Bulut Tabanlı" },
            { icon: "ri-lock-2-line", text: "Şifreli Veri" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-slate-400">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className={`${item.icon} text-emerald-500 text-sm`} />
              </div>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
