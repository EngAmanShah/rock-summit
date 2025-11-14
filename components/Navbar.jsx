"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaWhatsapp, FaPhone, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isERPMenuOpen, setERPMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobileERPOpen, setMobileERPOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const erpHoverTimeout = useRef(null);
  const megaMenuRef = useRef(null);
  const erpMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
      if (erpMenuRef.current && !erpMenuRef.current.contains(event.target)) {
        setERPMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.navbar-toggler')) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileERPOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileERPOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  const menuItems = [
    { href: "/", label: lang === "ar" ? "الرئيسية" : "Home" },
    {
      href: "/service",
      label: lang === "ar" ? "الخدمات" : "Services",
      isDropdown: true,
    },
    {
      href: "/service",
      label: lang === "ar" ? "ERP" : "ERP",
      isERPDropdown: true,
    },
    { href: "/about-us", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact-us", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  // Don't render navbar on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const whatsappNumber = "+966539983393";
  const callNumber = "+966539983393";

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(hoverTimeout.current);
      setMegaMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setMegaMenuOpen(false);
      }, 300);
    }
  };

  const handleERPMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      setERPMenuOpen(true);
    }
  };

  const handleERPMouseLeave = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      erpHoverTimeout.current = setTimeout(() => {
        setERPMenuOpen(false);
      }, 300);
    }
  };

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileServicesOpen(!isMobileServicesOpen);
    }
  };

  const handleERPClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileERPOpen(!isMobileERPOpen);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileERPOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMegaMenuOpen(false);
    setERPMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileERPOpen(false);
  };

  // Services data
  const servicesData = {
    appDevelopment: {
      title: {
        en: "App Development",
        ar: "تطوير التطبيقات"
      },
      services: [
        { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
        { en: "Android App Development", ar: "تطوير تطبيقات أندرويد" },
        { en: "iOS App Development", ar: "تطوير تطبيقات iOS" },
        { en: "Web App Development", ar: "تطوير تطبيقات الويب" },
        { en: "UX/UI Design", ar: "تصميم واجهة المستخدم وتجربة المستخدم" }
      ]
    },
    softwareDevelopment: {
      title: {
        en: "Software & Development",
        ar: "البرمجيات والتطوير"
      },
      services: [
        { en: "Backend Development", ar: "تطوير الواجهة الخلفية" },
        { en: "Frontend Development", ar: "تطوير الواجهة الأمامية" },
        { en: "Custom Software Development", ar: "تطوير البرمجيات المخصصة" },
        { en: "Software Testing", ar: "اختبار البرمجيات" },
        { en: "SAAS Development", ar: "تطوير البرمجيات كخدمة" },
        { en: "MVP Development", ar: "تطوير المنتج الأدنى القابل للتطبيق" },
        { en: "Software Consulting", ar: "استشارات البرمجيات" }
      ]
    },
    creativeDigital: {
      title: {
        en: "Creative & Digital",
        ar: "الإبداع والرقمي"
      },
      services: [
        { en: "Digital Marketing", ar: "التسويق الرقمي" },
        { en: "Graphic Design", ar: "التصميم الجرافيكي" },
        { en: "Profile & Logo Design", ar: "تصميم الملف الشخصي والشعارات" },
        { en: "Video Editing", ar: "مونتاج الفيديو" },
        { en: "Animation & Video Shooting", ar: "الرسوم المتحركة وتصوير الفيديو" }
      ]
    },
    itSocialMedia: {
      title: {
        en: "IT & Social Media",
        ar: "تكنولوجيا المعلومات ووسائل التواصل"
      },
      services: [
        { en: "Information Technology", ar: "تكنولوجيا المعلومات" },
        { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل الاجتماعي" },
        { en: "Management Solutions", ar: "حلول الإدارة" }
      ]
    }
  };

  // ERP Solutions data
  const erpSolutions = [
    { 
      href: "service", 
      en: "Odoo ERP", 
      ar: "أودو ERP",
      description: {
        en: "Open-source business management software",
        ar: "برنامج إدارة الأعمال مفتوح المصدر"
      }
    },
    { 
      href: "service", 
      en: "SAP Business One", 
      ar: "SAP Business One",
      description: {
        en: "ERP solution for small to medium businesses",
        ar: "حل ERP للشركات الصغيرة والمتوسطة"
      }
    },
    { 
      href: "service", 
      en: "Oracle NetSuite", 
      ar: "أوراكل نت سويت",
      description: {
        en: "Cloud-based business management suite",
        ar: "مجموعة إدارة الأعمال القائمة على السحابة"
      }
    },
    { 
      href: "service", 
      en: "Microsoft Dynamics 365", 
      ar: "مايكروسوفت دايناميكس 365",
      description: {
        en: "Intelligent business applications",
        ar: "تطبيقات الأعمال الذكية"
      }
    },
    { 
      href: "service", 
      en: "Custom ERP Development", 
      ar: "تطوير ERP مخصص",
      description: {
        en: "Tailored ERP solutions for your business",
        ar: "حلول ERP مخصصة لعملك"
      }
    },
    { 
      href: "service", 
      en: "ERP Implementation", 
      ar: "تنفيذ ERP",
      description: {
        en: "Professional ERP implementation services",
        ar: "خدمات تنفيذ ERP المهنية"
      }
    }
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm"
        style={
          mounted
            ? {
                backgroundColor: scrolled
                  ? "rgba(255, 255, 255, 0.97)"
                  : "white",
                transition: "background-color 0.3s ease",
                backdropFilter: scrolled ? "blur(10px)" : "none",
              }
            : {}
        }
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="container">
          {/* Logo */}
          <Link href={`/${lang}`} className="navbar-brand" onClick={handleLinkClick}>
            <img src="/logo.png" alt="Logo" style={{ width: "160px" }} />
          </Link>

          {/* Desktop Navbar Links */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav mx-auto align-items-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    item.isDropdown ? "dropdown mega-menu" : 
                    item.isERPDropdown ? "dropdown erp-menu" : ""
                  } mx-2`}
                  onMouseEnter={item.isDropdown ? handleMouseEnter : 
                              item.isERPDropdown ? handleERPMouseEnter : undefined}
                  onMouseLeave={item.isDropdown ? handleMouseLeave : 
                              item.isERPDropdown ? handleERPMouseLeave : undefined}
                  ref={item.isDropdown ? megaMenuRef : 
                      item.isERPDropdown ? erpMenuRef : null}
                >
                  {item.isDropdown ? (
                    <>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`nav-link ${isActive(item.href) ? "active" : ""} d-flex align-items-center gap-1`}
                      >
                        {item.label}
                        {lang === "ar" ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </Link>

                      {/* Mega Menu - Desktop */}
                      <div
                        className={`mega-menu-dropdown ${isMegaMenuOpen ? "show" : ""}`}
                      >
                        <div className="mega-menu-content p-4">
                          <div className="row">
                            {Object.values(servicesData).map((category, catIndex) => (
                              <div key={catIndex} className="col-lg-3 col-md-6 mb-3">
                                <h6 className="fw-bold mb-3 category-title">
                                  {category.title[lang]}
                                </h6>
                                <ul className="list-unstyled">
                                  {category.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex}>
                                      <Link 
                                        href={`/${lang}/service`} 
                                        className="dropdown-item"
                                        onClick={handleLinkClick}
                                      >
                                        {service[lang]}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : item.isERPDropdown ? (
                    <>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`nav-link ${isActive(item.href) ? "active" : ""} d-flex align-items-center gap-1`}
                      >
                        {item.label}
                        {lang === "ar" ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </Link>

                      {/* ERP Dropdown Menu - Desktop */}
                      <div
                        className={`erp-dropdown-menu ${isERPMenuOpen ? "show" : ""}`}
                      >
                        <div className="erp-menu-content p-3">
                          <div className="row">
                            {erpSolutions.map((solution, index) => (
                              <div key={index} className="col-lg-6 mb-2">
                                <Link 
                                  href={`/${lang}${solution.href}`}
                                  className="erp-dropdown-item"
                                  onClick={handleLinkClick}
                                >
                                  <div className="erp-item-content">
                                    <h6 className="erp-item-title mb-1">
                                      {solution[lang]}
                                    </h6>
                                    <p className="erp-item-description mb-0">
                                      {solution.description[lang]}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Language & Buttons */}
            <div className="d-flex align-items-center ms-4 gap-3">
              <LanguageSwitcher 
                lang={lang} 
                displayText={lang === "ar" ? "EN" : "AR"}
              />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success d-flex align-items-center gap-2"
              >
                <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
              </a>
              <a href={`tel:${callNumber}`} className="btn btn-primary d-flex align-items-center gap-2">
                <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
              </a>
            </div>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <span className="navbar-toggler-icon"></span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        ref={mobileMenuRef}
        className={`mobile-sidebar ${isMobileMenuOpen ? "show" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="mobile-sidebar-header">
          <Link href={`/${lang}`} className="navbar-brand" onClick={handleLinkClick}>
            <img src="/logo.png" alt="Logo" style={{ width: "140px" }} />
          </Link>
          <button 
            className="close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.isDropdown ? (
                <>
                  <div 
                    className="mobile-menu-link dropdown-toggle"
                    onClick={handleServicesClick}
                  >
                    <span>{item.label}</span>
                    {isMobileServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  
                  <div className={`mobile-submenu ${isMobileServicesOpen ? "show" : ""}`}>
                    {Object.values(servicesData).map((category, catIndex) => (
                      <div key={catIndex} className="mobile-submenu-section">
                        <h6>{category.title[lang]}</h6>
                        <ul>
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link 
                                href={`/${lang}/service`} 
                                onClick={handleLinkClick}
                              >
                                {service[lang]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : item.isERPDropdown ? (
                <>
                  <div 
                    className="mobile-menu-link dropdown-toggle"
                    onClick={handleERPClick}
                  >
                    <span>{item.label}</span>
                    {isMobileERPOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </div>
                  
                  <div className={`mobile-submenu ${isMobileERPOpen ? "show" : ""}`}>
                    <div className="mobile-submenu-section">
                      <ul>
                        {erpSolutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex}>
                            <Link 
                              href={`/${lang}${solution.href}`}
                              onClick={handleLinkClick}
                              className="erp-mobile-link"
                            >
                              <div>
                                <strong>{solution[lang]}</strong>
                                <small className="d-block text-muted">
                                  {solution.description[lang]}
                                </small>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className="mobile-menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <div className="mb-3">
              <LanguageSwitcher 
                lang={lang} 
                displayText={lang === "ar" ? "EN" : "AR"}
              />
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center gap-2 w-100 justify-content-center mb-2"
              onClick={handleLinkClick}
            >
              <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
            </a>
            <a 
              href={`tel:${callNumber}`} 
              className="btn btn-primary d-flex align-items-center gap-2 w-100 justify-content-center"
              onClick={handleLinkClick}
            >
              <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
            </a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .navbar {
          padding: 0.5rem 0;
          z-index: 1030;
        }

        .navbar-nav .nav-link {
          font-weight: 500;
          color: #333;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #399dd9;
        }

        /* Mega Menu Styles */
        .mega-menu {
          position: static;
        }

        .mega-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 90%;
          max-width: 1200px;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          border-radius: 8px;
        }

        .mega-menu-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* ERP Dropdown Menu Styles */
        .erp-menu {
          position: relative;
        }

        .erp-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 500px;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          border-radius: 8px;
        }

        .erp-dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        [dir="rtl"] .mega-menu-dropdown,
        [dir="rtl"] .erp-dropdown-menu {
          left: 50%;
          right: auto;
          transform: translateX(-50%) translateY(10px);
        }

        [dir="rtl"] .mega-menu-dropdown.show,
        [dir="rtl"] .erp-dropdown-menu.show {
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu-content {
          width: 100%;
        }

        .erp-menu-content {
          width: 100%;
        }

        .mega-menu-content .category-title {
          color: #399dd9;
          font-size: 0.9rem;
          border-bottom: 2px solid #399dd9;
          padding-bottom: 0.5rem;
        }

        .mega-menu-content .dropdown-item {
          padding: 0.5rem 0;
          color: #666;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          border: none;
          background: none;
        }

        .mega-menu-content .dropdown-item:hover {
          color: #399dd9;
          background: none;
          padding-left: 0.5rem;
        }

        .erp-dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .erp-dropdown-item:hover {
          background: #f8f9fa;
          border-color: #399dd9;
          text-decoration: none;
          color: #333;
        }

        .erp-item-title {
          color: #399dd9;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .erp-item-description {
          color: #666;
          font-size: 0.8rem;
          line-height: 1.3;
        }

        [dir="rtl"] .mega-menu-content .dropdown-item:hover {
          padding-left: 0;
          padding-right: 0.5rem;
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1040;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 20px rgba(0,0,0,0.1);
          transition: right 0.3s ease;
          z-index: 1050;
          overflow-y: auto;
        }

        [dir="rtl"] .mobile-sidebar {
          right: auto;
          left: -100%;
        }

        .mobile-sidebar.show {
          right: 0;
        }

        [dir="rtl"] .mobile-sidebar.show {
          left: 0;
          right: auto;
        }

        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #333;
          padding: 0.5rem;
          cursor: pointer;
        }

        .mobile-sidebar-content {
          padding: 1rem;
        }

        .mobile-menu-item {
          border-bottom: 1px solid #f5f5f5;
        }

        .mobile-menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        [dir="rtl"] .mobile-menu-link {
          text-align: right;
        }

        .mobile-menu-link:hover {
          color: #399dd9;
        }

        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-submenu.show {
          max-height: 2000px;
        }

        .mobile-submenu-section {
          padding: 0.5rem 0 0.5rem 1rem;
        }

        [dir="rtl"] .mobile-submenu-section {
          padding: 0.5rem 1rem 0.5rem 0;
        }

        .mobile-submenu-section h6 {
          color: #399dd9;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .mobile-submenu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-submenu-section li {
          margin-bottom: 0.3rem;
        }

        .mobile-submenu-section a {
          color: #666;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
          display: block;
          padding: 0.3rem 0;
        }

        .erp-mobile-link {
          padding: 0.75rem 0 !important;
          border-bottom: 1px solid #f0f0f0;
        }

        .erp-mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-submenu-section a:hover {
          color: #399dd9;
        }

        .mobile-buttons {
          padding: 1rem 0;
          border-top: 1px solid #eee;
          margin-top: 1rem;
        }

        /* Language Switcher Button Styles */
        .language-switcher-btn {
          background: none;
          border: 2px solid #399dd9;
          color: #399dd9;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 60px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }

        .language-switcher-btn:hover {
          background: #399dd9;
          color: white;
          text-decoration: none;
        }

        /* RTL Support */
        [dir="rtl"] .ms-4 {
          margin-left: 0 !important;
          margin-right: 1.5rem !important;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .mega-menu-dropdown,
          .erp-dropdown-menu {
            display: none;
          }
        }

        @media (max-width: 575px) {
          .mobile-sidebar {
            width: 280px;
          }
          
          .mega-menu-dropdown {
            width: 95%;
          }

          .erp-dropdown-menu {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}