import { useEffect, useRef, useState } from "react";

const IMG = "/images/neden-biz";

/** Görünür olunca true döner; animasyonları tetiklemek için. */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

const calendarCells = [
  1, 0, 1, 0, 1, 0, 0,
  0, 1, 1, 0, 2, 0, 0,
  1, 0, 3, 0, 0, 3, 0,
];

const inventory = [
  { img: "van.webp", name: "Araç", tag: "Zimmetli", warn: false },
  { img: "laptop.webp", name: "Bilgisayar", tag: "Zimmetli", warn: false },
  { img: "phone.webp", name: "Cep Telefonu", tag: "İade Süresi: 5 gün", warn: true },
];

const deadlines = [
  { dot: "bg-red-500", label: "Yüksekte çalışma eğitimi", tag: "Süresi geçti", tagCls: "text-red-600 bg-red-50" },
  { dot: "bg-yellow-400", label: "Periyodik muayene", tag: "5 gün", tagCls: "text-slate-600 bg-slate-50" },
  { dot: "bg-yellow-400", label: "Yangın tatbikatı kontrolü", tag: "12 gün", tagCls: "text-slate-600 bg-slate-50" },
  { dot: "bg-yellow-400", label: "Risk değerlendirmesi", tag: "Güncel", tagCls: "text-slate-600 bg-slate-50" },
];

