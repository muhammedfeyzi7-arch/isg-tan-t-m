import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SCRIPT_ID = "page-jsonld";

export default function SEO({
  title,
  description,
  canonicalPath,
  jsonLd,
  noindex = false,
}: SEOProps) {
  const siteUrl =
    (import.meta.env.VITE_SITE_URL as string | undefined) ||
    "https://isgdenetim.com.tr";
  const canonical = `${siteUrl}${canonicalPath}`;

  useEffect(() => {
    document.title = title;

    const descMeta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (descMeta) descMeta.content = description;

    let canonicalEl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonicalEl) {
      canonicalEl.href = canonical;
    } else {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      canonicalEl.href = canonical;
      document.head.appendChild(canonicalEl);
    }

    let robotsMeta = document.querySelector(
      'meta[name="robots"]'
    ) as HTMLMetaElement | null;
    if (noindex) {
      if (robotsMeta) {
        robotsMeta.content = "noindex, nofollow";
      } else {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        robotsMeta.content = "noindex, nofollow";
        document.head.appendChild(robotsMeta);
      }
    } else if (robotsMeta) {
      robotsMeta.content = "index, follow";
    }

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCRIPT_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [title, description, canonical, jsonLd, noindex]);

  return null;
}
