import { notFound } from "next/navigation";
import Link from "next/link";

// Complete service data
const servicesData = {
  en: {
    "building-construction": {
      title: "Building Construction",
      image: "/services/BC.png",
      description: "Construction of residential, government, educational, and healthcare buildings with global quality standards.",
      fullDescription: "We specialize in constructing various types of buildings including residential complexes, government facilities, educational institutions, and healthcare centers. Our approach combines modern construction techniques with sustainable practices to deliver durable and efficient structures that stand the test of time.",
      features: [
        "Residential Buildings & Complexes",
        "Government Facilities", 
        "Educational Institutions",
        "Healthcare Centers",
        "Commercial Buildings",
        "Mixed-Use Developments"
      ],
      process: [
        "Planning & Design",
        "Foundation Work", 
        "Structural Construction",
        "Finishing & Inspection"
      ],
      benefits: [
        "Quality craftsmanship and attention to detail",
        "Timely project completion",
        "Sustainable building practices",
        "Compliance with international standards"
      ]
    },
    "road-works-infrastructure": {
      title: "Road Works & Infrastructure",
      image: "/services/RW.png",
      description: "Complete road solutions including paving, traffic signals, road markings, and lighting systems.",
      fullDescription: "Our comprehensive road works and infrastructure services cover everything from initial planning to final implementation. We deliver sustainable and durable transportation solutions that meet international standards and enhance community connectivity.",
      features: [
        "Road Paving & Asphalt Works",
        "Traffic Signal Systems",
        "Road Markings & Signage", 
        "Lighting & Electrical Systems",
        "Drainage Systems",
        "Sidewalks & Curbs"
      ],
      process: [
        "Site Assessment & Survey",
        "Earthworks & Grading",
        "Base Preparation", 
        "Paving & Finishing"
      ],
      benefits: [
        "Enhanced road safety and durability",
        "Efficient traffic management",
        "Long-lasting infrastructure",
        "Community development support"
      ]
    },
    // Add other services similarly...
  },
  ar: {
    "building-construction": {
      title: "إنشاء المباني",
      image: "/services/BC.png",
      description: "إنشاء المباني السكنية والحكومية والتعليمية والصحية بمعايير جودة عالمية.",
      fullDescription: "نتخصص في إنشاء مختلف أنواع المباني بما في ذلك المجمعات السكنية والمرافق الحكومية والمؤسسات التعليمية والمراكز الصحية. يجمع نهجنا بين تقنيات البناء الحديثة والممارسات المستدامة لتقديم هياكل متينة وفعالة تتحمل اختبار الزمن.",
      features: [
        "المباني والمجمعات السكنية",
        "المرافق الحكومية",
        "المؤسسات التعليمية", 
        "المراكز الصحية",
        "المباني التجارية",
        "التطويرات متعددة الاستخدامات"
      ],
      process: [
        "التخطيط والتصميم",
        "أعمال الأساس",
        "البناء الهيكلي",
        "التشطيب والتفتيش"
      ],
      benefits: [
        "الحرفية والاهتمام بالتفاصيل",
        "إنجاز المشاريع في الوقت المحدد", 
        "ممارسات البناء المستدامة",
        "الامتثال للمعايير الدولية"
      ]
    },
    "road-works-infrastructure": {
      title: "أعمال الطرق والبنية التحتية",
      image: "/services/RW.png", 
      description: "حلول متكاملة لأعمال الطرق تشمل السفلته، الإشارات المرورية، تخطيط الطرق، وأنظمة الإنارة.",
      fullDescription: "تغطي خدماتنا الشاملة لأعمال الطرق والبنية التحتية كل شيء من التخطيط الأولي إلى التنفيذ النهائي. نقدم حلول نقل مستدامة ومتينة تلبي المعايير الدولية وتعزز اتصالية المجتمع.",
      features: [
        "رصف الطرق وأعمال الأسفلت",
        "أنظمة الإشارات المرورية",
        "علامات الطرق والإشارات",
        "أنظمة الإضاءة والكهرباء", 
        "أنظمة الصرف الصحي",
        "الأرصفة والحواجز"
      ],
      process: [
        "تقييم الموقع والمسح",
        "أعمال الحفر والتسوية",
        "تحضير القاعدة",
        "أعمال الرصف والتشطيب"
      ],
      benefits: [
        "تعزيز سلامة الطرق ومتانتها",
        "إدارة حركة مرور فعالة",
        "بنية تحتية طويلة الأمد", 
        "دعم تنمية المجتمع"
      ]
    },
    // Add other services similarly...
  }
};

export async function generateMetadata({ params }) {
  const { lang, serviceId } = await params;
  const service = servicesData[lang]?.[serviceId];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Rock Summit Co. Ltd`,
    description: service.fullDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const { lang, serviceId } = resolvedParams;
  const service = servicesData[lang]?.[serviceId];

  if (!service) {
    notFound();
  }

  return (
    <div className="service-detail-page" style={{ marginTop: '80px' }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="container py-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href={`/${lang}`} className="text-decoration-none">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href={`/${lang}/services`} className="text-decoration-none">
              {lang === 'ar' ? 'الخدمات' : 'Services'}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">{service.title}</h1>
              <p className="lead mb-4">{service.fullDescription}</p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg">
                  {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src={service.image} 
                alt={service.title}
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && (
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold">
              {lang === 'ar' ? 'الميزات والخدمات' : 'Features & Services'}
            </h2>
            <div className="row g-4">
              {service.features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{width: '60px', height: '60px'}}>
                        <span className="fs-5 fw-bold">{index + 1}</span>
                      </div>
                      <h5 className="card-title">{feature}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold">
              {lang === 'ar' ? 'المزايا' : 'Benefits'}
            </h2>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <ul className="list-unstyled">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span className="text-success me-3">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">
            {lang === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h2>
          <p className="mb-4 lead">
            {lang === 'ar' 
              ? 'اتصل بنا اليوم لمناقشة متطلباتك وكيف يمكننا مساعدتك في تحقيق رؤيتك.' 
              : 'Contact us today to discuss your requirements and how we can help bring your vision to life.'}
          </p>
          <button className="btn btn-light btn-lg px-5">
            {lang === 'ar' ? 'اتصل بنا الآن' : 'Contact Us Now'}
          </button>
        </div>
      </section>
    </div>
  );
}

// Generate static paths for all services
export async function generateStaticParams() {
  const paths = [];
  
  // Generate for both languages
  for (const lang of ['en', 'ar']) {
    const services = servicesData[lang];
    for (const serviceId in services) {
      paths.push({
        lang: lang,
        serviceId: serviceId,
      });
    }
  }
  
  return paths;
}