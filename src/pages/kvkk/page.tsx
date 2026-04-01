import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/base/SEO";

const LAST_UPDATE = "28 Mart 2026";

const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://isgdenetim.com.tr";

const KVKK_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "KVKK Aydınlatma Metni — İSGPanel",
    description:
      "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında İSG Denetim Sistemi tarafından hazırlanan aydınlatma metni.",
    url: `${siteUrl}/kvkk`,
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
        name: "KVKK Aydınlatma Metni",
        item: `${siteUrl}/kvkk`,
      },
    ],
  },
];

export default function KvkkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-[\'Plus_Jakarta_Sans\',sans-serif]">
      <SEO
        title="KVKK Aydınlatma Metni — İSGPanel | İSG Denetim Sistemi"
        description="6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin nasıl işlendiğini öğrenin. İSG Denetim Sistemi KVKK aydınlatma metni."
        canonicalPath="/kvkk"
        jsonLd={KVKK_JSONLD}
      />
      {/* Top Bar */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
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
              <i className="ri-shield-user-line text-base" />
            </div>
            Yasal Metin
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanmıştır.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Son Güncelleme Tarihi: <span className="text-emerald-400 font-medium">{LAST_UPDATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* 1. Veri Sorumlusu */}
          <Section number="1" title="Veri Sorumlusu">
            <p>
              Bu aydınlatma metni, 6698 Sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca,
              veri sorumlusu sıfatıyla <strong>İSG Denetim Sistemi</strong> tarafından hazırlanmıştır.
            </p>
            <p>
              Kişisel verileriniz; firmalar, OSGB'ler ve bağlı personel yönetimi kapsamında,
              iş sağlığı ve güvenliği süreçlerinin dijital ortamda yürütülmesi amacıyla işlenmektedir.
            </p>
            <InfoBox>
              <InfoRow icon="ri-building-2-line" label="Ticari Unvan" value="İSG Denetim Sistemi" />
              <InfoRow icon="ri-global-line" label="Web Sitesi" value="isgdenetim.com.tr" />
              <InfoRow icon="ri-mail-line" label="E-posta (M. Feyzi)" value="muhammedfeyzi@isgdenetim.com.tr" link="mailto:muhammedfeyzi@isgdenetim.com.tr" />
              <InfoRow icon="ri-phone-line" label="Telefon (M. Feyzi)" value="+90 545 177 28 08" link="tel:+905451772808" />
              <InfoRow icon="ri-mail-line" label="E-posta (A. O. Uysal)" value="orhunuysal@isgdenetim.com.tr" link="mailto:orhunuysal@isgdenetim.com.tr" />
              <InfoRow icon="ri-phone-line" label="Telefon (A. O. Uysal)" value="+90 538 859 08 40" link="tel:+905388590840" />
              <InfoRow icon="ri-whatsapp-line" label="WhatsApp (A. O. Uysal)" value="wa.me/905388590840" link="https://wa.me/905388590840" />
            </InfoBox>
          </Section>

          {/* 2. İşlenen Kişisel Veriler */}
          <Section number="2" title="İşlenen Kişisel Veriler">
            <p>
              Sistemimiz aracılığıyla aşağıda belirtilen kategorilerdeki kişisel veriler toplanmakta ve işlenmektedir:
            </p>

            <SubSection title="Kimlik ve İletişim Bilgileri">
              <BulletList items={[
                "Ad ve soyad",
                "T.C. kimlik numarası",
                "Telefon numarası",
                "E-posta adresi",
                "Doğum tarihi",
              ]} />
            </SubSection>

            <SubSection title="İş ve Görev Bilgileri">
              <BulletList items={[
                "İşe giriş tarihi",
                "Görev / unvan",
                "Çalışılan departman veya birim",
                "Bağlı olduğu firma bilgisi",
                "Çalışma durumu (aktif / pasif)",
              ]} />
            </SubSection>

            <SubSection title="Sağlık Verileri (Özel Nitelikli Kişisel Veri)">
              <BulletList items={[
                "Periyodik sağlık raporu bilgileri",
                "EK-2 formu ve benzeri sağlık belgeleri",
                "Sağlık kısıtlamaları ve yetkinlik durumları",
              ]} />
              <NoteBox type="warning">
                Sağlık verileri, 6698 Sayılı KVKK'nın 6. maddesi kapsamında özel nitelikli kişisel veri olarak kabul edilmekte
                olup bu verilerin işlenmesi için açık rızanız veya yasal zorunluluk esas alınmaktadır.
              </NoteBox>
            </SubSection>

            <SubSection title="Eğitim ve Sertifika Bilgileri">
              <BulletList items={[
                "İSG eğitim kayıtları",
                "Alınan sertifikalar ve geçerlilik tarihleri",
                "Yeterlilik ve uzmanlık belgeleri",
              ]} />
            </SubSection>

            <SubSection title="Evrak ve Doküman Verileri">
              <BulletList items={[
                "Sisteme yüklenen belgeler ve ekleri",
                "Evrak geçerlilik tarihleri",
                "Kategori bazlı evrak grupları",
                "Tutanak ve denetim kayıtları",
              ]} />
            </SubSection>

            <SubSection title="Firma Bilgileri">
              <BulletList items={[
                "Firma adı, vergi numarası",
                "Sektör ve faaliyet alanı",
                "Bağlı OSGB bilgisi",
                "Firma yetkilisi iletişim bilgileri",
              ]} />
            </SubSection>
          </Section>

          {/* 3. İşlenme Amaçları */}
          <Section number="3" title="Kişisel Verilerin İşlenme Amaçları">
            <p>Toplanan kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:</p>
            <BulletList items={[
              "İş sağlığı ve güvenliği süreçlerinin dijital ortamda etkin biçimde yürütülmesi",
              "Personel yönetimi, takibi ve evrak organizasyonunun sağlanması",
              "Yasal yükümlülüklerin yerine getirilmesi (İş Kanunu, İSG Kanunu ve ilgili mevzuat)",
              "Periyodik sağlık muayene ve eğitim sürelerinin takip edilmesi",
              "Denetim, raporlama ve istatistiksel analizlerin yapılması",
              "Tutanak oluşturma ve arşivleme süreçlerinin yönetimi",
              "Firma bazlı evrak kategorilendirme ve erişim yönetimi",
              "Sistem güvenliğinin sağlanması ve teknik altyapının geliştirilmesi",
              "Yetkisiz erişimlerin önlenmesi ve güvenlik açıklarının kapatılması",
              "Excel ile toplu veri yüklemesi süreçlerinin yönetilmesi",
            ]} />
          </Section>

          {/* 4. Toplanma Yöntemi ve Hukuki Sebep */}
          <Section number="4" title="Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebep">
            <SubSection title="Toplanma Yöntemleri">
              <p>Kişisel verileriniz aşağıdaki yollarla toplanmaktadır:</p>
              <BulletList items={[
                "Web tabanlı yönetim paneli üzerinden manuel girişler",
                "Excel (.xlsx) dosyaları aracılığıyla toplu veri yüklemeleri",
                "Sisteme yüklenen belge ve dosyalar (PDF, görüntü, belge vb.)",
                "Kullanıcı oturumu açma ve sistem kullanımı sırasında oluşan teknik veriler",
                "Form ve tutanak oluşturma süreçleri",
              ]} />
            </SubSection>

            <SubSection title="Hukuki Dayanaklar">
              <p>Kişisel verileriniz, 6698 Sayılı KVKK'nın aşağıdaki hükümleri kapsamında işlenmektedir:</p>
              <div className="space-y-3 mt-3">
                <LegalBasis
                  code="Madde 5/2-c"
                  desc="Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin zorunlu olması."
                />
                <LegalBasis
                  code="Madde 5/2-ç"
                  desc="Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması. (İş Kanunu No: 4857, İSG Kanunu No: 6331 ve ilgili yönetmelikler)"
                />
                <LegalBasis
                  code="Madde 5/2-f"
                  desc="İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması."
                />
                <LegalBasis
                  code="Madde 6/3 (Sağlık Verisi)"
                  desc="Sağlık ve cinsel hayata ilişkin veriler; kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi ile sağlık hizmetlerinin planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından açık rıza aranmaksızın işlenebilir."
                />
              </div>
            </SubSection>
          </Section>

          {/* 5. Aktarım */}
          <Section number="5" title="Kişisel Verilerin Aktarılması">
            <p>
              İşlenen kişisel verileriniz; aşağıda belirtilen taraflarla ve yalnızca belirtilen amaçlar
              doğrultusunda paylaşılabilmektedir. Verileriniz, ticari amaçlarla üçüncü kişilerle paylaşılmamaktadır.
            </p>

            <SubSection title="Yetkili Kurum ve Kuruluşlar">
              <BulletList items={[
                "Çalışma ve Sosyal Güvenlik Bakanlığı (yasal bildirim yükümlülükleri kapsamında)",
                "Sosyal Güvenlik Kurumu (SGK) iş kazası ve meslek hastalığı bildirimlerinde",
                "İl Sağlık Müdürlükleri ve ilgili sağlık birimleri",
                "İş Sağlığı ve Güvenliği Genel Müdürlüğü (ÇSGB bünyesinde)",
                "Mahkemeler, savcılıklar ve diğer yargı birimleri (yasal zorunluluk halinde)",
              ]} />
            </SubSection>

            <SubSection title="Teknik Hizmet Sağlayıcılar">
              <BulletList items={[
                "Barındırma (hosting) ve sunucu altyapı hizmetleri sağlayıcıları",
                "Yazılım geliştirme ve bakım hizmetleri sunan teknik ekipler",
                "Güvenlik ve yedekleme hizmetleri sağlayıcıları",
              ]} />
              <NoteBox type="info">
                Teknik hizmet sağlayıcılarla gerçekleştirilen veri aktarımlarında, bu kişilerin gizlilik ve
                veri güvenliği yükümlülüklerine uymaları şartı aranmakta; gerekli gizlilik sözleşmeleri imzalatılmaktadır.
              </NoteBox>
            </SubSection>
          </Section>

          {/* 6. Saklama ve Güvenlik */}
          <Section number="6" title="Kişisel Verilerin Saklanması ve Güvenliği">
            <SubSection title="Saklama Süresi">
              <p>Kişisel verileriniz;</p>
              <BulletList items={[
                "İSG mevzuatı gereği belirlenmiş yasal süreler boyunca (İSG Kanunu Madde 17 gereği eğitim kayıtları en az 5 yıl),",
                "İş ilişkisinin devamı süresince ve sona ermesinden itibaren yasal saklama yükümlülükleri çerçevesinde,",
                "Sözleşmesel yükümlülüklerin yerine getirilmesi amacıyla gerekli süre boyunca,",
                "Aktif hesap kapatıldıktan sonra, yasal zorunluluklar gözetilerek belirlenen süre tamamlanana kadar",
              ]} />
              <p className="mt-2">sistemlerimizde güvenli biçimde saklanmaktadır.</p>
            </SubSection>

            <SubSection title="Güvenlik Önlemleri">
              <p>Kişisel verilerinizin güvenliğini sağlamak amacıyla aşağıdaki teknik ve idari tedbirler uygulanmaktadır:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: "ri-server-line", title: "Güvenli Sunucu Altyapısı", desc: "Veriler, güvenli ve şifreli sunucu ortamlarında barındırılmaktadır." },
                  { icon: "ri-lock-password-line", title: "Erişim Kontrolü", desc: "Sisteme erişim yalnızca yetkili kullanıcılara açık olup rol bazlı yetkilendirme uygulanmaktadır." },
                  { icon: "ri-shield-keyhole-line", title: "Şifreleme", desc: "Veri iletimi HTTPS/TLS protokolü ile şifreli olarak gerçekleştirilmektedir." },
                  { icon: "ri-history-line", title: "Erişim Kayıtları", desc: "Sisteme yapılan tüm erişimler ve işlemler kayıt altına alınmaktadır." },
                  { icon: "ri-database-2-line", title: "Yedekleme", desc: "Veriler düzenli aralıklarla yedeklenmekte ve felaket kurtarma planları uygulanmaktadır." },
                  { icon: "ri-eye-off-line", title: "Veri Minimizasyonu", desc: "Yalnızca amaca uygun ve gerekli ölçüde kişisel veri işlenmektedir." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 flex items-center justify-center rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                      <i className={`${item.icon} text-base`} />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SubSection>
          </Section>

          {/* 7. KVKK Hakları */}
          <Section number="7" title="KVKK Kapsamındaki Haklarınız">
            <p>
              6698 Sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi uyarınca aşağıda sayılan
              haklara sahipsiniz. Bu haklarınızı kullanmak için iletişim bölümündeki kanallar aracılığıyla
              tarafımıza başvurabilirsiniz.
            </p>
            <div className="space-y-3 mt-5">
              {[
                {
                  no: "a",
                  title: "Bilgi Talep Hakkı",
                  desc: "Kişisel verilerinizin işlenip işlenmediğini öğrenme hakkına sahipsiniz.",
                },
                {
                  no: "b",
                  title: "Bilgi Edinme Hakkı",
                  desc: "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme hakkına sahipsiniz (amaç, süre, aktarılan taraflar vb.).",
                },
                {
                  no: "c",
                  title: "İşlenme Amacını Öğrenme Hakkı",
                  desc: "Kişisel verilerinizin hangi amaçla işlendiğini ve bu amaca uygun kullanılıp kullanılmadığını öğrenme hakkına sahipsiniz.",
                },
                {
                  no: "ç",
                  title: "Yurt İçi / Yurt Dışı Aktarım Bilgisi",
                  desc: "Verilerinizin yurt içinde veya yurt dışında kimlere aktarıldığını bilme hakkına sahipsiniz.",
                },
                {
                  no: "d",
                  title: "Düzeltme Hakkı",
                  desc: "Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme hakkına sahipsiniz.",
                },
                {
                  no: "e",
                  title: "Silme / Yok Etme Hakkı",
                  desc: "KVKK'nın 7. maddesindeki koşulların ortadan kalkması halinde kişisel verilerinizin silinmesini veya yok edilmesini talep etme hakkına sahipsiniz.",
                },
                {
                  no: "f",
                  title: "Aktarılan Taraflara Bildirimi Talep Hakkı",
                  desc: "Düzeltme, silme veya yok etme işlemlerinin, verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme hakkına sahipsiniz.",
                },
                {
                  no: "g",
                  title: "İtiraz Hakkı",
                  desc: "İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme hakkına sahipsiniz.",
                },
                {
                  no: "ğ",
                  title: "Tazminat Talep Hakkı",
                  desc: "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme hakkına sahipsiniz.",
                },
              ].map((right) => (
                <div key={right.no} className="flex gap-4 p-4 rounded-lg border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">
                    {right.no}
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{right.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <NoteBox type="info" className="mt-6">
              Başvurularınız, niteliğine göre en geç <strong>30 (otuz) gün</strong> içinde
              ücretsiz olarak sonuçlandırılacaktır. Başvurunun ayrıca bir maliyet gerektirmesi
              durumunda Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
            </NoteBox>
          </Section>

          {/* 8. İletişim */}
          <Section number="8" title="İletişim">
            <p>
              KVKK kapsamındaki haklarınızı kullanmak, kişisel verilerinize ilişkin soru ve taleplerinizi
              iletmek için aşağıdaki iletişim kanallarını kullanabilirsiniz:
            </p>
            <InfoBox>
              <InfoRow icon="ri-mail-send-line" label="E-posta (M. Feyzi)" value="muhammedfeyzi@isgdenetim.com.tr" link="mailto:muhammedfeyzi@isgdenetim.com.tr" />
              <InfoRow icon="ri-phone-line" label="Telefon (M. Feyzi)" value="+90 545 177 28 08" link="tel:+905451772808" />
              <InfoRow icon="ri-mail-send-line" label="E-posta (A. O. Uysal)" value="orhunuysal@isgdenetim.com.tr" link="mailto:orhunuysal@isgdenetim.com.tr" />
              <InfoRow icon="ri-phone-line" label="Telefon (A. O. Uysal)" value="+90 538 859 08 40" link="tel:+905388590840" />
              <InfoRow icon="ri-whatsapp-line" label="WhatsApp (A. O. Uysal)" value="wa.me/905388590840" link="https://wa.me/905388590840" />
              <InfoRow icon="ri-global-line" label="Web Sitesi" value="isgdenetim.com.tr" link="https://isgdenetim.com.tr" />
            </InfoBox>
            <p className="text-slate-500 text-sm mt-5 leading-relaxed">
              Talebinizi iletirken kimliğinizi doğrulayıcı bilgileri (ad-soyad, T.C. kimlik numarası) ve
              talebinizin konusunu açıkça belirtmeniz sürecin hızlı sonuçlandırılmasına katkı sağlayacaktır.
              Kişisel Verileri Koruma Kurumu'na <strong>kvkk.gov.tr</strong> üzerinden de şikayette bulunabilirsiniz.
            </p>
          </Section>

          {/* Son Güncelleme */}
          <div className="border-t border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-sm">
              Bu aydınlatma metni en son{" "}
              <span className="text-emerald-600 font-semibold">{LAST_UPDATE}</span>{" "}
              tarihinde güncellenmiştir.
            </p>
            <p className="text-slate-400 text-xs mt-2">
              &copy; {new Date().getFullYear()} İSG Denetim Sistemi — Tüm hakları saklıdır.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-home-4-line text-base" />
              </div>
              Ana Sayfaya Dön
            </Link>
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

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 space-y-3 mt-4">
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value, link }: { icon: string; label: string; value: string; link?: string }) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-emerald-100 text-emerald-600 shrink-0">
        <i className={`${icon} text-base`} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
        <span className="text-slate-500 text-xs font-medium w-20 shrink-0">{label}</span>
        <span className="text-slate-800 text-sm font-semibold">{value}</span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "nofollow noopener noreferrer" : undefined}
        className="block hover:opacity-80 transition-opacity cursor-pointer"
      >
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

function LegalBasis({ code, desc }: { code: string; desc: string }) {
  return (
    <div className="flex gap-3 p-4 rounded-lg border border-slate-100 bg-slate-50">
      <div className="shrink-0 mt-0.5">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-bold whitespace-nowrap">
          {code}
        </span>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
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
