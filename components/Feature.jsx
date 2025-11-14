"use client";
import { useState } from "react";
import { Building2, Shield, Clock, Award, Users, Wrench, TrendingUp, CheckCircle } from "lucide-react";

export default function WhyChooseUs({ lang }) {
  const [hovered, setHovered] = useState(null);

  const translations = {
    en: {
      title: "Why Choose Rock Summit General Contracting?",
      description:
        "With years of experience in construction and contracting, we deliver exceptional quality, timely completion, and innovative solutions for all your building needs.",
      features: [
        { title: "Quality Craftsmanship", description: "We use premium materials and skilled craftsmanship to ensure durable, high-quality construction that stands the test of time." },
        { title: "Safety First Approach", description: "Comprehensive safety protocols and trained professionals ensure secure working environments and project delivery." },
        { title: "Timely Project Delivery", description: "We pride ourselves on completing projects on schedule while maintaining the highest quality standards and attention to detail." },
        { title: "Experienced Professionals", description: "Our team of certified engineers, architects, and construction experts brings decades of combined experience." },
        { title: "Modern Construction Methods", description: "We employ the latest construction technologies and sustainable building practices for efficient, innovative solutions." },
        { title: "Transparent Communication", description: "Regular updates, clear timelines, and open communication ensure you're informed throughout the construction process." },
        { title: "Competitive Pricing", description: "Quality construction doesn't have to break the bank. We offer competitive pricing without compromising on excellence." },
        { title: "Comprehensive Services", description: "From design to completion, we handle all aspects of construction including permits, materials, and final inspections." },
      ],
    },
    ar: {
      title: "لماذا تختار القمة الصخرية للمقاولات العامة؟",
      description:
        "بسنوات من الخبرة في مجال البناء والمقاولات، نقدم جودة استثنائية، إنجاز في الوقت المحدد، وحلولاً مبتكرة لجميع احتياجاتك الإنشائية.",
      features: [
        { title: "جودة في التنفيذ", description: "نستخدم مواد عالية الجودة وحرفية ماهرة لضمان بناء متين وعالي الجودة يثبت أمام اختبار الزمن." },
        { title: "السلامة أولاً", description: "بروتوكولات سلامة شاملة ومحترفون مدربون يضمنون بيئات عمل آمنة وتسليم مشاريع بدون حوادث." },
        { title: "التسليم في الوقت المحدد", description: "نفتخر بإنجاز المشاريع في الجدول الزمني مع الحفاظ على أعلى معايير الجودة والاهتمام بالتفاصيل." },
        { title: "محترفون ذوو خبرة", description: "فريقنا من المهندسين المعتمدين والمهندسين المعماريين وخبراء البناء يجمع عقودًا من الخبرة المجمعة." },
        { title: "أساليب بناء حديثة", description: "نستخدم أحدث تقنيات البناء وممارسات البناء المستدامة لتقديم حلول فعالة ومبتكرة." },
        { title: "تواصل شفاف", description: "تحديثات منتظمة، جداول زمنية واضحة، وتواصل مفتوح يضمن إطلاعك خلال عملية البناء بأكملها." },
        { title: "أسعار تنافسية", description: "لا يجب أن تكون الجودة في البناء مكلفة. نقدم أسعارًا تنافسية دون المساس بالتميز." },
        { title: "خدمات شاملة", description: "من التصميم إلى الإنجاز، نتعامل مع جميع جوانب البناء بما في ذلك التصاريح والمواد والتفتيش النهائي." },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  const features = [
    { icon: <Building2 size={50} color="#ceac24" />, ...t.features[0] },
    { icon: <Shield size={50} color="#ceac24" />, ...t.features[1] },
    { icon: <Clock size={50} color="#ceac24" />, ...t.features[2] },
    { icon: <Users size={50} color="#ceac24" />, ...t.features[3] },
    { icon: <Wrench size={50} color="#ceac24" />, ...t.features[4] },
    { icon: <TrendingUp size={50} color="#ceac24" />, ...t.features[5] },
    { icon: <CheckCircle size={50} color="#ceac24" />, ...t.features[6] },
    { icon: <Award size={50} color="#ceac24" />, ...t.features[7] },
  ];

  return (
    <section
      className="position-relative py-5"
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
        minHeight: "70vh",
        color: "white",
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Dark Overlay for better readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1
        }}
      ></div>

      {/* Section Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <div 
            className="display-5 fw-bold mb-3" 
            style={{ color: "#ffffff", maxWidth: "800px" }}
          >
            {t.title}
          </div>
          <p
            className="lead text-center"
            style={{ 
              fontSize: "1.25rem", 
              color: "#e0e0e0",
              maxWidth: "900px",
              lineHeight: "1.6"
            }}
          >
            {t.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
          {features.map((f, idx) => (
            <div className="col-12 col-md-6 col-lg-3" key={idx}>
              <div
                className="card h-100 text-center p-4"
                style={{
                  background: "rgba(26, 26, 26, 0.8)",
                  border: "1px solid rgba(206, 172, 36, 0.3)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  overflow: "hidden",
                  color: "white",
                  transition: "all 0.3s ease",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div 
                  className="mb-4 p-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    backgroundColor: "rgba(206, 172, 36, 0.2)",
                    width: "80px",
                    height: "80px",
                    transition: "all 0.3s ease"
                  }}
                >
                  {f.icon}
                </div>
                <h5 
                  className="mb-3 fw-bold" 
                  style={{ 
                    color: "#ffffff",
                    fontSize: "1.1rem"
                  }}
                >
                  {f.title}
                </h5>
                <div 
                  style={{ 
                    height: hovered === idx ? "auto" : "0",
                    opacity: hovered === idx ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <p 
                    className="mt-2 small" 
                    style={{ 
                      color: "#cccccc",
                      lineHeight: "1.5"
                    }}
                  >
                    {f.description}
                  </p>
                </div>
                {hovered !== idx && (
                  <div className="mt-2">
                    <div 
                      style={{
                        width: "30px",
                        height: "3px",
                        backgroundColor: "#ceac24",
                        margin: "0 auto",
                        borderRadius: "2px"
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(206, 172, 36, 0.3);
          border-color: rgba(206, 172, 36, 0.5);
          background: rgba(34, 34, 34, 0.9);
        }
        
        .card:hover .icon-container {
          background-color: rgba(206, 172, 36, 0.3) !important;
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .card {
            min-height: 250px;
          }
          
          section {
            background-attachment: scroll;
          }
        }
      `}</style>
    </section>
  );
}