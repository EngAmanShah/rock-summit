// import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials";
// import Services from "@/components/Services"; // Remove this
import NewServices from "@/components/NewServices/NewServices"; // Add this
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
    
    heroTitle: "Rock Summit Co. Ltd",
    heroSubtitle: "General Contracting Company",
    heroDescription:
      "In a competitive world where the pace of achievement accelerates, Rock Summit launched in the contracting industry with an ambitious vision that combines professionalism and sustainability in implementation, and a deep commitment to quality values.",
    shopNow: "Start Your Project",
    whyChooseTitle: "Why Choose Rock Summit",
    whyChooseDescription:
      "We take pride in our engineering expertise, operational skills, and a history of working in diverse environments with leading entities, where we place accuracy, safety, and time commitment at the top of our priorities.",
    features: [
      {
        title: "Quality & Precision",
        description:
          "Uncompromising commitment to quality standards and precision in every project we undertake.",
      },
      {
        title: "Diverse Expertise",
        description:
          "Extensive experience across residential, commercial, government, and infrastructure projects.",
      },
      {
        title: "Safety First Approach",
        description:
          "Comprehensive safety protocols ensuring secure working environments and project delivery.",
      },
      {
        title: "Timely Delivery",
        description:
          "Proven track record of completing projects on schedule while maintaining highest quality standards.",
      },
    ],
      discoverTitle: "Our Services",
      discoverDescription:
        "Comprehensive contracting and construction services designed to meet diverse project requirements.",
      services: [
        {
          title: "Building Construction",
          image: "/services/BC.png",
          description:
            "Construction of residential, government, educational, and healthcare buildings with global quality standards.",
        },
        {
          title: "Road Works & Infrastructure",
          image: "/services/RW.png",
          description:
            "Complete road solutions including paving, traffic signals, road markings, and lighting systems.",
        },
        {
          title: "Landscaping & Sports Facilities",
          image: "/services/LS.png",
          description:
            "Design and implementation of gardens, sports fields, and recreational facilities with modern techniques.",
        },
        {
          title: "Finishing Works",
          image: "/services/FW.png",
          description:
            "Interior and exterior finishing works including modern paints, floors, gypsum board, and cladding.",
        },
        {
          title: "HVAC Systems",
          image: "/services/HVC.png",
          description:
            "Installation of modern cooling and air conditioning systems for comfortable and energy-efficient environments.",
        },
        {
          title: "Maintenance & Operation",
          image: "/services/MO.png",
          description:
            "Comprehensive building maintenance, operation, and cleaning services with specialized teams.",
        },
      ],
    },
    ar: {
      // ... existing Arabic content ...
      discoverTitle: "خدماتنا",
      discoverDescription:
        "خدمات مقاولات وإنشاءات شاملة مصممة لتلبية متطلبات المشاريع المتنوعة.",
      services: [
        {
          title: "إنشاء المباني",
          image: "/services/BC.png",
          description:
            "إنشاء المباني السكنية والحكومية والمدارس والمستشفيات بمعايير جودة عالمية.",
        },
        {
          title: "أعمال الطرق والبنية التحتية",
          image: "/services/RW.png",
          description:
            "حلول متكاملة لأعمال الطرق تشمل التعبيذ، الإشارات المرورية، الخطوط الأرضية، والإنارة.",
        },
        {
          title: "التشجير والمرافق الرياضية",
          image: "/services/LS.png",
          description:
            "تصميم وتنفيذ الحدائق والملاعب ومرافق الرياضة باستخدام أحدث التقنيات.",
        },
        {
          title: "أعمال التشطيب",
          image: "/services/FW.png",
          description:
            "تنفيذ جميع أنواع التشطيبات العصرية الداخلية والخارجية والواجهات.",
        },
        {
          title: "أنظمة التكييف",
          image: "/services/HVC.png",
          description:
            "تركيب أنظمة التبريد والتكييف الحديثة لضمان بيئات مريحة وموفرة للطاقة.",
        },
        {
          title: "الصيانة والتشغيل",
          image: "/services/MO.png",
          description:
            "خدمات متكاملة لصيانة وتشغيل ونظافة الأبنية بفرق متخصصة.",
        },
      ],
    },
  };

  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    shopNow,
    whyChooseTitle,
    whyChooseDescription,
    features,
    discoverTitle,
    discoverDescription,
    services,
  } = content[lang] || content.en;

  return (
    <>
      {/* Hero Section */}
      <Hero 
        lang={lang} 
        text={shopNow} 
        heroTitle={heroTitle} 
        heroSubtitle={heroSubtitle}
        heroDescription={heroDescription} 
      />
      
      {/* Feature Section */}
      <Features
        title={whyChooseTitle}
        description={whyChooseDescription}
        features={features}
        lang={lang}
      />
      
      {/* New Services Component */}
      <NewServices
        lang={lang}
        servicesData={services}
        sectionTitle={discoverTitle}
        sectionDescription={discoverDescription}
      />
      
      {/* Badge */}
      <Badge lang={lang} />

      {/* Market */}
      <Market lang={lang} />

      {/* ValueSlider */}
      <ValueSlider lang={lang} />

      {/* Team */}
      <Team lang={lang}/>
      
      {/* Skills */}
      <Skills lang={lang}/>
      
      {/* Start Project */}
      <StartProject lang={lang} />
      
      {/* Team Section */}
      <TeamSection lang={lang} />
    </>
  );
}