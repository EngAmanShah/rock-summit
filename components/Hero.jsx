"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  text = "Get in Touch",
  lang = "en",
  heroTitle,
  heroDescription,
}) {
  const [hover, setHover] = useState(false);
  const isRTL = lang === "ar";

  // Button text translations
  const buttonText = {
    en: "Get in Touch",
    ar: "تواصل معنا"
  };

  return (
    <section
      className="position-relative w-100 d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background video */}
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 1 }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
        style={{ opacity: 0.7, zIndex: 2 }}
      />

      {/* Centered content */}
      <div
        className="position-relative text-center"
        style={{ zIndex: 3, maxWidth: "800px", margin: "0 auto" }}
      >
        <motion.h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
          initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {heroTitle}
        </motion.h1>

        <motion.h4
          style={{
            color: "white",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            lineHeight: 1.5,
            maxWidth: "100%",
            margin: "0 auto",
            paddingBottom: "30px",
          }}
          initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {heroDescription}
        </motion.h4>

        {/* Button */}
        <Link href={`/${lang}/contact-us`}>
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="btn fw-semibold shadow rounded-pill d-inline-flex align-items-center gap-2"
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              transition: "transform 0.15s ease, padding 0.15s ease",
              transform: hover ? "scale(1.08)" : "scale(1)",
              padding: hover
                ? "clamp(0.75rem, 2.5vw, 1rem) clamp(2rem, 4vw, 3rem)"
                : "clamp(0.75rem, 2.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)",
              direction: isRTL ? "rtl" : "ltr",
              cursor: "pointer",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span>{buttonText[lang]}</span>
            <span
              className="arrow"
              style={{
                display: "inline-block",
                marginLeft: isRTL ? "0" : "6px",
                marginRight: isRTL ? "6px" : "0",
                opacity: hover ? 1 : 0,
                transform: hover
                  ? "translateX(0)"
                  : isRTL
                  ? "translateX(8px)"
                  : "translateX(-8px)",
                transition: "all 0.3s ease",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {isRTL ? "←" : "→"}
            </span>
            
            {/* Hover effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                transform: hover ? "translateX(100%)" : "translateX(-100%)",
                transition: "transform 0.6s ease",
                borderRadius: "50px",
              }}
            />
          </button>
        </Link>
      </div>

      <style jsx>{`
        /* Always show arrow on small screens / touch devices */
        @media (max-width: 1024px) {
          .arrow {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
        }

        /* Button hover effects */
        button:hover {
          background-color: #2563eb !important;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3) !important;
        }

        /* RTL specific adjustments */
        [dir="rtl"] .text-center {
          text-align: center;
        }

        /* Ensure proper spacing for RTL */
        [dir="rtl"] .gap-2 {
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
}