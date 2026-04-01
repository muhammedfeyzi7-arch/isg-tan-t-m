import { useEffect, useRef } from "react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 48; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52,211,153,${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52,211,153,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const trustCards = [
    {
      icon: "ri-layout-grid-fill",
      label: "Tüm Süreçler Tek Panelde",
      sub: "Merkezi kontrol",
    },
    {
      icon: "ri-flashlight-fill",
      label: "Akıllı ve Hızlı Yönetim",
      sub: "Verimli iş akışı",
    },
    {
      icon: "ri-shield-fill",
      label: "Güvenli ve Yedekli Veri Sistemi",
      sub: "Veri güvenliği",
    },
    {
      icon: "ri-building-fill",
      label: "Kurumsal İSG Yönetim Altyapısı",
      sub: "Endüstriyel standart",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20minimalist%20dark%20industrial%20safety%20workplace%20technology%20concept%2C%20deep%20dark%20slate%20background%20with%20subtle%20geometric%20grid%20lines%2C%20very%20dark%20atmospheric%20professional%20scene%2C%20dark%20charcoal%20tones%20with%20faint%20green%20glow%20accents%2C%20ultra%20clean%20modern%20aesthetic%2C%20high%20contrast%20dramatic%20lighting&width=1920&height=1080&seq=hero-isg-001&orientation=landscape"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Layered gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/95" />
        {/* Radial glow accent - center */}
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.07) 0%, transparent 70%)"}} />
      </div>

      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl animate-pulse pointer-events-none z-[1]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-400/4 blur-3xl pointer-events-none z-[1]"
        style={{animation:"pulse 4s ease-in-out 2s infinite"}} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-400/25 rounded-full mb-8"
          style={{boxShadow:"0 0 20px rgba(52,211,153,0.08)"}}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase">
            İSG Dijital Yönetim Sistemi
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          İSG Süreçlerinizi{" "}
          <span className="text-emerald-400" style={{textShadow:"0 0 40px rgba(52,211,153,0.35)"}}>
            Dijitale Taşıyın.
          </span>
          <br />
          Kontrol Sizde.
        </h1>

        {/* Description */}
        <p className="text-slate-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Firmalar ve OSGB yapıları için geliştirilmiş kapsamlı İSG yönetim platformu.{" "}
          <span className="text-white/80 font-medium">Evrak yönetimi, personel takibi ve tutanak süreçlerini</span>{" "}
          tek panelden yönetin.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("#about")}
            className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2.5 overflow-hidden"
            style={{boxShadow:"0 0 30px rgba(52,211,153,0.3), 0 4px 16px rgba(52,211,153,0.2)"}}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-white/10 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <i className="ri-compass-3-fill text-lg" />
            Sistemi Keşfet
            <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="https://app.isgdenetim.com.tr"
            className="group px-8 py-4 bg-white/8 hover:bg-white/14 border border-white/20 hover:border-emerald-400/40 text-white font-semibold text-base rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2.5 backdrop-blur-sm"
            style={{boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}
          >
            <i className="ri-login-box-fill text-emerald-400 text-lg" />
            Panele Giriş Yap
          </a>
        </div>

        {/* Trust Pillar Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {trustCards.map((item) => (
            <div
              key={item.label}
              className="group relative flex flex-col items-center gap-3 px-3 py-5 rounded-xl cursor-default transition-all duration-300 hover:scale-[1.05]"
              style={{
                background:"rgba(255,255,255,0.04)",
                backdropFilter:"blur(12px)",
                WebkitBackdropFilter:"blur(12px)",
                border:"1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(52,211,153,0.08)";
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(52,211,153,0.3)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(52,211,153,0.15), inset 0 1px 0 rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Icon container */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-400/20 group-hover:bg-emerald-500/25 group-hover:border-emerald-400/40 transition-all duration-300">
                <i className={`${item.icon} text-emerald-400 text-xl`} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-white/90 text-xs font-semibold leading-snug text-center group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="text-emerald-400/60 text-[10px] font-medium tracking-wide uppercase group-hover:text-emerald-400/90 transition-colors">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-slate-400/70 text-xs tracking-widest uppercase font-medium">Keşfet</span>
        <div className="w-5 h-8 rounded-full border border-slate-500/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-emerald-400/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
