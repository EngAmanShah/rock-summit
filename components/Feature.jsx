"use client";
import { useState } from "react";
import { LucideCpu, LucideDatabase, LucideGlobe, LucideBarChart2 } from "lucide-react";

export default function WhyChooseUs({ lang }) {
  const [hovered, setHovered] = useState(null);

  const translations = {
    en: {
      title: "Why Choose Next Future Information Technology Company?",
      description:
        "We provide innovative and tailored solutions across technology, marketing, and design, helping your business achieve measurable growth.",
      features: [
        { title: "Creative & Strategic", description: "Our work combines design innovation with data-driven strategies to maximize impact." },
        { title: "Multi-Industry Expertise", description: "We have proven experience across technology, real estate, retail, healthcare, and more." },
        { title: "Bilingual & Global Reach", description: "We craft solutions in both English and Arabic, enabling global accessibility." },
        { title: "Results-Driven", description: "Every project is designed to deliver measurable growth and tangible ROI." },
      ],
    },
    ar: {
      title: "لماذا تختار شركة نكست فيوتشر لتقنية المعلومات؟",
      description:
        "نحن نقدم حلولًا مبتكرة ومصممة خصيصًا في مجالات التكنولوجيا والتسويق والتصميم، لمساعدة عملك على تحقيق نمو قابل للقياس.",
      features: [
        { title: "إبداعي واستراتيجي", description: "يعمل فريقنا على الجمع بين الابتكار في التصميم والاستراتيجيات القائمة على البيانات لتحقيق أقصى تأثير." },
        { title: "خبرة متعددة الصناعات", description: "لدينا خبرة مثبتة في مجالات التكنولوجيا والعقارات والتجزئة والرعاية الصحية والمزيد." },
        { title: "ثنائي اللغة والوصول العالمي", description: "نقوم بصياغة الحلول باللغتين الإنجليزية والعربية، مما يتيح الوصول العالمي." },
        { title: "موجه نحو النتائج", description: "تم تصميم كل مشروع لتحقيق نمو قابل للقياس وعائد ملموس على الاستثمار." },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  const features = [
    { icon: <LucideCpu size={60} color="#3B82F6" />, ...t.features[0] },
    { icon: <LucideDatabase size={60} color="#3B82F6" />, ...t.features[1] },
    { icon: <LucideGlobe size={60} color="#3B82F6" />, ...t.features[2] },
    { icon: <LucideBarChart2 size={60} color="#3B82F6" />, ...t.features[3] },
  ];

  return (
    <section
      className="position-relative py-5"
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
        minHeight: "70vh",
        color: "black",
        backgroundColor: "", // light background
      }}
    >
      {/* Section Header */}
      <div className="d-flex flex-column align-items-center text-center mb-5">
        <div className="fs-2 mb-3" style={{ fontWeight: 600, color: "#3B82F6" }}>
          {t.title}
        </div>
        <p
          className="w-md-50 text-center"
          style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "black" }}
        >
          {t.description}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row g-4 p-5">
        {features.map((f, idx) => (
          <div className="col-12 col-md-6 col-lg-3" key={idx}>
            <div
              className="card text-center"
              style={{
                background: "", // light blue glass effect
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                cursor: "pointer",
                overflow: "hidden",
                color: "black",
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ padding: "15px" }}>{f.icon}</div>
              <h5 className="mb-3" style={{ fontWeight: 600, color: "black" }}>
                {f.title}
              </h5>
              {hovered === idx && <p className="mt-2" style={{ color: "black" }}>{f.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
