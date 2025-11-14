"use client";
import React, { useState } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm({ lang }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const content = {
    en: {
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Your Email",
        emailPlaceholder: "Enter your email address",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        projectType: "Project Type",
        projectTypePlaceholder: "Select project type",
        budget: "Estimated Budget",
        budgetPlaceholder: "Select budget range",
        timeline: "Project Timeline",
        timelinePlaceholder: "Select timeline",
        message: "Project Details",
        messagePlaceholder: "Describe your project requirements, location, and any specific needs...",
        send: "Request Consultation",
      },
      messages: {
        success: "Your consultation request has been sent successfully! We'll contact you within 24 hours.",
        error: "Failed to send request. Please try again.",
      },
      projectTypes: [
        "Residential Building",
        "Commercial Building",
        "Infrastructure",
        "Renovation",
        "Finishing Works",
        "HVAC Installation",
        "Landscaping",
        "Other"
      ],
      budgetRanges: [
        "Under 500,000 SAR",
        "500,000 - 1,000,000 SAR",
        "1,000,000 - 5,000,000 SAR",
        "5,000,000 - 10,000,000 SAR",
        "Over 10,000,000 SAR"
      ],
      timelines: [
        "Immediate (1-3 months)",
        "Short-term (3-6 months)",
        "Medium-term (6-12 months)",
        "Long-term (1+ years)"
      ]
    },
    ar: {
      form: {
        name: "اسمك",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phone: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        projectType: "نوع المشروع",
        projectTypePlaceholder: "اختر نوع المشروع",
        budget: "الميزانية المقدرة",
        budgetPlaceholder: "اختر نطاق الميزانية",
        timeline: "الجدول الزمني",
        timelinePlaceholder: "اختر الجدول الزمني",
        message: "تفاصيل المشروع",
        messagePlaceholder: "صف متطلبات مشروعك، الموقع، وأي احتياجات خاصة...",
        send: "طلب استشارة",
      },
      messages: {
        success: "تم إرسال طلب الاستشارة بنجاح! سنتواصل معك خلال 24 ساعة.",
        error: "فشل في إرسال الطلب. يرجى المحاولة مرة أخرى.",
      },
      projectTypes: [
        "مبنى سكني",
        "مبنى تجاري",
        "بنية تحتية",
        "ترميم",
        "أعمال التشطيب",
        "تركيب أنظمة التكييف",
        "تشجير وتنسيق",
        "أخرى"
      ],
      budgetRanges: [
        "أقل من 500,000 ريال",
        "500,000 - 1,000,000 ريال",
        "1,000,000 - 5,000,000 ريال",
        "5,000,000 - 10,000,000 ريال",
        "أكثر من 10,000,000 ريال"
      ],
      timelines: [
        "فوري (1-3 أشهر)",
        "قصير الأجل (3-6 أشهر)",
        "متوسط الأجل (6-12 شهر)",
        "طويل الأجل (أكثر من سنة)"
      ]
    },
  };

  const { form, messages, projectTypes, budgetRanges, timelines } = content[lang] || content.en;

  const dataChange = (e) => {
    const { name, value } = e.target;
    if (/^\s+$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const collectionRef = collection(db, "construction_consultations");
      await addDoc(collectionRef, {
        ...formData,
        timestamp: serverTimestamp(),
        read: false,
        status: "new",
      });
      toast.success(messages.success);
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        projectType: "", 
        budget: "", 
        timeline: "", 
        message: "" 
      });
    } catch (error) {
      console.log("Failed to send consultation request", error);
      toast.error(messages.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <div className="col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-4 bg-white p-4 p-md-5">
              {/* Header Section */}
              <div className="text-center mb-5">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="fw-bold text-dark mb-3"
                  style={{ fontSize: "2.2rem", color: "#2d3e8f" }}
                >
                  {lang === "ar" ? "طلب استشارة إنشائية" : "Construction Consultation Request"}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-muted fs-6"
                >
                  {lang === "ar" 
                    ? "املأ النموذج أدناه وسنتصل بك لمناقشة متطلبات مشروعك الإنشائي" 
                    : "Fill out the form below and we'll contact you to discuss your construction project requirements"}
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="w-100">
                <div className="row g-4">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={dataChange}
                        placeholder={form.namePlaceholder}
                        required
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={dataChange}
                        placeholder={form.emailPlaceholder}
                        required
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={dataChange}
                        placeholder={form.phonePlaceholder}
                        required
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Type Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.projectType} *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={dataChange}
                        required
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="">{form.projectTypePlaceholder}</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.budget}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={dataChange}
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="">{form.budgetPlaceholder}</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        {form.timeline}
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={dataChange}
                        className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                        style={{
                          borderColor: "#e2e8f0",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#2d3e8f";
                          e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="">{form.timelinePlaceholder}</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Details Field */}
                <div className="mt-4">
                  <div className="form-group">
                    <label className="form-label fw-semibold text-dark mb-2">
                      {form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={dataChange}
                      rows="6"
                      placeholder={form.messagePlaceholder}
                      required
                      className="form-control form-control-lg border-2 rounded-3 px-4 py-3"
                      style={{
                        borderColor: "#e2e8f0",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2d3e8f";
                        e.target.style.boxShadow = "0 0 0 3px rgba(45, 62, 143, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid mt-5">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary btn-lg fw-semibold py-3 rounded-3 border-0"
                    style={{
                      background: "linear-gradient(135deg, #2d3e8f 0%, #1a2a5f 100%)",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {loading ? (
                      <div className="d-flex align-items-center justify-content-center">
                        <div 
                          className="spinner-border spinner-border-sm me-2" 
                          style={{ width: "1.2rem", height: "1.2rem" }}
                        ></div>
                        {lang === "ar" ? "جاري الإرسال..." : "Sending..."}
                      </div>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="me-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        {form.send}
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-4"
              >
                <p className="text-muted small">
                  {lang === "ar" 
                    ? "سيقوم أحد خبرائنا بالاتصال بك خلال 24 ساعة لمناقشة مشروعك" 
                    : "One of our experts will contact you within 24 hours to discuss your project"}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .form-control:focus {
          border-color: #2d3e8f !important;
          box-shadow: 0 0 0 3px rgba(45, 62, 143, 0.1) !important;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(45, 62, 143, 0.3);
        }
        
        .card {
          background: #ffffff !important;
          backdrop-filter: none !important;
        }
        
        .form-group {
          position: relative;
        }
        
        .form-label {
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
}