export default function AdvantagesSection() {
  const [heroRef, heroSeen] = useInView<HTMLDivElement>();
  const [layersRef, layersSeen] = useInView<HTMLDivElement>();
  const [forkRef, forkSeen] = useInView<HTMLDivElement>();
  const [sirenRef, sirenSeen] = useInView<HTMLDivElement>();
  const [calRef, calSeen] = useInView<HTMLDivElement>();
  const [invRef, invSeen] = useInView<HTMLDivElement>();
  const [dlRef, dlSeen] = useInView<HTMLDivElement>();

  const card =
    "relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.25)]";

  return (
    <section id="advantages" className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
      <style>{`
        @keyframes nb-scan { 0%{top:6%;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:90%;opacity:0} }
        @keyframes nb-pulse-ring { 0%{transform:scale(.9);opacity:.9} 100%{transform:scale(1.5);opacity:0} }
        @keyframes nb-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes nb-orbit { to{transform:rotate(360deg)} }
        @keyframes nb-drive { 0%{transform:translateX(-140%)} 70%{transform:translateX(6%)} 100%{transform:translateX(0)} }
        @keyframes nb-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
        @keyframes nb-siren-glow { 0%,100%{opacity:.25;transform:scale(.85)} 50%{opacity:.95;transform:scale(1.25)} }
        @keyframes nb-beam { to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes nb-cell { 0%{transform:scale(.2);opacity:0} 100%{transform:scale(1);opacity:1} }
        @keyframes nb-slide-in { 0%{transform:translateX(30px);opacity:0} 100%{transform:translateX(0);opacity:1} }
        @keyframes nb-pop { 0%{transform:translateY(16px) scale(.96);opacity:0} 100%{transform:translateY(0) scale(1);opacity:1} }
        @keyframes nb-blink { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes nb-flash { 0%,100%{box-shadow:0 0 0 0 rgba(250,204,21,0)} 50%{box-shadow:0 0 22px 4px rgba(250,204,21,.7)} }
        @media (prefers-reduced-motion: reduce){ .nb-anim, .nb-anim *{animation:none !important} }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-yellow-600 bg-yellow-100 rounded-full px-4 py-1.5">
            Neden Biz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mt-4 mb-4">
            Neden <span className="text-yellow-500">İSGDenetim?</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Dağınık dosyalara, kayıp belgelere ve geciken kontrollere son. Her şey tek sistemde, her zaman güncel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 1 — Yapay zekâ + QR okutma */}
          <div ref={heroRef} className={`${card} nb-anim lg:col-span-7 lg:row-span-2 flex flex-col`}>
            <div className="relative">
              <img
                src={`${IMG}/qr-worker.webp`}
                alt="QR kodu telefonla okutan iş güvenliği çalışanı"
                className="w-full h-auto block"
                loading="lazy"
              />
              {/* QR alanı: tarama çizgisi */}
              <div className="absolute" style={{ left: "58%", top: "50%", width: "17%", height: "34%" }}>
                <div className="absolute inset-0 rounded-xl border-2 border-yellow-400/80" style={heroSeen ? { animation: "nb-flash 2.4s ease-in-out infinite" } : undefined} />
                <div
                  className="absolute left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_14px_3px_rgba(250,204,21,.9)]"
                  style={heroSeen ? { animation: "nb-scan 2.4s ease-in-out infinite" } : { opacity: 0 }}
                />
              </div>
              {/* Okutma sonrası açılan ekipman kartı */}
              <div
                className="absolute right-3 top-4 md:right-6 md:top-6 w-[52%] max-w-[300px] rounded-2xl bg-white/95 backdrop-blur p-3 md:p-4 shadow-xl border border-slate-100"
                style={heroSeen ? { animation: "nb-pop .7s .9s cubic-bezier(.2,.8,.2,1) both" } : { opacity: 0 }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400 flex items-center justify-center shrink-0">
                    <i className="ri-tools-fill text-slate-900 text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm leading-tight truncate">Üretim Tezgâhı-01</p>
                    <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5">Aktif</span>
                  </div>
                </div>
                <ul className="mt-2.5 space-y-1 text-[11px] md:text-xs text-slate-700">
                  <li><span className="text-slate-400">Envanter No:</span> TZG-001</li>
                  <li><span className="text-slate-400">Son Kontrol:</span> 12.10.2026</li>
                  <li><span className="text-slate-400">Sonraki Kontrol:</span> 12.10.2027</li>
                </ul>
                <div className="mt-2.5 text-center text-xs font-bold bg-yellow-400 text-slate-900 rounded-lg py-1.5">Detayları Gör</div>
              </div>
            </div>
            <div className="p-6 md:p-8 pt-2">
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase">Yapay zekâ</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1 mb-2">Yapay zekâ destekli İSG yönetimi</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Risk değerlendirmeleri, dokümanlar ve operasyonel süreçlerde yapay zekâdan faydalanarak işlerinizi hızlandırın.
              </p>
            </div>
          </div>

          {/* 2 — Tek veri, beş panel */}
          <div ref={layersRef} className={`${card} nb-anim lg:col-span-5 p-6 md:p-7 flex items-center justify-between gap-4 min-h-[190px]`}>
            <div className="max-w-[55%]">
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase">Şimdi</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1 mb-2">Tek veri, beş panel</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Bilgi bir kez girilir, tüm panellerde anında güncellenir.</p>
            </div>
            <div className="relative w-40 h-32 md:w-48 md:h-36 shrink-0">
              {/* yörünge */}
              <div className="absolute inset-0" style={layersSeen ? { animation: "nb-orbit 9s linear infinite" } : undefined}>
                {[
                  "left-0 top-1/2 -translate-y-1/2",
                  "right-0 top-1/2 -translate-y-1/2",
                  "left-1/2 top-0 -translate-x-1/2",
                  "left-1/2 bottom-0 -translate-x-1/2",
                ].map((p) => (
                  <span key={p} className={`absolute ${p} w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,.9)]`} />
                ))}
              </div>
              <img
                src={`${IMG}/layers.webp`}
                alt="Katmanlı panel simgesi"
                className="absolute inset-[12%] w-[76%] h-[76%] object-contain"
                style={layersSeen ? { animation: "nb-float 3.6s ease-in-out infinite" } : undefined}
                loading="lazy"
              />
            </div>
          </div>

          {/* 3 — QR kodlu ekipman (forklift geriden gelir) */}
          <div ref={forkRef} className={`${card} nb-anim lg:col-span-3 p-6 flex flex-col`}>
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                <i className="ri-qr-scan-2-line text-yellow-600 text-xl" />
              </div>
              <div className="overflow-hidden w-32 h-24 flex items-end justify-end">
                <img
                  src={`${IMG}/forklift.webp`}
                  alt="Forklift"
                  className="w-32 h-auto"
                  style={forkSeen ? { animation: "nb-drive 2.2s cubic-bezier(.2,.7,.2,1) both, nb-bob .5s 2.2s ease-in-out 3" } : { transform: "translateX(-140%)" }}
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-3 mb-2 leading-snug">QR kodlu ekipman yönetimi</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ekipmana özel QR kodla sahada anında erişim, kontrol geçmişi ve sonraki kontrol tarihini görün.
            </p>
          </div>

          {/* 4 — Acil durum ekipleri (siren yanar) */}
          <div ref={sirenRef} className={`${card} nb-anim lg:col-span-2 p-6 flex flex-col`}>
            <div className="relative self-end w-24 h-24 -mb-2">
              <span
                className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/50 blur-xl"
                style={sirenSeen ? { animation: "nb-siren-glow 1.1s ease-in-out infinite" } : { opacity: 0 }}
              />
              {/* dönen ışık hüzmesi */}
              <span
                className="absolute left-1/2 top-1/2 w-28 h-3 rounded-full bg-gradient-to-r from-red-500/0 via-red-400/70 to-red-500/0"
                style={sirenSeen ? { transform: "translate(-50%,-50%)", animation: "nb-beam 1.4s linear infinite" } : { opacity: 0 }}
              />
              <span
                className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border-2 border-red-400"
                style={sirenSeen ? { animation: "nb-pulse-ring 1.1s ease-out infinite" } : { opacity: 0 }}
              />
              <img src={`${IMG}/siren.webp`} alt="Acil durum sireni" className="relative w-full h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2 mb-2 leading-snug">Acil durum ekipleri</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ekipleri oluşturun, görevlendirin, eksikleri ve ekip dağılımını tek ekrandan yönetin.
            </p>
          </div>

          {/* 5 — Takvim */}
          <div ref={calRef} className={`${card} nb-anim lg:col-span-4 p-6`}>
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                <i className="ri-calendar-check-line text-yellow-600 text-xl" />
              </div>
              <img src={`${IMG}/calendar.webp`} alt="Takvim" className="w-20 h-auto" style={calSeen ? { animation: "nb-float 4s ease-in-out infinite" } : undefined} loading="lazy" />
            </div>
            <div className="flex items-center justify-between mt-3 mb-3">
              <h3 className="text-lg font-extrabold text-slate-900">Haziran</h3>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />Yapıldı</span>
                <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" />Planlı</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarCells.map((c, i) => (
                <span
                  key={i}
                  className={`h-7 rounded-md ${
                    c === 1 ? "bg-yellow-400" : c === 2 ? "bg-slate-900" : c === 3 ? "border-2 border-dashed border-yellow-400" : "bg-slate-100"
                  }`}
                  style={
                    calSeen
                      ? { animation: `nb-cell .45s ${i * 70}ms cubic-bezier(.2,.9,.3,1.4) both` }
                      : { opacity: 0 }
                  }
                />
              ))}
            </div>
          </div>

          {/* 6 — Envanter ve zimmet */}
          <div ref={invRef} className={`${card} nb-anim lg:col-span-4 p-6`}>
            <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
              <i className="ri-stack-line text-yellow-600 text-xl" />
            </div>
            <div className="space-y-2.5">
              {inventory.map((it, i) => (
                <div
                  key={it.name}
                  className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 px-3 py-2"
                  style={invSeen ? { animation: `nb-slide-in .6s ${i * 250}ms cubic-bezier(.2,.8,.2,1) both` } : { opacity: 0 }}
                >
                  <span className="flex items-center gap-3 font-semibold text-slate-900 text-sm">
                    <span className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      <img src={`${IMG}/${it.img}`} alt="" className="w-8 h-8 object-contain" loading="lazy" />
                    </span>
                    {it.name}
                  </span>
                  <span
                    className={`text-[11px] font-semibold rounded-md px-2 py-1 ${it.warn ? "text-orange-600 bg-orange-50" : "text-emerald-700 bg-emerald-50"}`}
                    style={it.warn && invSeen ? { animation: "nb-blink 1.6s 1.2s ease-in-out infinite" } : undefined}
                  >
                    {it.tag}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-4">Envanter ve Zimmet Yönetimi</h3>
          </div>

          {/* 7 — Yaklaşan süreler */}
          <div ref={dlRef} className={`${card} nb-anim lg:col-span-4 p-6 flex flex-col`}>
            <div className="space-y-2.5">
              {deadlines.map((d, i) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between rounded-xl bg-white border border-slate-100 shadow-sm px-3 py-2.5"
                  style={dlSeen ? { animation: `nb-pop .5s ${i * 160}ms cubic-bezier(.2,.8,.2,1) both` } : { opacity: 0 }}
                >
                  <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-900">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${d.dot}`}
                      style={i === 0 && dlSeen ? { animation: "nb-blink 1s ease-in-out infinite" } : undefined}
                    />
                    {d.label}
                  </span>
                  <span className={`text-[11px] font-mono font-semibold rounded px-2 py-0.5 ${d.tagCls}`}>{d.tag}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 flex items-end justify-between">
              <h3 className="text-lg font-extrabold text-slate-900 max-w-[60%] leading-snug">Süreler asla gözden kaçmaz</h3>
              <img src={`${IMG}/clipboard.webp`} alt="Kontrol listesi" className="w-28 h-auto" style={dlSeen ? { animation: "nb-float 4.4s ease-in-out infinite" } : undefined} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
