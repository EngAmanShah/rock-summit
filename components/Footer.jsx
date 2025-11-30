"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({ lang }) {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(null);
  const isArabic = lang === "ar";

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) {
    return null;
  }

  const arabicText = {
    companyName: "شركة القمة الصخرية المحدودة",
    description: "رواد في تقديم حلول الإنشاءات المتكاملة ومشاريع البنية التحتية، من خلال التزامها بمعايير الجودة والسلامة العالمية ودمج الخبرة التقنية مع الابتكار لتحقيق تطلعات العملاء",
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
    landline: "0114732078",
    whatsapp: "0554780747",
    email: "info@rock-summit.com",
  };

  const englishText = {
    companyName: "Rock Summit Co. Ltd",
    description: "Ruwad in delivering integrated construction and infrastructure projects, through their commitment to global quality and safety standards, and by merging technical expertise with innovation to achieve client aspirations.",
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
    landline: "+0114732078",
    whatsapp: "+966554780747",
    email: "info@rock-summit.com",
  };

  const t = isArabic ? arabicText : englishText;

  return (
    <footer
      className="footer"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ 
        backgroundColor: "#000000",
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        padding: "3rem 0 1rem 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info - Full width on mobile, 4 columns on desktop */}
          <div className="col-12 col-md-4 mb-4" style={{ 
            textAlign: isArabic ? "right" : "left"
          }}>
            <Link href="/">
              <img
                src="/logo_black.png"
                alt={`${t.companyName} logo`}
                style={{ 
                  width: "180px", 
                  height: "auto",
                  marginBottom: "1rem",
                  // filter: "brightness(0) invert(1)"
                }}
              />
            </Link>
            <p style={{ 
              fontSize: "14px", 
              color: "#e0e0e0",
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              <span className="fw-bold d-block mb-2" style={{ color: "#FFD700", fontSize: "16px" }}>{t.companyName}</span>
              {t.description}
            </p>

            {/* Contact Information - No icons */}
            <div style={{ fontSize: "14px", color: "#e0e0e0" }}>
              <div className="mb-2">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "العنوان: " : "Address: "}</strong>
                {t.address}
              </div>
              <div className="mb-2">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "رقم الهاتف: " : "Phone: "}</strong>
                <a href={`tel:${t.landline}`} style={{ color: "#e0e0e0", textDecoration: "none" }}>
                  {t.landline}
                </a>
              </div>
              <div className="mb-2">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "واتساب: " : "WhatsApp: "}</strong>
                <a 
                  href={`https://wa.me/${t.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e0e0e0", textDecoration: "none" }}
                >
                  {t.whatsapp}
                </a>
              </div>
              <div className="mb-2">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "البريد الإلكتروني: " : "Email: "}</strong>
                <a href={`mailto:${t.email}`} style={{ color: "#e0e0e0", textDecoration: "none" }}>
                  {t.email}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links - 2 columns on mobile, 2.66 columns on desktop */}
          <div className="col-6 col-md-2 mb-4" style={{ 
            textAlign: isArabic ? "right" : "left",
            paddingLeft: isArabic ? "0" : "15px",
            paddingRight: isArabic ? "15px" : "0"
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "18px",
              marginBottom: "1rem"
            }}>
              {t.companyTitle}
            </h4>
            <div style={{ lineHeight: "2.2" }}>
              <div>
                <Link href="/" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.links.home}
                </Link>
              </div>
              <div>
                <Link href="/about-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.links.about}
                </Link>
              </div>
              <div>
                <Link href="/services" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.links.services}
                </Link>
              </div>
              <div>
                <Link href="/projects" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.links.projects}
                </Link>
              </div>
              <div>
                <Link href="/contact-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.links.contact}
                </Link>
              </div>
            </div>
          </div>

          {/* Services Links - 2 columns on mobile, 2.66 columns on desktop */}
          <div className="col-6 col-md-3 mb-4" style={{ 
            textAlign: isArabic ? "right" : "left",
            paddingLeft: isArabic ? "0" : "15px",
            paddingRight: isArabic ? "15px" : "0"
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "18px",
              marginBottom: "1rem"
            }}>
              {t.servicesTitle}
            </h4>
            <div style={{ lineHeight: "2.2" }}>
              <div>
                <Link href="/service/buildings" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.services.building}
                </Link>
              </div>
              <div>
                <Link href="/service/infrastructure" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.services.infrastructure}
                </Link>
              </div>
              <div>
                <Link href="/service/finishing" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.services.finishing}
                </Link>
              </div>
              <div>
                <Link href="/service/landscaping" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.services.landscaping}
                </Link>
              </div>
              <div>
                <Link href="/service/maintenance" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {t.services.maintenance}
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info - 2 columns on mobile, 2.66 columns on desktop */}
          <div className="col-6 col-md-2 mb-4" style={{ 
            textAlign: isArabic ? "right" : "left",
            paddingLeft: isArabic ? "0" : "15px",
            paddingRight: isArabic ? "15px" : "0"
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "18px",
              marginBottom: "1rem"
            }}>
              {t.contactTitle}
            </h4>
            <div style={{ lineHeight: "2.2" }}>
              <div>
                <a href={`tel:${t.landline}`} style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {isArabic ? "اتصل بنا" : "Call Us"}
                </a>
              </div>
              <div>
                <a
                  href={`https://wa.me/${t.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}
                >
                  {isArabic ? "واتساب" : "WhatsApp"}
                </a>
              </div>
              <div>
                <a href="mailto:info@rock-summit.com" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </a>
              </div>
              <div>
                <Link href="/contact-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  {isArabic ? "نموذج الاتصال" : "Contact Form"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ 
          borderColor: "#FFD700", 
          opacity: 0.3,
          margin: "2rem 0 1rem 0"
        }} />

        {/* Footer Bottom */}
        <div className="row text-center">
          <div className="col pb-3" style={{ color: "#e0e0e0", fontSize: "14px" }}>
            &copy; {currentDate?.getFullYear()} <span style={{ color: "#FFD700" }}>{t.companyName}</span>
            <span className="mx-2">|</span>
            {t.rightsReserved}
          </div>
        </div>
      </div>

      <style jsx>{`
        a:hover {
          color: #FFD700 !important;
        }
        
        @media (max-width: 768px) {
          .col-6 {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}