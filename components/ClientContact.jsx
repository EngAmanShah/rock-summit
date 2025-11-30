"use client";

import ContactForm from "@/components/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHardHat, FaBuilding } from "react-icons/fa";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUsClient({ lang }) {
  const [showMap, setShowMap] = useState(false);
  const isArabic = lang === "ar";

  const content = {
    en: {
      heroTitle: "Start Your Construction Project",
      heroSubtitle: `Ready to bring your vision to life? Contact us for construction consultations, project estimates, and professional contracting services. Our team is ready to build your dream project with precision and quality.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "Office Address",
          value: "Riyadh, Al Arid District, Ahmed Bin Saeed Ibn Al Hindi Street",
          iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.231445813255!2d46.672215275267!3d24.774466277949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3d9aeb32a9d%3A0xdf8e1e8f9f2a3b9e!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "Phone Number",
          value: "0114732078",
          link: "tel:+0114732078",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "Email Address",
          value: "info@rock-summit.com",
          link: "mailto:info@rock-summit.com",
        },
        {
          icon: <FaHardHat size={28} />,
          label: "Working Hours",
          value: "Sunday - Thursday: 8:00 AM - 6:00 PM",
          link: null,
        },
      ],
    },
    ar: {
      heroTitle: "ابدأ مشروعك الإنشائي",
      heroSubtitle: `مستعد لتحويل رؤيتك إلى واقع؟ تواصل معنا للحصول على استشارات إنشائية، تقديرات المشاريع، وخدمات المقاولات المحترفة. فريقنا جاهز لبناء مشروع أحلامك بدقة وجودة.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "عنوان المكتب",
          value: "الرياض، حي العارض، شارع أحمد بن سعيد ابن الهندي",
          iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.231445813255!2d46.672215275267!3d24.774466277949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3d9aeb32a9d%3A0xdf8e1e8f9f2a3b9e!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "رقم الهاتف",
          value: "+0114732078",
          link: "tel:+0114732078",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "البريد الإلكتروني",
          value: "info@rock-summit.com",
          link: "mailto:info@rock-summit.com",
        },
        {
          icon: <FaHardHat size={28} />,
          label: "ساعات العمل",
          value: "الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً",
          link: null,
        },
      ],
    },
  };

  const { heroTitle, heroSubtitle, contactInfo } = content[lang] || content.en;

  return (
    <div dir={isArabic ? "rtl" : "ltr"} style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#000000", // Black background
          color: "#fff",
          textAlign: "center",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "3px solid #FFD700", // Yellow border
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/construction-pattern.png')",
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <FaBuilding 
            size={60} 
            style={{ 
              marginBottom: "1.5rem", 
              opacity: 0.9,
              color: "#FFD700", // Yellow icon
              filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))"
            }} 
          />
          <h1 style={{ 
            fontSize: "3rem", 
            marginBottom: "1.5rem", 
            fontWeight: "700",
            color: "#FFD700", // Yellow title
            textShadow: "0 0 15px rgba(255, 215, 0, 0.4)"
          }}>
            {heroTitle}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "auto",
              lineHeight: 1.6,
              opacity: 0.9,
              color: "#ffffff", // White text
            }}
          >
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section
        style={{
          background: "#000000", // Black background
          padding: "4rem 1.5rem",
          borderBottom: "3px solid #FFD700", // Yellow border
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {contactInfo.map((info, i) => (
            <div
              key={i}
              style={{
                background: "#1a1a1a", // Dark gray/black cards
                padding: "2.5rem 2rem",
                borderRadius: "16px",
                textAlign: "center",
                color: "#FFD700", // Yellow text
                boxShadow: "0 8px 30px rgba(255, 215, 0, 0.2)", // Yellow shadow
                transition: "all 0.3s ease",
                cursor: info.iframe ? "pointer" : "default",
                border: "2px solid #333",
                position: "relative",
                overflow: "hidden",
              }}
              onClick={() => info.iframe && setShowMap(!showMap)}
              onMouseEnter={(e) => {
                if (info.iframe || info.link) {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(255, 215, 0, 0.4)";
                  e.currentTarget.style.borderColor = "#FFD700";
                }
              }}
              onMouseLeave={(e) => {
                if (info.iframe || info.link) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 215, 0, 0.2)";
                  e.currentTarget.style.borderColor = "#333";
                }
              }}
            >
              <div style={{ 
                marginBottom: "1.5rem",
                color: "#FFD700", // Yellow icons
                filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))"
              }}>
                {info.icon}
              </div>
              <h3 style={{ 
                marginBottom: "1rem", 
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#FFD700", // Yellow headings
              }}>
                {info.label}
              </h3>
              {info.link ? (
                <a 
                  href={info.link}
                  style={{
                    color: "#ffffff", // White text
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    display: "block",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#FFD700";
                    e.target.style.textShadow = "0 0 8px rgba(255, 215, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.textShadow = "none";
                  }}
                >
                  {info.value}
                </a>
              ) : (
                <p style={{ 
                  margin: 0, 
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#ffffff" // White text
                }}>
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Map iframe */}
        {showMap && (
          <div
            style={{
              marginTop: "3rem",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(255, 215, 0, 0.3)",
              border: "3px solid #FFD700",
            }}
          >
            <iframe
              src={contactInfo[0].iframe}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </section>

      {/* Contact Form */}
      <section
        style={{
          background: "#000000", // Black background
          color: "#fff",
          padding: "5rem 1.5rem",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/construction-grid.png')",
          opacity: 0.05,
          zIndex: 0
        }}></div>
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            borderRadius: "20px",
            padding: "3rem",
            background: "#1a1a1a", // Dark gray/black form background
            boxShadow: "0 20px 60px rgba(255, 215, 0, 0.2)",
            position: "relative",
            zIndex: 1,
            border: "2px solid #333",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <FaHardHat 
              size={40} 
              style={{ 
                color: "#FFD700", 
                marginBottom: "1rem",
                filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))"
              }} 
            />
            <h2 style={{ 
              color: "#FFD700", 
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "0 0 10px rgba(255, 215, 0, 0.3)"
            }}>
              {isArabic ? "طلب استشارة إنشائية" : "Request Construction Consultation"}
            </h2>
            <p style={{ 
              color: "#ffffff",
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              {isArabic 
                ? "املأ النموذج وسنتصل بك لمناقشة متطلبات مشروعك" 
                : "Fill out the form and we'll contact you to discuss your project requirements"
              }
            </p>
          </div>
          <ContactForm lang={lang} />
        </div>
      </section>
    </div>
  );
}