import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/base/SEO";

const LAST_UPDATE = "28 Mart 2026";

const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://isgdenetim.com.tr";

const KULLANIM_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kullanım Koşulları — İSGPanel",
    description:
      "İSG Denetim platformunu kullanmadan önce lütfen bu koşulları dikkatlice okuyunuz. Kullanıcı hak ve yükümlülüklerini düzenlemektedir.",
    url: `${siteUrl}/kullanim-kosullari`,
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
        name: "Kullanım Koşulları",
        item: `${siteUrl}/kullanim-kosullari`,
      },
    ],
  },
];

export default function KullanimKosullariPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <SEO
        title="Kullanım Koşulları — İSGPanel | İSG Denetim Sistemi"
        description="İSG Denetim platformunu kullanmadan önce lütfen bu koşulları dikkatlice okuyunuz. Kullanıcı hak ve yükümlülüklerini düzenlemektedir."
        canonicalPath="/kullanim-kosullari"
        jsonLd={KULLANIM_JSONLD}
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
              <i className="ri-file-text-line text-base" />
            </div>
            Yasal Metin
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Kullanım Koşulları
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            İSG Denetim platformunu kullanmadan önce lütfen bu koşulları dikkatlice okuyunuz.
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

          {/* Giriş */}
          <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/40">
            <p className="text-slate-700 text-sm leading-relaxed">
              Bu Kullanım Koşulları, <strong>İSG Denetim Sistemi</strong> tarafından sunulan
              <strong> isgdenetim.com.tr</strong> platformuna ilişkin hak ve yükümlülükleri düzenlemektedir.
              Platformu kullanan kişi, kurum veya kuruluşlar bu koşulları okuduğunu ve kabul ettiğini
              beyan etmiş sayılır.
            </p>
          </div>

          {/* 1 */}
          <Section number="1" title="Genel Şartlar">
            <p>
              Bu Kullanım Koşulları, İSG Denetim Sistemi ("Platform") ile platformu kullanan
              kişi veya kuruluşlar ("Kullanıcı") arasındaki hukuki ilişkiyi düzenlemektedir.
            </p>
            <BulletList items={[
              "Platform, yalnızca yasal amaçlar doğrultusunda kullanılabilir.",
              "Kullanıcılar, platform üzerindeki işlemlerden hukuken sorumludur.",
              "Bu koşullara aykırı davranışlar hesap askıya alma veya kapatma ile sonuçlanabilir.",
              "İSG Denetim, önceden bildirim yapmaksızın bu koşulları güncelleme hakkını saklı tutar.",
              "Güncel koşullar her zaman isgdenetim.com.tr/kullanim-kosullari adresinde yayımlanır.",
            ]} />
          </Section>

          {/* 2 */}
          <Section number="2" title="Hizmet Tanımı">
            <p>
              İSG Denetim, iş sağlığı ve güvenliği süreçlerinin dijital ortamda yönetilmesine
              yönelik bir web tabanlı yazılım platformudur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              {[
                { icon: "ri-building-2-line", title: "Firma Yönetimi", desc: "Çoklu firma ve OSGB yapılarını tek panel üzerinden yönetme imkânı." },
                { icon: "ri-user-settings-line", title: "Personel Takibi", desc: "Personel bilgileri, görev atamaları ve durum takibinin merkezi yönetimi." },
                { icon: "ri-file-list-3-line", title: "Evrak Yönetimi", desc: "Belge yükleme, kategorizasyon, vade takibi ve arşivleme işlemleri." },
                { icon: "ri-heart-pulse-line", title: "Sağlık Takibi", desc: "Periyodik muayene ve EK-2 takvimleri ile sağlık kayıt yönetimi." },
                { icon: "ri-graduation-cap-line", title: "Eğitim Kayıtları", desc: "İSG eğitimlerinin kayıt altına alınması ve hatırlatma sistemi." },
                { icon: "ri-clipboard-line", title: "Tutanak ve Denetim", desc: "Dijital tutanak oluşturma ve denetim süreçlerinin belgelenmesi." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 shrink-0">
                    <i className={`${item.icon} text-base`} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 3 */}
          <Section number="3" title="Kullanıcı Yükümlülükleri">
            <p>
              Platformu kullanan tüm bireyler ve kurumlar aşağıdaki yükümlülüklere uymayı kabul eder:
            </p>
            <BulletList items={[
              "Platforma kaydedilen tüm bilgilerin doğru, güncel ve eksiksiz olmasından kullanıcı sorumludur.",
              "Yanlış, yanıltıcı veya sahte bilgi girmek kesinlikle yasaktır.",
              "Üçüncü şahıslara ait kişisel verilerin, ilgili kişilerin rızası alınmadan sisteme girilmesi yasaktır.",
              "Platformun kötüye kullanılması, sisteme zarar verilmeye çalışılması veya güvenlik açıklarının istismar edilmesi yasaktır.",
              "Diğer kullanıcıların hesaplarına izinsiz erişim girişiminde bulunmak yasaktır.",
              "Platform altyapısına yönelik otomatik veri çekme (scraping), saldırı veya aşırı yük oluşturma girişimleri yasaktır.",
              "Platformun amaç dışı kullanılması, reklam, spam veya haksız rekabet faaliyetlerine alet edilmesi yasaktır.",
            ]} />
            <NoteBox type="warning">
              Bu yükümlülüklerin ihlali halinde hesap derhal kapatılabilir ve yasal işlem başlatılabilir.
            </NoteBox>
          </Section>

          {/* 4 */}
          <Section number="4" title="Hesap Güvenliği">
            <p>
              Kullanıcı hesabının güvenliği kullanıcının sorumluluğundadır. Aşağıdaki önlemlerin
              alınması önerilmektedir:
            </p>
            <BulletList items={[
              "Güçlü ve benzersiz bir parola kullanılması (en az 8 karakter, harf, rakam ve özel karakter içermeli).",
              "Parolanın kimseyle paylaşılmaması; bu durum kötüye kullanım halinde kullanıcının sorumluluğunu ortadan kaldırmaz.",
              "Şüpheli giriş veya aktivite fark edildiğinde derhal parolanın değiştirilmesi.",
              "Yetkisiz erişim durumunun en kısa sürede İSG Denetim destek ekibine bildirilmesi.",
              "Ortak kullanılan cihazlarda oturumun kapatılmadan ayrılınmaması.",
            ]} />
            <NoteBox type="info">
              Hesap güvenliğinin ihlali durumunda, İSG Denetim Sistemi kullanıcı bilgilerini korumak
              amacıyla hesabı geçici olarak askıya alma hakkını saklı tutar.
            </NoteBox>
          </Section>

          {/* 5 */}
          <Section number="5" title="Veri ve İçerik Sorumluluğu">
            <p>
              Kullanıcıların sisteme yüklediği veri ve içerikler tamamen kendi sorumluluğundadır.
            </p>
            <BulletList items={[
              "Sisteme yüklenen belgeler, personel bilgileri ve tüm içeriklerin doğruluğu kullanıcıya aittir.",
              "Telif hakkı, ticaret sırrı veya üçüncü şahıs haklarını ihlal eden içerikler yüklenemez.",
              "İçeriklerin yasal mevzuata uygun olmasından kullanıcı sorumludur.",
              "İSG Denetim, kullanıcı içeriklerinin doğruluğunu denetlemekle yükümlü değildir; ancak ihlal tespiti halinde içeriği kaldırma hakkını saklı tutar.",
              "Silinmiş hesaplara ait veriler, yasal saklama yükümlülükleri kapsamında belirli süre sistemde tutulabilir.",
            ]} />
          </Section>

          {/* 6 */}
          <Section number="6" title="Hizmet Sürekliliği">
            <p>
              İSG Denetim, platformun kesintisiz çalışması için gerekli teknik önlemleri almaktadır.
              Ancak aşağıdaki durumlarda hizmet aksaklıkları yaşanabilir:
            </p>
            <BulletList items={[
              "Planlı bakım ve güncelleme süreçleri (önceden bildirim yapılır).",
              "Altyapı sağlayıcılarından kaynaklanan teknik kesintiler.",
              "Doğal afet, siber saldırı veya mücbir sebep halleri.",
              "Yasal mercilerin talep veya kararları doğrultusunda hizmet durdurma.",
            ]} />
            <NoteBox type="info">
              Planlı bakımlar mümkün olduğunca düşük trafik saatlerinde gerçekleştirilir ve
              kullanıcılara önceden duyurulur. İSG Denetim, teknik kesintilerden kaynaklanan
              dolaylı kayıplardan sorumlu tutulamaz.
            </NoteBox>
          </Section>

          {/* 7 */}
          <Section number="7" title="Sorumluluk Reddi">
            <p>
              İSG Denetim Sistemi; aşağıda belirtilen durumlarda herhangi bir sorumluluk üstlenmemektedir:
            </p>
            <BulletList items={[
              "Kullanıcı hatalarından, yanlış veri girişlerinden veya platform dışındaki kararlardan doğan zararlar.",
              "Üçüncü taraf sistemler veya entegrasyonlardan kaynaklanan sorunlar.",
              "Kullanıcıların platform aracılığıyla alacağı kararların hukuki veya idari sonuçları.",
              "İnternet altyapısı, bağlantı sorunları veya cihaz kaynaklı erişim problemleri.",
              "Platform üzerindeki içeriklerin yanlış yorumlanmasından doğabilecek zararlar.",
              "Mücbir sebep hallerinde (sel, deprem, salgın hastalık, savaş vb.) oluşan hizmet kesintileri.",
            ]} />
          </Section>

          {/* 8 */}
          <Section number="8" title="Fikri Mülkiyet">
            <p>
              Platform üzerindeki tüm içerik, tasarım, kod, marka ve diğer fikri mülkiyet hakları
              İSG Denetim Sistemi&apos;ne aittir.
            </p>
            <BulletList items={[
              "Platform arayüzü, logosu, marka adı ve tasarım öğeleri İSG Denetim&apos;in tescilli varlıklarıdır.",
              "Sistemin kaynak kodları veya yazılım mimarisi kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.",
              "Ekran görüntüleri veya platform çıktılarının ticari amaçla kullanımı önceden yazılı izin gerektirir.",
              "Kullanıcıların sisteme yüklediği içerikler üzerindeki haklar kullanıcıya aittir; ancak platformun çalışması için gerekli teknik işlemler için İSG Denetim&apos;e lisans verilmiş sayılır.",
            ]} />
          </Section>

          {/* 9 */}
          <Section number="9" title="Hizmet Değişiklikleri">
            <p>
              İSG Denetim, platform hizmetlerinde değişiklik yapma hakkını saklı tutar.
            </p>
            <BulletList items={[
              "Yeni özellikler eklenebilir veya mevcut özellikler güncellenerek iyileştirilebilir.",
              "Bazı özellikler belirli kullanıcı gruplarına özel hale getirilebilir.",
              "Fiyatlandırma ve abonelik koşullarında değişiklik yapılabilir; bu değişiklikler önceden duyurulur.",
              "Platform tamamen veya kısmen kapatılabilir; bu durumda kullanıcılar en az 30 gün öncesinden bilgilendirilir.",
              "Hizmet değişiklikleri, bu Kullanım Koşulları&apos;nın güncellenmesini gerektirebilir.",
            ]} />
          </Section>

          {/* 10 */}
          <Section number="10" title="Uyuşmazlık Durumu">
            <p>
              Bu Kullanım Koşulları&apos;ndan doğabilecek uyuşmazlıklarda Türk Hukuku esas alınır.
            </p>
            <BulletList items={[
              "Uyuşmazlık çözümünde öncelikle karşılıklı müzakere yolu denenir.",
              "Müzakere yoluyla çözülemeyen uyuşmazlıklarda Türkiye Cumhuriyeti Mahkemeleri yetkilidir.",
              "Uygulanacak hukuk: Türk Borçlar Kanunu, Türk Ticaret Kanunu ve ilgili mevzuat.",
              "KVKK kapsamındaki uyuşmazlıklar için Kişisel Verileri Koruma Kurumu yetkili merciidir.",
            ]} />
            <NoteBox type="info">
              Herhangi bir konuda sorun yaşamanız durumunda, resmi yasal yollara başvurmadan önce
              destek ekibimizle iletişime geçmenizi öneririz. Çoğu sorunu hızlıca çözebiliriz.
            </NoteBox>
          </Section>

          {/* 11 */}
          <Section number="11" title="İletişim">
            <p>
              Bu Kullanım Koşulları hakkında sorularınız, şikayetleriniz veya talepleriniz için
              aşağıdaki kanallardan bize ulaşabilirsiniz:
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
          </Section>

          {/* Son */}
          <div className="border-t border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-sm">
              Bu kullanım koşulları en son{" "}
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
              <Link
                to="/gizlilik"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50 text-slate-700 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-lock-line text-base" />
                </div>
                Gizlilik Politikası
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
