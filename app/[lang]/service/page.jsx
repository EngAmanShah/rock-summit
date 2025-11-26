import React from "react";
import Page from "../../../components/Service/Page";

export async function generateMetadata({ params }) {
  const { lang } = params;

const translations = {
  en: {
    title: "Our Services | Rock Summit Co. Ltd",
    description:
      "Explore Rock Summit Co. Ltd services: Building Construction, Road Works & Infrastructure, Landscaping & Sports Facilities, Finishing Works, HVAC Systems, Maintenance & Operation — designed to deliver projects with professionalism, sustainability, and quality commitment.",
    keywords:
      "Rock Summit services, building construction, road works, infrastructure, landscaping, sports facilities, finishing works, HVAC systems, maintenance, operation, contracting, construction",
  },
  ar: {
    title: "خدماتنا | شركة القمة الصخرية المحدودة",
    description:
      "استعرض خدمات شركة القمة الصخرية المحدودة: إنشاء المباني، أعمال الطرق والبنية التحتية، التشجير والمرافق الرياضية، أعمال التشطيب، أنظمة التكييف، الصيانة والتشغيل — مصممة لتقديم مشاريع بمهنية واستدامة والتزام بقيم الجودة.",
    keywords:
      "خدمات شركة القمة الصخرية المحدودة, إنشاء المباني, أعمال الطرق, البنية التحتية, التشجير, الملاعب, أعمال التشطيب, أنظمة التكييف, الصيانة, التشغيل, المقاولات, الإنشاءات",
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
