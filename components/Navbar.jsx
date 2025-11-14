"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  FaWhatsapp,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const megaMenuRef = useRef(null);
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
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
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
    { href: "/about-us", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact-us", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  // Don't render navbar on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const whatsappNumber = "+966539983393";

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

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileServicesOpen(!isMobileServicesOpen);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // Services data - Updated for construction company
  const servicesData = {
    buildingConstruction: {
      title: {
        en: "Building Construction",
        ar: "إنشاء المباني",
      },
      services: [
        { en: "Residential Buildings", ar: "المباني السكنية" },
        { en: "Commercial Buildings", ar: "المباني التجارية" },
        { en: "Government Buildings", ar: "المباني الحكومية" },
        { en: "Educational Facilities", ar: "المرافق التعليمية" },
        { en: "Healthcare Buildings", ar: "المباني الصحية" },
      ],
    },
    infrastructure: {
      title: {
        en: "Infrastructure",
        ar: "البنية التحتية",
      },
      services: [
        { en: "Road Construction", ar: "إنشاء الطرق" },
        { en: "Traffic Systems", ar: "أنظمة المرور" },
        { en: "Street Lighting", ar: "إنارة الشوارع" },
        { en: "Urban Development", ar: "التطوير الحضري" },
        { en: "Utilities Installation", ar: "تركيب المرافق" },
      ],
    },
    finishingWorks: {
      title: {
        en: "Finishing Works",
        ar: "أعمال التشطيب",
      },
      services: [
        { en: "Interior Finishing", ar: "التشطيب الداخلي" },
        { en: "Exterior Finishing", ar: "التشطيب الخارجي" },
        { en: "Painting Works", ar: "أعمال الدهانات" },
        { en: "Flooring Installation", ar: "تركيب الأرضيات" },
        { en: "Cladding & Facades", ar: "الكلادينج والواجهات" },
      ],
    },
    specializedServices: {
      title: {
        en: "Specialized Services",
        ar: "الخدمات المتخصصة",
      },
      services: [
        { en: "HVAC Systems", ar: "أنظمة التكييف" },
        { en: "Landscaping", ar: "التشجير والمسطحات الخضراء" },
        { en: "Sports Facilities", ar: "المرافق الرياضية" },
        { en: "Building Maintenance", ar: "صيانة المباني" },
        { en: "Facility Management", ar: "إدارة المرافق" },
      ],
    },
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm"
        style={
          mounted
            ? {
                backgroundColor: scrolled ? "rgba(0, 0, 0, 0.97)" : "white",
                transition: "background-color 0.3s ease",
                backdropFilter: scrolled ? "blur(10px)" : "none",
              }
            : {}
        }
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="container">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
            <img src="/logo.png" alt="Logo" style={{ width: "160px" }} />
          </Link>

          {/* Mobile Language Switcher - Top Right */}
          <div className="d-lg-none d-flex align-items-center gap-3">
            <LanguageSwitcher
              lang={lang}
              displayText={lang === "ar" ? "EN" : "ع"}
            />

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <FaTimes />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav mx-auto align-items-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    item.isDropdown ? "dropdown mega-menu" : ""
                  } mx-2`}
                  onMouseEnter={item.isDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={item.isDropdown ? handleMouseLeave : undefined}
                  ref={item.isDropdown ? megaMenuRef : null}
                >
                  {item.isDropdown ? (
                    <>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`nav-link ${
                          isActive(item.href) ? "active" : ""
                        } d-flex align-items-center gap-1`}
                      >
                        {item.label}
                        {lang === "ar" ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </Link>

                      {/* Mega Menu - Desktop */}
                      <div
                        className={`mega-menu-dropdown ${
                          isMegaMenuOpen ? "show" : ""
                        }`}
                      >
                        <div className="mega-menu-content p-4">
                          <div className="row">
                            {Object.values(servicesData).map(
                              (category, catIndex) => (
                                <div
                                  key={catIndex}
                                  className="col-lg-3 col-md-6 mb-3"
                                >
                                  <h6 className="fw-bold mb-3 category-title">
                                    {category.title[lang]}
                                  </h6>
                                  <ul className="list-unstyled">
                                    {category.services.map(
                                      (service, serviceIndex) => (
                                        <li key={serviceIndex}>
                                          <Link
                                            href={`/${lang}/service`}
                                            className="dropdown-item"
                                            onClick={handleLinkClick}
                                          >
                                            {service[lang]}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`nav-link ${
                        isActive(item.href) ? "active" : ""
                      }`}
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
                displayText={lang === "ar" ? "EN" : "ع"}
              />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success d-flex align-items-center gap-2"
              >
                <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
              </a>
            </div>
          </div>
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
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
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
                    {isMobileServicesOpen ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </div>

                  <div
                    className={`mobile-submenu ${
                      isMobileServicesOpen ? "show" : ""
                    }`}
                  >
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

          {/* Mobile Buttons - Only WhatsApp */}
          <div className="mobile-buttons">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center gap-2 w-100 justify-content-center"
              onClick={handleLinkClick}
            >
              <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
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
        .mobile-menu-link {
          color: #333 !important; /* Dark color */
        }
        .navbar-toggler {
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        /* Override global white color with important */
        .navbar-nav .nav-link {
          font-weight: 500;
          color: #ffffffff !important;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #399dd9 !important;
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
          background: white !important;
          box-shadow: 0 4px 20px ffffffff;
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

        [dir="rtl"] .mega-menu-dropdown {
          left: 50%;
          right: auto;
          transform: translateX(-50%) translateY(10px);
        }

        [dir="rtl"] .mega-menu-dropdown.show {
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu-content {
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
          color: #666 !important;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          border: none;
          background: none;
        }

        .mega-menu-content .dropdown-item:hover {
          color: #399dd9 !important;
          background: none;
          padding-left: 0.5rem;
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
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100vh;
          background: white !important;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
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
          color: #333 !important;
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
          color: #333 !important;
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
          color: #399dd9 !important;
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
          color: #666 !important;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
          display: block;
          padding: 0.3rem 0;
        }

        .mobile-submenu-section a:hover {
          color: #399dd9 !important;
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
          color: #399dd9 !important;
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
          color: white !important;
          text-decoration: none;
        }

        /* RTL Support */
        [dir="rtl"] .ms-4 {
          margin-left: 0 !important;
          margin-right: 1.5rem !important;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .mega-menu-dropdown {
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
        }
      `}</style>
    </>
  );
}
