"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ValueSlider({ lang = "en" }) {
  const isRTL = lang === "ar";

  const slides = [
    {
      title: {
        en: "Custom Software Development",
        ar: "تطوير البرمجيات المخصصة",
      },
      subtitle: {
        en: "Tailored Solutions for Your Business",
        ar: "حلول مخصصة لأعمالك",
      },
      description: {
        en: "We create high-quality software tailored to your business needs, ensuring scalability, security, and efficiency across all platforms.",
        ar: "نقوم بإنشاء برمجيات عالية الجودة مصممة خصيصًا لاحتياجات عملك، مما يضمن قابلية التوسع والأمان والكفاءة على جميع المنصات.",
      },
      features: [
        {
          en: "Web & mobile applications",
          ar: "تطبيقات الويب والجوال",
        },
        {
          en: "Scalable architecture",
          ar: "هندسة قابلة للتوسع",
        },
        {
          en: "Secure coding practices",
          ar: "ممارسات برمجة آمنة",
        },
        {
          en: "Cross-platform compatibility",
          ar: "التوافق عبر المنصات",
        },
      ],
      image: "/cms.jpg",
    },
    {
      title: {
        en: "AI & Machine Learning Solutions",
        ar: "حلول الذكاء الاصطناعي والتعلم الآلي",
      },
      subtitle: {
        en: "Smart Automation & Predictive Insights",
        ar: "الأتمتة الذكية والرؤى التنبؤية",
      },
      description: {
        en: "Leverage AI to automate tasks, analyze data, and make smarter business decisions with our advanced machine learning models.",
        ar: "استفد من الذكاء الاصطناعي لأتمتة المهام وتحليل البيانات واتخاذ قرارات أعمال أكثر ذكاءً باستخدام نماذج التعلم الآلي المتقدمة.",
      },
      features: [
        {
          en: "AI-powered automation",
          ar: "الأتمتة المدعومة بالذكاء الاصطناعي",
        },
        {
          en: "Predictive analytics",
          ar: "التحليلات التنبؤية",
        },
        {
          en: "Data-driven decision making",
          ar: "اتخاذ القرارات القائمة على البيانات",
        },
        {
          en: "Custom ML models",
          ar: "نماذج تعلم آلي مخصصة",
        },
      ],
      image: "/smart.png",
    },
    {
      title: {
        en: "Cloud Solutions",
        ar: "حلول الحوسبة السحابية",
      },
      subtitle: {
        en: "Reliable & Scalable Cloud Services",
        ar: "خدمات سحابية موثوقة وقابلة للتوسع",
      },
      description: {
        en: "We provide cloud architecture, migration, and management services to help your business scale efficiently while ensuring security and performance.",
        ar: "نوفر خدمات هندسة السحابة والهجرة والإدارة لمساعدة عملك على التوسع بكفاءة مع ضمان الأمان والأداء.",
      },
      features: [
        {
          en: "Cloud infrastructure design",
          ar: "تصميم البنية التحتية السحابية",
        },
        {
          en: "Migration & deployment",
          ar: "الهجرة والنشر",
        },
        {
          en: "High availability & security",
          ar: "التوافر العالي والأمان",
        },
        {
          en: "Cost optimization",
          ar: "تحسين التكاليف",
        },
      ],
      image: "/cloud.png",
    },
    {
      title: {
        en: "Cybersecurity Services",
        ar: "خدمات الأمن السيبراني",
      },
      subtitle: {
        en: "Protect Your Digital Assets",
        ar: "حماية أصولك الرقمية",
      },
      description: {
        en: "Comprehensive cybersecurity solutions to safeguard your business from threats, ensuring data integrity, privacy, and compliance.",
        ar: "حلول شاملة للأمن السيبراني لحماية عملك من التهديدات، وضمان سلامة البيانات والخصوصية والامتثال.",
      },
      features: [
        {
          en: "Threat detection & prevention",
          ar: "كشف التهديدات والوقاية منها",
        },
        {
          en: "Network & endpoint security",
          ar: "أمان الشبكة ونقاط النهاية",
        },
        {
          en: "Data encryption & backup",
          ar: "تشفير البيانات والنسخ الاحتياطي",
        },
        {
          en: "Compliance management",
          ar: "إدارة الامتثال",
        },
      ],
      image: "/cyber-security.png",
    },
    {
      title: {
        en: "Mobile App Development",
        ar: "تطوير تطبيقات الجوال",
      },
      subtitle: {
        en: "Engaging & User-Friendly Apps",
        ar: "تطبيقات جذابة وسهلة الاستخدام",
      },
      description: {
        en: "We design and develop high-performance mobile apps for Android and iOS, focusing on user experience and functionality.",
        ar: "نصمم ونطور تطبيقات جوال عالية الأداء لنظامي Android و iOS، مع التركيز على تجربة المستخدم والوظائف.",
      },
      features: [
        {
          en: "iOS & Android apps",
          ar: "تطبيقات iOS و Android",
        },
        {
          en: "Intuitive UI/UX design",
          ar: "تصميم واجهة مستخدم وتجربة مستخدم بديهية",
        },
        {
          en: "Performance optimization",
          ar: "تحسين الأداء",
        },
        {
          en: "App maintenance & updates",
          ar: "صيانة التطبيقات والتحديثات",
        },
      ],
      image: "/mobile-app.png",
    },
    {
      title: {
        en: "IT Consulting & Support",
        ar: "استشارات تكنولوجيا المعلومات والدعم",
      },
      subtitle: {
        en: "Expert Guidance for Your Tech Needs",
        ar: "توجيه خبير لاحتياجاتك التقنية",
      },
      description: {
        en: "Our IT consulting services help businesses implement technology strategies that drive growth, efficiency, and innovation.",
        ar: "تساعد خدمات استشارات تكنولوجيا المعلومات الخاصة بنا الشركات على تنفيذ استراتيجيات التكنولوجيا التي تعزز النمو والكفاءة والابتكار.",
      },
      features: [
        {
          en: "Technology strategy planning",
          ar: "تخطيط استراتيجية التكنولوجيا",
        },
        {
          en: "System integration",
          ar: "تكامل الأنظمة",
        },
        {
          en: "IT support & maintenance",
          ar: "دعم تكنولوجيا المعلومات والصيانة",
        },
        {
          en: "Business process optimization",
          ar: "تحسين عمليات الأعمال",
        },
      ],
      image: "/it.png",
    },
  ];

  const content = {
    heading: {
      en: "We Provide These Services",
      ar: "نحن نقدم هذه الخدمات",
    },
    subheading: {
      en: "Comprehensive door solutions and structural steel fabrication services for commercial, industrial, and residential applications",
      ar: "حلول شاملة للأبواب وخدمات تصنيع الصلب الهيكلي للتطبيقات التجارية والصناعية والسكنية",
    },
  };

  return (
    <section className="py-16 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {content.heading[lang]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subheading[lang]}
          </p>
        </div>

        <div className="ValueProposition_container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="StackedSlider_container ValueProposition_slideContainer"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="StackedSlider_slide StackedSlider_baseSlide"
              >
                <div className={`ValueProposition_slideContent ${isRTL ? 'ValueProposition_slideContentRTL' : ''}`}>
                  {/* Content - Order changes based on RTL */}
                  <div className="ValueProposition_left">
                    <div className="ValueProposition_badge">
                      {slide.title[lang]}
                    </div>
                    <h2 className="sectionTitle">{slide.subtitle[lang]}</h2>
                    <p className="sectionDescription">
                      {slide.description[lang]}
                    </p>
                    <div className={`ValueProposition_featuresRow ${isRTL ? 'ValueProposition_featuresRowRTL' : ''}`}>
                      {slide.features.map((feature, i) => (
                        <div key={i} className={`ValueProposition_featureItem ${isRTL ? 'ValueProposition_featureItemRTL' : ''}`}>
                          <div className="featureIcon">✓</div>
                          <div className="ValueProposition_featureSubtitle">
                            {feature[lang]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image - Order changes based on RTL */}
                  <div className="ValueProposition_right">
                    <Image
                      src={slide.image}
                      alt={slide.title[lang]}
                      fill
                      className="ValueProposition_image"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className={`StackedSlider_arrows ${isRTL ? 'StackedSlider_arrowsRTL' : ''}`}>
              <button
                className="swiper-button-prev StackedSlider_arrowButton StackedSlider_arrowLeft"
                type="button"
              >
                {isRTL ? (
                  // Right arrow for RTL (next slide)
                  <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 42 42"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6C12.716 6 6 12.716 6 21C6 29.284 12.716 36 21 36C29.284 36 36 29.284 36 21C36 12.716 29.284 6 21 6ZM30 21V21.004C30 21.1345 29.9742 21.2637 29.9241 21.3841C29.874 21.5046 29.8005 21.614 29.708 21.706L23.708 27.706C23.5194 27.8882 23.2668 27.989 23.0046 27.9867C22.7424 27.9844 22.4916 27.8792 22.3062 27.6938C22.1208 27.5084 22.0156 27.2576 22.0133 26.9954C22.011 26.7332 22.1118 26.4806 22.294 26.292L26.586 22H11C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21C10 20.7348 10.1054 20.4804 10.2929 20.2929C10.4804 20.1054 10.7348 20 11 20H26.586L22.292 15.708C22.1098 15.5194 22.009 15.2668 22.0113 15.0046C22.0136 14.7424 22.1188 14.4916 22.3042 14.3062C22.4896 14.1208 22.7404 14.0156 23.0026 14.0133C23.2648 14.011 23.5174 14.1118 23.706 14.294L29.706 20.294C29.7987 20.3866 29.8722 20.4968 29.922 20.618C29.9735 20.7388 30 20.8687 30 21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  // Left arrow for LTR (previous slide)
                  <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 42 42"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6C29.284 6 36 12.716 36 21C36 29.284 29.284 36 21 36C12.716 36 6 29.284 6 21C6 12.716 12.716 6 21 6ZM12 21V21.004C12 21.1345 12.0258 21.2637 12.0759 21.3841C12.126 21.5046 12.1995 21.614 12.292 21.706L18.292 27.706C18.4806 27.8882 18.7332 27.989 18.9954 27.9867C19.2576 27.9844 19.5084 27.8792 19.6938 27.6938C19.8792 27.5084 19.9844 27.2576 19.9867 26.9954C19.989 26.7332 19.8882 26.4806 19.706 26.292L15.414 22H31C31.2652 22 31.5196 21.8946 31.7071 21.7071C31.8946 21.5196 32 21.2652 32 21C32 20.7348 31.8946 20.4804 31.7071 20.2929C31.5196 20.1054 31.2652 20 31 20H15.414L19.708 15.708C19.8902 15.5194 19.991 15.2668 19.9887 15.0046C19.9864 14.7424 19.8812 14.4916 19.6958 14.3062C19.5104 14.1208 19.2596 14.0156 18.9974 14.0133C18.7352 14.011 18.4826 14.1118 18.294 14.294L12.294 20.294C12.2013 20.3866 12.1278 20.4968 12.078 20.618C12.0265 20.7388 12 20.8687 12 21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>
              <button
                className="swiper-button-next StackedSlider_arrowButton StackedSlider_arrowRight"
                type="button"
              >
                {isRTL ? (
                  // Left arrow for RTL (previous slide)
                  <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 42 42"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6C29.284 6 36 12.716 36 21C36 29.284 29.284 36 21 36C12.716 36 6 29.284 6 21C6 12.716 12.716 6 21 6ZM12 21V21.004C12 21.1345 12.0258 21.2637 12.0759 21.3841C12.126 21.5046 12.1995 21.614 12.292 21.706L18.292 27.706C18.4806 27.8882 18.7332 27.989 18.9954 27.9867C19.2576 27.9844 19.5084 27.8792 19.6938 27.6938C19.8792 27.5084 19.9844 27.2576 19.9867 26.9954C19.989 26.7332 19.8882 26.4806 19.706 26.292L15.414 22H31C31.2652 22 31.5196 21.8946 31.7071 21.7071C31.8946 21.5196 32 21.2652 32 21C32 20.7348 31.8946 20.4804 31.7071 20.2929C31.5196 20.1054 31.2652 20 31 20H15.414L19.708 15.708C19.8902 15.5194 19.991 15.2668 19.9887 15.0046C19.9864 14.7424 19.8812 14.4916 19.6958 14.3062C19.5104 14.1208 19.2596 14.0156 18.9974 14.0133C18.7352 14.011 18.4826 14.1118 18.294 14.294L12.294 20.294C12.2013 20.3866 12.1278 20.4968 12.078 20.618C12.0265 20.7388 12 20.8687 12 21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  // Right arrow for LTR (next slide)
                  <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 42 42"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6C12.716 6 6 12.716 6 21C6 29.284 12.716 36 21 36C29.284 36 36 29.284 36 21C36 12.716 29.284 6 21 6ZM30 21V21.004C30 21.1345 29.9742 21.2637 29.9241 21.3841C29.874 21.5046 29.8005 21.614 29.708 21.706L23.708 27.706C23.5194 27.8882 23.2668 27.989 23.0046 27.9867C22.7424 27.9844 22.4916 27.8792 22.3062 27.6938C22.1208 27.5084 22.0156 27.2576 22.0133 26.9954C22.011 26.7332 22.1118 26.4806 22.294 26.292L26.586 22H11C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21C10 20.7348 10.1054 20.4804 10.2929 20.2929C10.4804 20.1054 10.7348 20 11 20H26.586L22.292 15.708C22.1098 15.5194 22.009 15.2668 22.0113 15.0046C22.0136 14.7424 22.1188 14.4916 22.3042 14.3062C22.4896 14.1208 22.7404 14.0156 23.0026 14.0133C23.2648 14.011 23.5174 14.1118 23.706 14.294L29.706 20.294C29.7987 20.3866 29.8722 20.4968 29.922 20.618C29.9735 20.7388 30 20.8687 30 21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="swiper-pagination StackedSlider_dots"></div>
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .ValueProposition_container {
          position: relative;
        }

        .StackedSlider_container {
          position: relative;
        }

        .ValueProposition_slideContainer {
          margin: 0 auto;
        }

        .StackedSlider_slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .StackedSlider_baseSlide {
          min-height: 600px;
        }

        .ValueProposition_slideContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* RTL layout - reverse the grid columns */
        .ValueProposition_slideContentRTL {
          grid-template-columns: 1fr 1fr;
          direction: rtl;
        }

        .ValueProposition_left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ValueProposition_badge {
          background: #f3f4f6;
          color: #374151;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          width: fit-content;
        }

        .sectionTitle {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #111827;
          margin: 0;
        }

        .sectionDescription {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #6b7280;
          margin: 0;
        }

        .ValueProposition_featuresRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .ValueProposition_featureItem {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        /* RTL styles for features */
        .ValueProposition_featuresRowRTL {
          direction: rtl;
        }

        .ValueProposition_featureItemRTL {
          flex-direction: row-reverse;
          text-align: right;
        }

        .featureIcon {
          background: #10b981;
          color: white;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .ValueProposition_featureSubtitle {
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.4;
          font-weight: 500;
        }

        .ValueProposition_right {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .ValueProposition_image {
          object-fit: cover;
          border-radius: 1rem;
        }

        /* Navigation Arrows */
        .StackedSlider_arrows {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 10;
          pointer-events: none;
        }

        .StackedSlider_arrowButton {
          background: #3b73e3ff;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #000000ff;
          pointer-events: all;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .StackedSlider_arrowButton:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          transform: scale(1.05);
        }

        .StackedSlider_dots {
          display: flex;
          gap: 0.5rem;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .swiper-pagination-bullet {
          width: 0.5rem;
          height: 0.5rem;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }

        .swiper-pagination-bullet-active {
          background: #374151;
          transform: scale(1.2);
        }

        /* RTL Support */
        .StackedSlider_arrowsRTL {
          flex-direction: row-reverse;
        }

        /* Text alignment for RTL */
        [dir="rtl"] .sectionTitle,
        [dir="rtl"] .sectionDescription,
        [dir="rtl"] .ValueProposition_featureSubtitle,
        [dir="rtl"] .ValueProposition_badge {
          text-align: right;
        }

        [dir="rtl"] .ValueProposition_featuresRow {
          direction: rtl;
        }

        [dir="rtl"] .ValueProposition_featureItem {
          flex-direction: row-reverse;
          text-align: right;
        }

        /* Swiper overrides */
        .swiper {
          padding-bottom: 6rem;
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: scale(1) !important;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .StackedSlider_arrows {
            padding: 0 1rem;
          }

          .StackedSlider_arrowButton {
            width: 2.5rem;
            height: 2.5rem;
          }

          .ValueProposition_slideContent {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .ValueProposition_slideContentRTL {
            grid-template-columns: 1fr;
            direction: rtl;
          }

          .sectionTitle {
            font-size: 2rem;
          }

          .sectionDescription {
            font-size: 1rem;
          }

          .ValueProposition_featuresRow {
            grid-template-columns: 1fr;
          }

          .ValueProposition_right {
            height: 300px;
            order: -1;
          }

          /* Reset feature item direction for mobile RTL */
          [dir="rtl"] .ValueProposition_featureItem {
            flex-direction: row;
            text-align: left;
          }

          .ValueProposition_featureItemRTL {
            flex-direction: row;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .sectionTitle {
            font-size: 1.75rem;
          }

          .sectionDescription {
            font-size: 0.95rem;
          }

          .ValueProposition_badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}