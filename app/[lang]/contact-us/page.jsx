import ContactUsClient from "@/components/ClientContact";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const metaContent = {
    en: {
      title: "Rock Summit Co. Ltd",
      description:
        "In a competitive world where the pace of achievement accelerates, Rock Summit Co. Ltd moves forward with a bold vision that combines professionalism, sustainability, and a deep commitment to quality.",
    },
    ar: {
      title: "شركة القمة الصخرية المحدودة",
      description:
        "في عالم تنافسي يتسارع فيه الإنجاز، تنطلق شركة القمة الصخرية المحدودة برؤية طموحة تجمع بين المهنية والاستدامة في التنفيذ، مع التزام عميق بقيم الجودة.",
    },
  };

  const { title, description } = metaContent[lang] || metaContent.en;
  const baseUrl = "https://brandraize.com";
  const canonicalUrl = `${baseUrl}/${lang}/contact-us`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/contact-us`,
        ar: `${baseUrl}/ar/contact-us`,
      },
    },
    openGraph: { title, description, type: "website", url: canonicalUrl },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ContactUsPage({ params }) {
  const { lang } = await params;
  return <ContactUsClient lang={lang} />;
}
