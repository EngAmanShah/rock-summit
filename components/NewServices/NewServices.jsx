"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NewServices({ lang, servicesData, sectionTitle, sectionDescription }) {
  const translations = {
    en: {
      viewDetails: "View Details",
      exploreAll: "Explore All Services",
    },
    ar: {
      viewDetails: "عرض التفاصيل",
      exploreAll: "استكشف جميع الخدمات",
    },
  };

  const t = translations[lang] || translations.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundImage: "url('/bg3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        direction: lang === "ar" ? "rtl" : "ltr",
        minHeight: "100vh",
      }}
    >
      {/* Dark Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-4 fw-bold text-white mb-3">
            {sectionTitle}
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ 
              width: "100px", 
              height: "4px", 
              background: "linear-gradient(90deg, #ceac24 0%, #d4b445 100%)",
              borderRadius: '2px'
            }}
          ></div>
          <p 
            className="lead text-light mx-auto"
            style={{ 
              maxWidth: "600px",
              color: "#e0e0e0",
              lineHeight: "1.6"
            }}
          >
            {sectionDescription}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              variants={itemVariants}
            >
              <motion.div
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-lg"
                style={{
                  background: "rgba(26, 26, 26, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(206, 172, 36, 0.3)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(206, 172, 36, 0.6)",
                  boxShadow: "0 20px 40px rgba(206, 172, 36, 0.3)"
                }}
              >
                {/* Service Image */}
                <div 
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  {/* Overlay */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
                    }}
                  ></div>
                </div>

                {/* Service Content */}
                <div className="card-body p-4 d-flex flex-column">
                  <h5 
                    className="card-title fw-bold mb-3"
                    style={{ color: "#ceac24" }}
                  >
                    {service.title}
                  </h5>
                  <p 
                    className="card-text flex-grow-1 mb-4"
                    style={{ 
                      color: "#e0e0e0",
                      lineHeight: "1.6"
                    }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={`/${lang}/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn mt-auto align-self-start"
                    style={{
                      background: "linear-gradient(135deg, #ceac24 0%, #d4b445 100%)",
                      color: "#000000",
                      border: "none",
                      borderRadius: "25px",
                      fontWeight: "600",
                      padding: "0.75rem 1.5rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 25px rgba(206, 172, 36, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {t.viewDetails}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Services Button */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href={`/${lang}/services`}
            className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
            style={{
              border: "2px solid #ceac24",
              color: "#ceac24",
              borderRadius: "50px",
              transition: "all 0.3s ease",
              background: "transparent"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ceac24";
              e.target.style.color = "#000000";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#ceac24";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {t.exploreAll}
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-attachment: scroll;
          }
          
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}