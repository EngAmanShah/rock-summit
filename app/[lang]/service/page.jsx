import React from "react";
import Page from "../../../components/Service/Page";

export async function generateMetadata({ params }) {
  const { lang } = params;

const translations = {
  en: {
    title: "Our Services | Next Future",
    description:
      "Explore Next Future Information Technology services: Web Development, Mobile App Development, IT Solutions, Digital Marketing, Graphic Design, and more — designed to help your business grow and succeed.",
    keywords:
      "Next Future services, web development, mobile app development, IT solutions, digital marketing, SEO, graphic design, business solutions, technology services",
  },
  ar: {
    title: "خدماتنا | نكست فيوتشر",
    description:
      "استعرض خدمات شركة نكست فيوتشر لتقنية المعلومات: تطوير المواقع، تطوير تطبيقات الهواتف، حلول تكنولوجيا المعلومات، التسويق الرقمي، التصميم الجرافيكي والمزيد — مصممة لدعم نمو عملك ونجاحه.",
    keywords:
      "خدمات نكست فيوتشر, تطوير المواقع, تطوير تطبيقات الهواتف, حلول تكنولوجيا المعلومات, التسويق الرقمي, تحسين محركات البحث, التصميم الجرافيكي, حلول الأعمال, خدمات تقنية",
  },
};


  const t = translations[lang] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://brandraize.com/services/${lang}`,
      siteName: "BrandRaize",
      images: [
        {
          url: "https://brandraize.com/images/services-banner.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
      locale: lang === "ar" ? "ar" : "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://brandraize.com/images/services-banner.jpg"],
    },
  };
}

export default function ServicesPage({ params }) {
  return <Page params={params} />;
}
