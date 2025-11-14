"use client";

import { motion } from "framer-motion";
import { Rocket, Lightbulb, Building2 } from "lucide-react";
import { useRef, useEffect } from "react";

export default function StartProject({ lang }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays and loops properly
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section
      className="position-relative py-5 text-center text-white"
      style={{ minHeight: "70vh", overflow: "hidden" }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          objectFit: "cover",
          zIndex: 0
        }}
      >
        <source src="/br.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1
        }}
      ></div>

      {/* Golden Accent Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `radial-gradient(circle at 20% 80%, rgba(206, 172, 36, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(206, 172, 36, 0.05) 0%, transparent 50%)`,
          zIndex: 1
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative z-2 d-flex flex-column align-items-center justify-content-center h-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="fw-bold display-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ color: "#ffffff" }}
          >
            {lang === "ar"
              ? "هل أنت مستعد لبدء مشروعك الإنشائي؟"
              : "Ready to Start Your Construction Project?"}
          </motion.h1>

          <motion.p
            className="lead mx-auto mt-3 mb-5"
            style={{ 
              maxWidth: "700px",
              color: "#e0e0e0",
              lineHeight: "1.6"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {lang === "ar"
              ? "دعنا نساعدك في بناء مشروعك من الفكرة إلى التنفيذ. نقدم حلولاً متكاملة في المقاولات والإنشاءات بأعلى معايير الجودة والسلامة."
              : "Let us help you build your project from concept to completion. We provide integrated contracting and construction solutions with the highest standards of quality and safety."}
          </motion.p>

          <motion.div
            className="d-flex flex-column flex-sm-row justify-content-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href={lang === "ar" ? "/ar/contact-us" : "/en/contact-us"}
              className="btn btn-lg d-flex align-items-center gap-2 px-4 py-3 shadow"
              style={{
                background: "linear-gradient(135deg, #ceac24 0%, #d4b445 100%)",
                color: "#000000",
                border: "none",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(206, 172, 36, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(206, 172, 36, 0.3)";
              }}
            >
              {lang === "ar" ? "ابدأ مشروعك الآن" : "Start Your Project Now"}{" "}
              <Building2 size={20} />
            </a>
            <a
              href={lang === "ar" ? "/ar/service" : "/en/service"}
              className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 px-4 py-3"
              style={{
                border: "2px solid #ceac24",
                color: "#ceac24",
                fontWeight: "600",
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
              <Lightbulb size={20} />{" "}
              {lang === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}
            </a>
          </motion.div>

          {/* Additional Construction Features */}
          <motion.div
            className="row mt-5 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="col-md-4 mb-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(206, 172, 36, 0.2)",
                    border: "1px solid rgba(206, 172, 36, 0.5)",
                    width: "70px",
                    height: "70px"
                  }}
                >
                  <Building2 size={24} color="#ceac24" />
                </div>
                <h6 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
                  {lang === "ar" ? "بناء متكامل" : "Integrated Construction"}
                </h6>
                <small style={{ color: "#cccccc" }}>
                  {lang === "ar" 
                    ? "من التصميم إلى التسليم النهائي" 
                    : "From design to final delivery"}
                </small>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(206, 172, 36, 0.2)",
                    border: "1px solid rgba(206, 172, 36, 0.5)",
                    width: "70px",
                    height: "70px"
                  }}
                >
                  <Rocket size={24} color="#ceac24" />
                </div>
                <h6 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
                  {lang === "ar" ? "تسليم في الوقت المحدد" : "Timely Delivery"}
                </h6>
                <small style={{ color: "#cccccc" }}>
                  {lang === "ar" 
                    ? "الالتزام بمواعيد التسليم" 
                    : "Commitment to delivery schedules"}
                </small>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(206, 172, 36, 0.2)",
                    border: "1px solid rgba(206, 172, 36, 0.5)",
                    width: "70px",
                    height: "70px"
                  }}
                >
                  <Lightbulb size={24} color="#ceac24" />
                </div>
                <h6 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
                  {lang === "ar" ? "حلول مبتكرة" : "Innovative Solutions"}
                </h6>
                <small style={{ color: "#cccccc" }}>
                  {lang === "ar" 
                    ? "أحدث التقنيات والمواد" 
                    : "Latest technologies and materials"}
                </small>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          video {
            object-position: center;
          }
        }

        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem;
          }
          
          .btn-lg {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}