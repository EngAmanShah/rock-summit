"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer({ lang }) {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) {
    return null;
  }

  const arabicText = {
    companyName: "شركة القمة الصخرية المحدودة",
    description: "للمقاولات العامة - نقدم حلولاً متكاملة في الإنشاءات والبنية التحتية بأعلى معايير الجودة والسلامة.",
    companyTitle: "الشركة",
    servicesTitle: "خدماتنا",
    contactTitle: "اتصل بنا",
    links: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
    },
    services: {
      building: "إنشاء المباني",
      infrastructure: "البنية التحتية",
      finishing: "أعمال التشطيب",
      landscaping: "التشجير والملاعب",
      maintenance: "الصيانة والتشغيل",
    },
    rightsReserved: "جميع الحقوق محفوظة.",
    address: "الرياض، حي العارض، شارع أحمد بن سعيد ابن الهندي",
    phone: "0539983393",
    email: "info@rock-summit.com",
  };

  const englishText = {
    companyName: "Rock Summit Co. Ltd",
    description: "General Contracting - We provide integrated solutions in construction and infrastructure with the highest standards of quality and safety.",
    companyTitle: "Company",
    servicesTitle: "Our Services",
    contactTitle: "Contact Us",
    links: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
    },
    services: {
      building: "Building Construction",
      infrastructure: "Infrastructure",
      finishing: "Finishing Works",
      landscaping: "Landscaping & Sports",
      maintenance: "Maintenance & Operation",
    },
    rightsReserved: "All Rights Reserved.",
    address: "Riyadh, Al Arid District, Ahmed Bin Saeed Ibn Al Hindi Street",
    phone: "+966539983393",
    email: "info@rock-summit.com",
  };

  const t = lang === "ar" ? arabicText : englishText;

  return (
    <footer
      className="footer lh-lg text-center-sm"
      style={{ 
        backgroundColor: "#000000",
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container">
        <div className="row pt-5">
          {/* Company Info */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <Link href="/">
              <img
                src="/logo_black.png"
                alt={`${t.companyName} logo`}
                style={{ 
                  width: "200px", 
                  height: "auto",
                  filter: "brightness(0) invert(1)" // Makes black logo white
                }}
              />
            </Link>
            <p className="mt-4" style={{ fontSize: "16px", color: "#e0e0e0" }}>
              <span className="fw-bold" style={{ color: "#ceac24" }}>{t.companyName}</span> — {t.description}
            </p>

            {/* Contact Information */}
            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="me-2" size={16} style={{ color: "#ceac24" }} />
                <span style={{ fontSize: "14px", color: "#e0e0e0" }}>{t.address}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" size={16} style={{ color: "#ceac24" }} />
                <a 
                  href={`tel:${t.phone}`} 
                  className="text-decoration-none"
                  style={{ fontSize: "14px", color: "#e0e0e0" }}
                >
                  {t.phone}
                </a>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2" size={16} style={{ color: "#ceac24" }} />
                <a 
                  href={`mailto:${t.email}`} 
                  className="text-decoration-none"
                  style={{ fontSize: "14px", color: "#e0e0e0" }}
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/rock-summit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
                style={{ color: "#ceac24" }}
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://twitter.com/rock-summit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
                style={{ color: "#ceac24" }}
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/rock-summit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
                style={{ color: "#ceac24" }}
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com/rock-summit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
                style={{ color: "#ceac24" }}
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4" style={{ fontWeight: "600", color: "#ceac24" }}>
              {t.companyTitle}
            </h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link href="/" className="text-decoration-none footer-link">
                  {t.links.home}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/about-us"
                  className="text-decoration-none footer-link"
                >
                  {t.links.about}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/services"
                  className="text-decoration-none footer-link"
                >
                  {t.links.services}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/projects"
                  className="text-decoration-none footer-link"
                >
                  {t.links.projects}
                </Link>
              </h6>
              <h6>
                <Link 
                  href="/contact-us" 
                  className="text-decoration-none footer-link"
                >
                  {t.links.contact}
                </Link>
              </h6>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4" style={{ fontWeight: "600", color: "#ceac24" }}>
              {t.servicesTitle}
            </h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link 
                  href="/service/buildings" 
                  className="text-decoration-none footer-link"
                >
                  {t.services.building}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link 
                  href="/service/infrastructure" 
                  className="text-decoration-none footer-link"
                >
                  {t.services.infrastructure}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link 
                  href="/service/finishing" 
                  className="text-decoration-none footer-link"
                >
                  {t.services.finishing}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link 
                  href="/service/landscaping" 
                  className="text-decoration-none footer-link"
                >
                  {t.services.landscaping}
                </Link>
              </h6>
              <h6>
                <Link 
                  href="/service/maintenance" 
                  className="text-decoration-none footer-link"
                >
                  {t.services.maintenance}
                </Link>
              </h6>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-2 mb-4">
            <h4 className="mb-4" style={{ fontWeight: "600", color: "#ceac24" }}>
              {t.contactTitle}
            </h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <a
                  href="tel:+966539983393"
                  className="text-decoration-none footer-link"
                >
                  {lang === "ar" ? "اتصل بنا" : "Call Us"}
                </a>
              </h6>
              <h6 className="mb-3">
                <a
                  href="https://wa.me/966539983393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none footer-link"
                >
                  {lang === "ar" ? "واتساب" : "WhatsApp"}
                </a>
              </h6>
              <h6 className="mb-3">
                <a
                  href="mailto:info@rock-summit.com"
                  className="text-decoration-none footer-link"
                >
                  {lang === "ar" ? "البريد الإلكتروني" : "Email"}
                </a>
              </h6>
              <h6>
                <Link
                  href="/contact-us"
                  className="text-decoration-none footer-link"
                >
                  {lang === "ar" ? "نموذج الاتصال" : "Contact Form"}
                </Link>
              </h6>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#ceac24", opacity: 0.3 }} />

        {/* Footer Bottom */}
        <div className="row text-center">
          <div className="col pb-3" style={{ color: "#e0e0e0" }}>
            &copy; {currentDate?.getFullYear()} <span style={{ color: "#ceac24" }}>{t.companyName}</span>
            <span className="d-none d-sm-inline" style={{ color: "#e0e0e0" }}> | </span>
            <br className="d-sm-none" />
            <span style={{ color: "#e0e0e0" }}>{t.rightsReserved}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #e0e0e0 !important;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #ceac24 !important;
          transform: translateX(5px);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          color: #ffffff !important;
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .footer-link:hover {
            transform: translateX(0);
          }
        }
      `}</style>
    </footer>
  );
}