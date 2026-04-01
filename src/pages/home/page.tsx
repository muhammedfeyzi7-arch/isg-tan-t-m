import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AdvantagesSection from "./components/AdvantagesSection";
import DashboardPreview from "./components/DashboardPreview";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import SEO from "../../components/base/SEO";

const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://isgdenetim.com.tr";

const HOME_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "İSGPanel — Dijital İSG Yönetim Sistemi | Firmalar ve OSGB İçin",
    description:
      "İSGPanel, firmalar ve OSGB yapıları için geliştirilmiş dijital İSG yönetim platformu. Evrak yönetimi, personel takibi, tutanak oluşturma ve süreç yönetimini tek panelden gerçekleştirin.",
    url: siteUrl,
    inLanguage: "tr-TR",
    isPartOf: {
      "@type": "WebSite",
      name: "İSGPanel",
      url: siteUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteUrl,
        },
      ],
    },
    dateModified: "2026-03-29",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "İSG Denetim Sistemi",
    url: siteUrl,
    logo: "https://storage.readdy-site.link/project_files/32088732-9255-4415-9fac-6f13c8e4aa80/e9d7b15a-eadf-43ba-b7e4-eee29bb2a141_ChatGPT-Image-28-Mar-2026-15_38_07.png?v=f1e78272586c7081b6d13820591aa1f8",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-545-177-28-08",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      {
        "@type": "ContactPoint",
        telephone: "+90-538-859-08-40",
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    ],
    sameAs: [`${siteUrl}`],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "İSGPanel",
    url: siteUrl,
    description:
      "Firmalar ve OSGB yapıları için geliştirilmiş dijital İSG yönetim platformu.",
    inLanguage: "tr-TR",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "İSGPanel",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "İSGPanel, firmalar ve OSGB yapıları için geliştirilmiş dijital İSG yönetim platformu. Evrak yönetimi, personel takibi, tutanak oluşturma ve süreç yönetimini tek panelden gerçekleştirin.",
    url: siteUrl,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "İSG Denetim Sistemi",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <SEO
        title="İSGPanel — Dijital İSG Yönetim Sistemi | Firmalar ve OSGB İçin"
        description="İSGPanel, firmalar ve OSGB yapıları için geliştirilmiş dijital İSG yönetim platformu. Evrak yönetimi, personel takibi, tutanak oluşturma ve süreç yönetimini tek panelden gerçekleştirin."
        canonicalPath="/"
        jsonLd={HOME_JSONLD}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AdvantagesSection />
      <DashboardPreview />
      <ContactSection />
      <CtaSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
