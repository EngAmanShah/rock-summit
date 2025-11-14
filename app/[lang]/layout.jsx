import { Poppins, Domine } from "next/font/google";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const primary = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const secondary = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const metas = {
    en: {
      title: "Next Future Information Technology",
      description:
        "Next Future Information Technology is a forward-thinking digital company. We deliver innovative web and mobile app solutions, digital marketing, graphic design, and IT services tailored to drive business growth, credibility, and measurable results.",
    },
    ar: {
      title: "نكست فيوتشر لتقنية المعلومات",
      description:
        "نكست فيوتشر لتقنية المعلومات هي شركة رقمية مبتكرة. نقدم حلول تطوير المواقع والتطبيقات، التسويق الرقمي، التصميم الجرافيكي، وخدمات تكنولوجيا المعلومات المصممة لتعزيز نمو الشركات والمصداقية وتحقيق نتائج ملموسة.",
    },
  };

  const baseUrl = "";
  const canonicalUrl = `${baseUrl}/${lang}`;

  const meta = metas[lang] || metas.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: canonicalUrl,
      //  images: [
      //    {
      //      url: image,
      //      width: 1200,
      //      height: 630,
      //    },
      //  ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      //  images: [image],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
    >
      <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <ContextProvider>
          <Navbar lang={lang} />
          <ToastContainer position="top-center" autoClose={3000} />
          <main
            className="d-flex flex-column flex-grow-1 bg-white"
            style={{ minHeight: "100vh", paddingTop: "15.6px" }}
          >
            {children}
          </main>
          <BackToTopButton />
          <Footer lang={lang} />
        </ContextProvider>
      </body>
    </html>
  );
}
