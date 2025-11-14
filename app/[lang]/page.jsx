import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Hero from '../../components/Hero';
import Features from '../../components/Feature';
import Badge from '../../components/Badge/Badge';
import Market from "@/components/MarketLeader/Market";
import Team from "@/components/Team/Team";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";
import ValueSlider from "@/components/ValueSlider";
import TeamSection from '@/components/workteam/team';

export default async function Home({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

const content = {
  en: {
    heroTitle: "Next Future Information Technology",
    heroDescription:
      "Transforming your digital presence with innovative solutions — from web and app development to IT consulting — tailored to elevate your business and achieve measurable success.",
    shopNow: "Get Your Free Consultation",
    whyChooseTitle: "Why Partner with Next Future Information",
    whyChooseDescription:
      "We deliver impactful solutions across industries, helping businesses grow sustainably and gain global recognition.",
    features: [
      {
        title: "Creative & Strategic",
        description:
          "Combining innovative design with data-driven strategies to maximize results.",
      },
      {
        title: "Industry-Wide Expertise",
        description:
          "Extensive experience in technology, real estate, retail, healthcare, and more.",
      },
      {
        title: "Bilingual & Global Reach",
        description:
          "Solutions crafted in both English and Arabic to reach audiences worldwide.",
      },
      {
        title: "Results-Oriented",
        description:
          "Every project focuses on measurable growth, ROI, and tangible outcomes.",
      },
    ],
    discoverTitle: "Explore Our Services",
    discoverDescription:
      "Comprehensive digital and creative services designed to grow your brand.",
    services: [
      {
        title: "Digital Marketing",
        image: "/services/digital.gif",
        description:
          "Complete digital marketing solutions — SEO, social media, online ads, and more.",
      },
      {
        title: "Application Development",
        image: "/services/app-development.gif",
        description:
          "Custom web apps and enterprise portals built for performance and scalability.",
      },
      {
        title: "Graphic Design",
        image: "/services/graphic-design.gif",
        description:
          "Professional branding and visuals — from logos to full identity systems.",
      },
      {
        title: "Video & Animation",
        image: "/services/video-animation.gif",
        description:
          "Engaging motion graphics, animations, and video content that tell your story.",
      },
      {
        title: "Information Technology",
        image: "/services/it.gif",
        description:
          "End-to-end IT consulting and infrastructure solutions for modern businesses.",
      },
      {
        title: "Mobile App Development",
        image: "/services/mobile-app.gif",
        description:
          "Cross-platform iOS and Android apps with smooth UX and high performance.",
      },
    ],
  },

  ar: {
    heroTitle: "نكست فيوتشر لتقنية المعلومات",
    heroDescription:
      "نحو حضور رقمي متكامل بحلول مبتكرة — من تطوير المواقع والتطبيقات إلى الاستشارات التقنية — لمساعدة عملك على النمو وتحقيق نتائج ملموسة.",
    shopNow: "احصل على استشارتك المجانية",
    whyChooseTitle: "لماذا تختار نكست فيوتشر",
    whyChooseDescription:
      "نقدّم حلولاً مبتكرة عبر مختلف الصناعات، لمساعدة الشركات على تحقيق نمو مستدام وبناء سمعة قوية على المستوى العالمي.",
    features: [
      {
        title: "إبداع واستراتيجية",
        description:
          "نجمع بين التصميم المبتكر والاستراتيجيات المدعومة بالبيانات لتحقيق أفضل النتائج.",
      },
      {
        title: "خبرة شاملة في الصناعات",
        description:
          "خبرة واسعة في التكنولوجيا، العقارات، التجزئة، الرعاية الصحية والمزيد.",
      },
      {
        title: "ثنائي اللغة ونطاق عالمي",
        description:
          "حلولنا متاحة باللغتين العربية والإنجليزية للوصول إلى جمهور عالمي.",
      },
      {
        title: "تركيز على النتائج",
        description:
          "كل مشروع يركز على تحقيق نمو قابل للقياس وعائد استثمار واضح.",
      },
    ],
    discoverTitle: "اكتشف خدماتنا",
    discoverDescription:
      "مجموعة شاملة من الخدمات الرقمية والإبداعية المصممة لتعزيز علامتك التجارية.",
    services: [
      {
        title: "التسويق الرقمي",
        image: "/services/digital.gif",
        description:
          "حلول تسويق رقمي متكاملة — SEO، وسائل التواصل الاجتماعي، الإعلانات والمزيد.",
      },
      {
        title: "تطوير التطبيقات",
        image: "/services/app-development.gif",
        description:
          "تطبيقات ويب وبوابات مؤسسية مخصصة للأداء العالي وسهولة التوسع.",
      },
      {
        title: "التصميم الجرافيكي",
        image: "/services/graphic-design.gif",
        description:
          "تصميمات احترافية — من الشعارات إلى أنظمة الهوية الكاملة.",
      },
      {
        title: "الفيديو والأنيميشن",
        image: "/services/video-animation.gif",
        description:
          "مقاطع فيديو ورسوم متحركة جذابة تعبر عن فكرتك بطريقة احترافية.",
      },
      {
        title: "تكنولوجيا المعلومات",
        image: "/services/it.gif",
        description:
          "استشارات شاملة ودعم للبنية التحتية التقنية للشركات الحديثة.",
      },
      {
        title: "تطبيقات الهواتف",
        image: "/services/mobile-app.gif",
        description:
          "تطبيقات iOS و Android متكاملة بواجهة سلسة وأداء قوي.",
      },
    ],
  },
};


  const {
    heroTitle,
    heroDescription,
    shopNow,
    whyChooseTitle,
    whyChooseDescription,
    features,
    discoverTitle,
    discoverDescription,
    services,
    heroButton,

    products,


  } = content[lang] || content.en;

  return (
    <>
      {/* Hero Section */}
      <Hero lang={lang} text={heroButton} heroTitle={heroTitle} heroDescription={heroDescription} />
      {/* Feature Section */}
      <Features
        title={whyChooseTitle}
        description={whyChooseDescription}
        features={features}
          lang={lang}
      />
      {/* Services */}
      <Services
        lang={lang}
        servicesData={services}
        sectionTitle={discoverTitle}
        sectionDescription={discoverDescription}
      />
      {/* Badge  */}
 <Badge    lang={lang} />

        {/* Market  */}
<Market   lang={lang}  />
         <ValueSlider lang={lang} />

   {/* Team  */}
   <Team lang={lang}/>
       {/* Products  */}
      <Products lang={lang} />
         {/* Skills  */}
         <Skills lang={lang}/>
              {/* Start Project  */}
         <StartProject lang={lang}  />
    <TeamSection lang={lang}  />
    </>
  );
}
