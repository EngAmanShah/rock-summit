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
    aboutTitle: "عن الشركة",
    servicesTitle: "خدماتنا",
    contactTitle: "اتصل بنا",
    links: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
    },
    aboutLinks: {
      whoWeAre: "من نحن",
      mission: "رؤيتنا ورسالتنا",
      blog: "المدونة",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      careers: "الوظائف",
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
    mobile: "جوال"
  };

  const englishText = {
    companyName: "Rock Summit Co. Ltd",
    description: "Ruwad in delivering integrated construction and infrastructure projects, through their commitment to global quality and safety standards, and by merging technical expertise with innovation to achieve client aspirations.",
    companyTitle: "Company",
    aboutTitle: "About",
    servicesTitle: "Our Services",
    contactTitle: "Contact Us",
    links: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
    },
    aboutLinks: {
      whoWeAre: "Who We Are",
      mission: "Vision & Mission",
      blog: "Blog",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      careers: "Careers",
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
    mobile: "Mobile"
  };

  const t = isArabic ? arabicText : englishText;

  return (
    <footer
      className="footer"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ 
        backgroundColor: "#000000",
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        padding: "2rem 0 1rem 0",
      }}
    >
      <div className="container">
        {/* 5 COLUMNS - Adjusted Bootstrap grid */}
        <div className="row gx-1">
          {/* Column 1: Company Info - 3/12 = 25% */}
          <div className="col-12 col-lg-3 col-md-6 mb-3" style={{ 
            textAlign: isArabic ? "right" : "left",
            padding: isArabic ? "0 10px 0 5px" : "0 5px 0 10px",
          }}>
            <Link href="/">
              <img
                src="/logo_black.png"
                alt={`${t.companyName} logo`}
                style={{ 
                  width: "150px", 
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              />
            </Link>
            <p style={{ 
              fontSize: "12px", 
              color: "#e0e0e0",
              lineHeight: "1.4",
              marginBottom: "0.75rem"
            }}>
              <span className="fw-bold d-block mb-1" style={{ color: "#FFD700", fontSize: "14px" }}>{t.companyName}</span>
              {t.description}
            </p>

            {/* Contact Information */}
            <div style={{ fontSize: "12px", color: "#e0e0e0" }}>
              <div className="mb-1">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "العنوان: " : "Address: "}</strong>
                <span style={{ fontSize: "11px" }}>{t.address}</span>
              </div>
              <div className="mb-1">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "رقم الهاتف: " : "Phone: "}</strong>
                <a href={`tel:${t.landline}`} style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "11px" }}>
                  {t.landline}
                </a>
              </div>
              <div className="mb-1">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "جوال: " : "Mobile: "}</strong>
                <a 
                  href={`https://wa.me/${t.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "11px" }}
                >
                  {t.whatsapp}
                </a>
              </div>
              <div className="mb-0">
                <strong style={{ color: "#FFD700" }}>{isArabic ? "البريد الإلكتروني: " : "Email: "}</strong>
                <a href={`mailto:${t.email}`} style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "11px" }}>
                  {t.email}
                </a>
              </div>
            </div>
          </div>

          {/* NEW Column 2: About Links - 2/12 = 16.67% */}
          <div className="col-6 col-lg-2 col-md-6 mb-3" style={{ 
            textAlign: isArabic ? "right" : "left",
            padding: "0 8px",
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "15px",
              marginBottom: "0.4rem"
            }}>
              {t.aboutTitle}
            </h4>
            <div style={{ lineHeight: "1.4" }}>
              <div className="mb-0">
                <Link href="/about-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.whoWeAre}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/vision-mission" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.mission}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/blog" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.blog}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/terms-conditions" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.terms}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/privacy-policy" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.privacy}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/careers" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.aboutLinks.careers}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Company Links - 2/12 = 16.67% */}
          <div className="col-6 col-lg-2 col-md-6 mb-3" style={{ 
            textAlign: isArabic ? "right" : "left",
            padding: "0 8px",
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "15px",
              marginBottom: "0.4rem"
            }}>
              {t.companyTitle}
            </h4>
            <div style={{ lineHeight: "1.4" }}>
              <div className="mb-0">
                <Link href="/" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.links.home}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/about-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.links.about}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/services" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.links.services}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/projects" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.links.projects}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/contact-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.links.contact}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Services Links - 3/12 = 25% */}
          <div className="col-6 col-lg-3 col-md-6 mb-3" style={{ 
            textAlign: isArabic ? "right" : "left",
            padding: "0 8px",
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "15px",
              marginBottom: "0.4rem"
            }}>
              {t.servicesTitle}
            </h4>
            <div style={{ lineHeight: "1.4" }}>
              <div className="mb-0">
                <Link href="/service/buildings" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.services.building}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/service/infrastructure" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.services.infrastructure}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/service/finishing" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.services.finishing}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/service/landscaping" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.services.landscaping}
                </Link>
              </div>
              <div className="mb-0">
                <Link href="/service/maintenance" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {t.services.maintenance}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 5: Contact Info - 2/12 = 16.67% */}
          <div className="col-6 col-lg-2 col-md-6 mb-3" style={{ 
            textAlign: isArabic ? "right" : "left",
            padding: "0 8px",
          }}>
            <h4 style={{ 
              fontWeight: "600", 
              color: "#FFD700", 
              fontSize: "15px",
              marginBottom: "0.4rem"
            }}>
              {/* {t.contactTitle} */}
            </h4>
            {/* <div style={{ lineHeight: "1.4" }}>
              <div className="mb-0">
                <a href={`tel:${t.landline}`} style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {isArabic ? "اتصل بنا" : "Call Us"}
                </a>
              </div>
              <div className="mb-0">
                <a
                  href={`https://wa.me/${t.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}
                >
                  {isArabic ? "جوال" : "Mobile"}
                </a>
              </div>
              <div className="mb-0">
                <a href="mailto:info@rock-summit.com" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </a>
              </div>
              <div className="mb-0">
                <Link href="/contact-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "12px" }}>
                  {isArabic ? "نموذج الاتصال" : "Contact Form"}
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        <hr style={{ 
          borderColor: "#FFD700", 
          opacity: 0.3,
          margin: "1rem 0 0.5rem 0"
        }} />

        {/* Footer Bottom */}
        <div className="row text-center">
          <div className="col pb-1" style={{ color: "#e0e0e0", fontSize: "11px" }}>
            &copy; {currentDate?.getFullYear()} <span style={{ color: "#FFD700" }}>{t.companyName}</span>
            <span className="mx-1">|</span>
            {t.rightsReserved}
          </div>
        </div>
      </div>

      <style jsx>{`
        a:hover {
          color: #FFD700 !important;
          text-decoration: underline !important;
        }
        
        /* Tight spacing */
        .row.gx-1 {
          --bs-gutter-x: 0.201rem; /* smaller gap */
        }
        
        @media (max-width: 768px) {
          .col-6 {
            margin-bottom: 0.5rem;
            padding: 0 4px !important;
          }
        }
        
        @media (max-width: 992px) {
          .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          
          /* Make sure all 5 columns show properly on tablet */
          .row.gx-1 > .col-md-6 {
            flex: 0 0 48%;
            max-width: 48%;
            margin-bottom: 1rem;
          }
        }
        
        /* On large screens: 3 + 2 + 2 + 3 + 2 = 12 columns total */
        @media (min-width: 992px) {
          .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
          }
          
          .col-lg-2 {
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
        }
      `}</style>
    </footer>
  );
}