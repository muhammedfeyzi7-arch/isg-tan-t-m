import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/base/SEO";

const LAST_UPDATE = "28 Mart 2026";

const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://isgdenetim.com.tr";

const GIZLILIK_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gizlilik Politikası — İSGPanel",
    description:
      "isgdenetim.com.tr platformu üzerinde toplanan ve işlenen kişisel verilere ilişkin gizlilik taahhütlerimizi içermektedir.",
    url: `${siteUrl}/gizlilik`,
    inLanguage: "tr-TR",
    isPartOf: {
      "@type": "WebSite",
      name: "İSGPanel",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "İSG Denetim Sistemi",
      url: siteUrl,
    },
    dateModified: "2026-03-29",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gizlilik Politikası",
        item: `${siteUrl}/gizlilik`,
      },
    ],
  },
];

export default function GizlilikPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <SEO
        title="Gizlilik Politikası — İSGPanel | İSG Denetim Sistemi"
        description="isgdenetim.com.tr platformu üzerinde toplanan ve işlenen kişisel verilere ilişkin gizlilik taahhütlerimizi içermektedir. KVKK ve GDPR uyumlu."
        canonicalPath="/gizlilik"
        jsonLd={GIZLILIK_JSONLD}
      />
      {/* Top Bar */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://storage.readdy-site.link/project_files/32088732-9255-4415-9fac-6f13c8e4aa80/e9d7b15a-eadf-43ba-b7e4-eee29bb2a141_ChatGPT-Image-28-Mar-2026-15_38_07.png?v=f1e78272586c7081b6d13820591aa1f8"
              alt="İSG Denetim Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-base" />
            </div>
            Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* Hero Band */}
      <div className="bg-slate-950 pt-14 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-lock-line text-base" />
            </div>
            Yasal Metin
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            isgdenetim.com.tr platformu üzerinde toplanan ve işlenen kişisel verilere
            ilişkin gizlilik taahhütlerimizi içermektedir.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Son Güncelleme Tarihi:{" "}
            <span className="text-emerald-400 font-semibold">{LAST_UPDATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* 1. Genel Bilgilendirme */}
          <Section number="1" title="Genel Bilgilendirme">
            <p>
              <strong>İSG Denetim Sistemi</strong> olarak, <strong>isgdenetim.com.tr</strong> adresi
              üzerinden sunduğumuz iş sağlığı ve güvenliği denetim, evrak yönetimi ve personel takip
              hizmetlerine ilişkin kişisel verilerinizin gizliliğini korumak en öncelikli taahhütlerimizden
              biridir.
            </p>
            <p>
              Bu Gizlilik Politikası; platformumuzu kullanan bireyler, firmalar ve OSGB yapılarına ait
              verilerin nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
              Platformumuzu kullanarak bu politikayı okuduğunuzu ve kabul ettiğinizi beyan etmiş olursunuz.
            </p>
            <NoteBox type="info">
              Bu politika, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Avrupa Genel Veri Koruma
              Tüzüğü (GDPR) ile ilgili yönetmelik ve tebliğler çerçevesinde hazırlanmıştır.
            </NoteBox>
          </Section>

          {/* 2. Toplanan Veriler */}
          <Section number="2" title="Toplanan Veriler">
            <p>
              Platformumuz aracılığıyla, hizmetin sağlanması amacıyla aşağıdaki kategorilerde veriler
              toplanmaktadır:
            </p>

            <SubSection title="Kimlik ve İletişim Verileri">
              <BulletList items={[
                "Ad ve soyad",
                "T.C. kimlik numarası",
                "Telefon numarası",
                "E-posta adresi",
                "Doğum tarihi",
              ]} />
            </SubSection>

            <SubSection title="Sistem İçi Personel ve Firma Verileri">
              <BulletList items={[
                "İşe giriş tarihi, görev ve departman bilgileri",
                "Çalışma durumu (aktif / pasif / ayrıldı)",
                "Bağlı firma ve OSGB bilgileri",
                "Yetki düzeyi ve erişim rolleri",
                "Performans ve süreç takip verileri",
              ]} />
            </SubSection>

            <SubSection title="Evrak ve Dokümanlar">
              <BulletList items={[
                "Sisteme yüklenen tüm belgeler (PDF, görüntü, Excel vb.)",
                "Sertifika ve eğitim belgeleri",
                "Sağlık raporu ve EK-2 gibi özel nitelikli belgeler",
                "Tutanak ve denetim kayıtları",
                "Evrak geçerlilik süreleri ve takip verileri",
              ]} />
            </SubSection>

            <SubSection title="Teknik Veriler">
              <BulletList items={[
                "IP adresi ve coğrafi konum bilgisi (ülke/şehir düzeyinde)",
                "Tarayıcı türü ve işletim sistemi bilgisi",
                "Oturum açma tarihi, saati ve süresi",
                "Platform içi gezinme ve kullanım verileri",
                "Çerez (cookie) verileri",
                "Hata kayıtları ve sistem günlükleri (log)",
              ]} />
            </SubSection>
          </Section>

          {/* 3. Verilerin Kullanımı */}
          <Section number="3" title="Verilerin Kullanım Amaçları">
            <p>Toplanan veriler yalnızca aşağıda belirtilen meşru amaçlar doğrultusunda kullanılmaktadır:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              {[
                {
                  icon: "ri-service-line",
                  title: "Hizmet Sunumu",
                  desc: "İSG denetim süreçlerinin yürütülmesi, personel ve evrak yönetiminin sağlanması, tutanak oluşturma ve arşivleme.",
                },
                {
                  icon: "ri-code-s-slash-line",
                  title: "Sistem Geliştirme",
                  desc: "Platform özelliklerinin iyileştirilmesi, yeni fonksiyonların geliştirilmesi ve kullanıcı deneyiminin artırılması.",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "Güvenlik",
                  desc: "Yetkisiz erişimlerin önlenmesi, hesap güvenliğinin sağlanması, anormal kullanım aktivitelerinin tespiti.",
                },
                {
                  icon: "ri-government-line",
                  title: "Yasal Yükümlülükler",
                  desc: "İSG mevzuatı, İş Kanunu ve ilgili düzenlemeler kapsamındaki bildirim ve kayıt yükümlülüklerinin yerine getirilmesi.",
                },
                {
                  icon: "ri-bar-chart-grouped-line",
                  title: "Analiz ve Raporlama",
                  desc: "Denetim süreçlerinin analizi, istatistiksel raporların üretilmesi ve karar destek süreçlerinin desteklenmesi.",
                },
                {
                  icon: "ri-mail-send-line",
                  title: "Bildirim ve Uyarılar",
                  desc: "Evrak vade bildirimleri, sistem güncellemeleri ve kritik süreç hatırlatmalarının iletilmesi.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 shrink-0">
                    <i className={`${item.icon} text-lg`} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 4. Çerezler */}
          <Section number="4" title="Çerezler (Cookies)">
            <p>
              Platformumuz, kullanıcı deneyimini iyileştirmek ve sistem performansını ölçmek amacıyla
              çerezlerden yararlanmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen
              küçük metin dosyalarıdır.
            </p>

            <SubSection title="Kullandığımız Çerez Türleri">
              <div className="space-y-3 mt-3">
                {[
                  {
                    type: "Zorunlu Çerezler",
                    badge: "bg-slate-100 text-slate-700",
                    desc: "Platformun temel işlevlerinin çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz. Oturum yönetimi, güvenlik doğrulama ve CSRF koruması bu kapsamda değerlendirilir.",
                  },
                  {
                    type: "Performans Çerezleri",
                    badge: "bg-emerald-100 text-emerald-700",
                    desc: "Platform kullanımına ilişkin anonim istatistiksel verileri toplar. Hangi sayfaların daha fazla ziyaret edildiğini, hata oluşan noktaları ve sistem yavaşlamalarını analiz eder.",
                  },
                  {
                    type: "İşlevsellik Çerezleri",
                    badge: "bg-amber-100 text-amber-700",
                    desc: "Dil tercihi, tablo sütun düzeni ve arayüz konfigürasyonları gibi kullanıcı tercihlerini hatırlamak için kullanılır.",
                  },
                ].map((item) => (
                  <div key={item.type} className="p-4 rounded-lg border border-slate-100 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badge}`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SubSection>

            <p className="text-slate-500 text-sm leading-relaxed mt-4">
              Çerezleri tarayıcı ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz. Ancak zorunlu
              çerezlerin devre dışı bırakılması durumunda platform işlevleri kısıtlı çalışabilir ya da
              hiç çalışmayabilir.
            </p>
          </Section>

          {/* 5. Veri Güvenliği */}
          <Section number="5" title="Veri Güvenliği">
            <p>
              Kullanıcılarımıza ait kişisel verilerin güvenliğini sağlamak amacıyla endüstri standardı
              teknik ve idari önlemler uygulanmaktadır. Güvenlik uygulamalarımız sürekli gözden geçirilmekte
              ve gelişen tehditlere karşı güncellenmektedir.
            </p>

            <SubSection title="Teknik Güvenlik Önlemleri">
              <BulletList items={[
                "Tüm veri iletimi HTTPS / TLS 1.2+ protokolü ile şifreli olarak gerçekleştirilir",
                "Veritabanında hassas veriler şifrelenmiş formatta saklanır",
                "Güvenlik duvarı (firewall) ve saldırı tespit sistemleri (IDS/IPS) aktif olarak çalışır",
                "Düzenli güvenlik taramaları ve penetrasyon testleri uygulanır",
                "Otomatik yedekleme sistemi ile veriler periyodik olarak kopyalanır",
                "Erişim logları izlenir ve anormal aktiviteler sistem tarafından işaretlenir",
              ]} />
            </SubSection>

            <SubSection title="İdari Güvenlik Önlemleri">
              <BulletList items={[
                "Sisteme erişim yalnızca yetkili personel ile sınırlıdır",
                "Rol tabanlı erişim kontrolü (RBAC) uygulanmaktadır",
                "Çalışanlar veri gizliliği ve güvenliği konusunda düzenli eğitim almaktadır",
                "Gizlilik sözleşmeleri tüm çalışanlar ve alt yükleniciler tarafından imzalanmaktadır",
                "Veri ihlali durumunda 72 saat içinde ilgili mercilere bildirim yapılır",
              ]} />
            </SubSection>

            <NoteBox type="warning">
              Güvenlik önlemlerimiz mevcut en iyi uygulamaları kapsamakla birlikte, internet üzerinden
              yapılan hiçbir veri iletimi %100 güvenli değildir. Hesap güvenliğiniz için güçlü parola
              kullanmanızı ve şifrenizi kimseyle paylaşmamanızı öneririz.
            </NoteBox>
          </Section>

          {/* 6. Üçüncü Taraf Paylaşımları */}
          <Section number="6" title="Üçüncü Taraf Paylaşımları">
            <p>
              Kişisel verileriniz; aşağıda belirtilen istisnai durumlar haricinde hiçbir üçüncü tarafla
              ticari amaçlarla paylaşılmamakta, satılmamakta veya kiralanmamaktadır.
            </p>

            <SubSection title="Yasal Zorunluluklar">
              <p>
                Mahkeme kararı, yasal zorunluluk veya yetkili devlet kurumlarının resmi talebi durumunda
                ilgili veriler paylaşılabilir. Bu durumlar şunları kapsar:
              </p>
              <BulletList items={[
                "Mahkeme, savcılık ve icra dairelerinin hukuki talepleri",
                "Çalışma ve Sosyal Güvenlik Bakanlığı bildirimleri",
                "SGK iş kazası ve meslek hastalığı bildirimleri",
                "Vergi daireleri ve denetim kurumlarının talepleri",
              ]} />
            </SubSection>

            <SubSection title="Teknik Hizmet Sağlayıcılar">
              <p>
                Platformun teknik altyapısını destekleyen servis sağlayıcılarla, yalnızca hizmetin
                gerektirdiği ölçüde ve veri işleme sözleşmesi (DPA) kapsamında veri paylaşımı yapılabilir:
              </p>
              <BulletList items={[
                "Sunucu ve bulut altyapı sağlayıcıları (hosting hizmetleri)",
                "E-posta ve bildirim servisleri",
                "Güvenlik ve izleme altyapısı sağlayıcıları",
                "Yedekleme ve felaket kurtarma hizmet sağlayıcıları",
              ]} />
              <NoteBox type="info" className="mt-4">
                Tüm teknik hizmet sağlayıcılarımızla gizlilik ve veri güvenliği yükümlülüklerini
                içeren sözleşmeler imzalanmış olup bu sağlayıcılar verilerinizi kendi amaçları
                doğrultusunda kullanamaz.
              </NoteBox>
            </SubSection>
          </Section>

          {/* 7. Kullanıcı Hakları */}
          <Section number="7" title="Kullanıcı Hakları">
            <p>
              6698 Sayılı KVKK'nın 11. maddesi kapsamında aşağıda belirtilen haklara sahipsiniz.
              Bu hakları kullanmak için aşağıdaki iletişim kanalları aracılığıyla tarafımıza
              başvurabilirsiniz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {[
                { icon: "ri-eye-line", title: "Bilgi Talep Etme", desc: "Verilerinizin işlenip işlenmediğini ve hangi verilerin tutulduğunu öğrenebilirsiniz." },
                { icon: "ri-pencil-line", title: "Düzeltme İsteme", desc: "Yanlış veya eksik işlenen verilerinizin güncellenmesini talep edebilirsiniz." },
                { icon: "ri-delete-bin-line", title: "Silme / Yok Etme", desc: "Yasal saklama süreleri dolduğunda verilerinizin silinmesini isteyebilirsiniz." },
                { icon: "ri-file-transfer-line", title: "Aktarım Bilgisi", desc: "Verilerinizin hangi üçüncü taraflara aktarıldığını öğrenme hakkınız vardır." },
                { icon: "ri-thumb-down-line", title: "İtiraz Hakkı", desc: "Otomatik karar sistemlerine karşı itiraz hakkınızı kullanabilirsiniz." },
                { icon: "ri-shield-user-line", title: "Kısıtlama Talebi", desc: "Belirli koşullar altında veri işlemenin kısıtlanmasını talep edebilirsiniz." },
                { icon: "ri-download-line", title: "Taşınabilirlik", desc: "Verilerinizi yapılandırılmış ve makine tarafından okunabilir formatta talep edebilirsiniz." },
                { icon: "ri-scales-line", title: "Tazminat Talebi", desc: "Kanuna aykırı veri işleme nedeniyle uğradığınız zararın tazminini isteyebilirsiniz." },
              ].map((right) => (
                <div key={right.title} className="flex gap-3 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 shrink-0">
                    <i className={`${right.icon} text-base`} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{right.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <NoteBox type="info" className="mt-6">
              Başvurularınız, başvuru tarihinden itibaren en geç <strong>30 (otuz) gün</strong> içinde
              ücretsiz olarak sonuçlandırılacaktır. Kişisel Verileri Koruma Kurumu&apos;na{" "}
              <strong>kvkk.gov.tr</strong> adresi üzerinden de şikayette bulunabilirsiniz.
            </NoteBox>
          </Section>

          {/* 8. İletişim */}
          <Section number="8" title="İletişim">
            <p>
              Gizlilik politikamıza ilişkin sorularınızı, taleplerinizi veya şikayetlerinizi aşağıdaki
              iletişim kanalları aracılığıyla bize iletebilirsiniz. Her türlü başvurunuz titizlikle
              değerlendirilecektir.
            </p>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 mt-4 space-y-3">
              {[
                { icon: "ri-mail-send-line", label: "E-posta (M. Feyzi)", value: "muhammedfeyzi@isgdenetim.com.tr", link: "mailto:muhammedfeyzi@isgdenetim.com.tr" },
                { icon: "ri-phone-line", label: "Telefon (M. Feyzi)", value: "+90 545 177 28 08", link: "tel:+905451772808" },
                { icon: "ri-mail-send-line", label: "E-posta (A. O. Uysal)", value: "orhunuysal@isgdenetim.com.tr", link: "mailto:orhunuysal@isgdenetim.com.tr" },
                { icon: "ri-phone-line", label: "Telefon (A. O. Uysal)", value: "+90 538 859 08 40", link: "tel:+905388590840" },
                { icon: "ri-whatsapp-line", label: "WhatsApp (A. O. Uysal)", value: "wa.me/905388590840", link: "https://wa.me/905388590840" },
                { icon: "ri-global-line", label: "Web Sitesi", value: "isgdenetim.com.tr", link: "https://isgdenetim.com.tr" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "nofollow noopener noreferrer" : undefined}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-emerald-100 text-emerald-600 shrink-0">
                    <i className={`${item.icon} text-base`} />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
                    <span className="text-slate-500 text-xs font-medium w-20 shrink-0">{item.label}</span>
                    <span className="text-slate-800 text-sm font-semibold">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-slate-500 text-sm mt-5 leading-relaxed">
              Başvurunuzda; adınız-soyadınız, iletişim bilgileriniz ve talebinizin açık bir şekilde
              belirtilmesi işlem sürecinizi hızlandıracaktır. Kimlik doğrulama amacıyla ek belge
              talep edilebilir.
            </p>
          </Section>

          {/* Politika Değişiklikleri */}
          <Section number="+" title="Politika Değişiklikleri">
            <p>
              İSG Denetim Sistemi, bu Gizlilik Politikasını yasal değişiklikler, platform geliştirmeleri
              veya kullanıcı geri bildirimleri doğrultusunda güncelleme hakkını saklı tutar.
            </p>
            <p>
              Yapılan önemli değişiklikler; platform üzerinden bildirim, e-posta veya ana sayfada
              duyuru yoluyla kullanıcılara iletilecektir. Değişiklikler yayınlanma tarihinden itibaren
              geçerlilik kazanır.
            </p>
            <p>
              Güncel politikayı her zaman <strong>isgdenetim.com.tr/gizlilik</strong> adresinden
              inceleyebilirsiniz.
            </p>
          </Section>

          {/* Son Güncelleme */}
          <div className="border-t border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-sm">
              Bu gizlilik politikası en son{" "}
              <span className="text-emerald-600 font-semibold">{LAST_UPDATE}</span>{" "}
              tarihinde güncellenmiştir.
            </p>
            <p className="text-slate-400 text-xs mt-2">
              &copy; {new Date().getFullYear()} İSG Denetim Sistemi — Tüm hakları saklıdır.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-home-4-line text-base" />
                </div>
                Ana Sayfaya Dön
              </Link>
              <Link
                to="/kvkk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50 text-slate-700 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-shield-user-line text-base" />
                </div>
                KVKK Aydınlatma Metni
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ───── Yardımcı Bileşenler ───── */

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-sm shrink-0">
          {number}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="pl-0 md:pl-12 space-y-4 text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="text-slate-800 font-semibold text-base mb-3 flex items-center gap-2">
        <div className="w-1.5 h-4 rounded-full bg-emerald-500 shrink-0" />
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
            <i className="ri-checkbox-circle-line text-emerald-500 text-base" />
          </div>
          <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NoteBox({
  type = "info",
  children,
  className = "",
}: {
  type?: "info" | "warning";
  children: React.ReactNode;
  className?: string;
}) {
  const styles =
    type === "warning"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-emerald-50 border-emerald-200 text-emerald-800";
  const icon = type === "warning" ? "ri-alert-line" : "ri-information-line";

  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${styles} ${className}`}>
      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
        <i className={`${icon} text-base`} />
      </div>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}
