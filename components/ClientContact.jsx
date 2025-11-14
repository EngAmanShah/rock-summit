"use client";

import ContactForm from "@/components/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUsClient({ lang }) {
  const [showMap, setShowMap] = useState(false);
  const isArabic = lang === "ar";

  const content = {
    en: {
      heroTitle: "Get in Touch",
      heroSubtitle: `We’d love to hear from you — whether it’s a question, feedback, or just to say hello.
Our team is dedicated to supporting you every step of the way.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "Address",
          value: "6931 King Fahd Road Branch, Al Rabwah District, Jeddah 21532",
          iframe: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3709.948958192511!2d39.17370627527199!3d21.587915380205033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM1JzE2LjUiTiAzOcKwMTAnMzQuNiJF!5e0!3m2!1sen!2ssa!4v1762853339318!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "Phone",
          value: "+966539983393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "Email",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
        },
      ],
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroSubtitle: `يسعدنا سماعك — سواء كان سؤالاً، ملاحظات، أو مجرد تحية.
فريقنا ملتزم بدعمك في كل خطوة على الطريق.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "العنوان",
          value: "6931 طريق الملك فهد فرعي، حي الربوة،، جدة 21532",
          iframe: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3709.948958192511!2d39.17370627527199!3d21.587915380205033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM1JzE2LjUiTiAzOcKwMTAnMzQuNiJF!5e0!3m2!1sen!2ssa!4v1762853339318!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "الهاتف",
          value: "+966539983393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "البريد الإلكتروني",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
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
          background: "#368ee1ff",
          color: "#fff",
          textAlign: "center",
          padding: "6rem 1.5rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{heroTitle}</h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: 1.6,
          }}
        >
          {heroSubtitle}
        </p>
      </section>

      {/* Contact Info */}
      <section
        style={{
          background: "#f5f7fa",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {contactInfo.map((info, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                color: "#001233",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: info.iframe ? "pointer" : "default",
              }}
              onClick={() => info.iframe && setShowMap(!showMap)}
            >
              <div style={{ marginBottom: "1rem" }}>{info.icon}</div>
              <h3 style={{ marginBottom: "0.5rem" }}>{info.label}</h3>
              <p style={{ margin: 0 }}>{info.value}</p>
            </div>
          ))}
        </div>

        {/* Map iframe */}
        {showMap && (
          <div
            style={{
              marginTop: "2rem",
              maxWidth: "1100px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
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
          background: "#368ee1ff",
          color: "#fff",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            borderRadius: "12px",
            padding: "2rem",
            background: "#0d1b3d",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        >
          <ContactForm lang={lang} />
        </div>
      </section>
    </div>
  );
}
