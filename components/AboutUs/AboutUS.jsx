"use client";

import React, { useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import {
  FaBuilding,
  FaRoad,
  FaTree,
  FaPaintRoller,
  FaSnowflake,
  FaServer,
  FaLaptop,
  FaVideo,
  FaUsers,
  FaToolbox
} from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./aboutus.module.css";

export default function AboutUs({ params }) {
  const resolvedParams = use(params);
  const currentLang = resolvedParams?.lang || "en";

  const router = useRouter();

  const starCanvasHero = useRef(null);
  const starCanvasStory = useRef(null);
  const starCanvasServices = useRef(null);

  //Starfield Animation
  const useStarfield = (canvasRef) => {
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", resize);

      const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }));

      function draw() {
        ctx.fillStyle = "#001233";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#fff";
        stars.forEach((s) => {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fill();

          s.x += s.dx;
          s.y += s.dy;
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        });

        requestAnimationFrame(draw);
      }
      draw();

      return () => window.removeEventListener("resize", resize);
    }, []);
  };

  useStarfield(starCanvasHero);
  useStarfield(starCanvasStory);
  useStarfield(starCanvasServices);

  // Translations
  const content = {
    en: {
      heroTitle: "About Rock Summit Co. Ltd",
      heroSubtitle: "General Contracting Company",
      heroExtra: "In a competitive world where the pace of achievement accelerates, Rock Summit launched in the contracting industry with an ambitious vision that combines professionalism and sustainability in implementation, and a deep commitment to quality values. We strive to be a reliable partner in infrastructure and construction projects by providing integrated solutions that meet our clients' aspirations and align with the objectives of Saudi Vision 2030.",
      history: "We take pride in our engineering expertise, operational skills, and a history of working in diverse environments with leading entities, where we place accuracy, safety, and time commitment at the top of our priorities in every project. We also believe that the relationship with the community is no less important than the relationship with the client, so we work to enhance our presence as a responsible national institution that respects the local fabric and participates in building a promising developmental future.",
      servicesTitle: "Our Services",
      storyHeading: "Our Vision & Mission",
      mission: "Active contribution to developing the Kingdom's infrastructure through implementing high-quality projects, enhancing operational efficiency, and compliance with approved engineering standards.",
      values: "Commitment to providing professional contracting works based on: Quality, Timeliness, Continuous Development, Modern Building Technologies, Occupational Safety, Building Sustainable Relationships, Investing in National Cadres.",
      vision: "To be at the forefront of national contracting companies by providing sustainable and innovative construction solutions that meet our clients' aspirations and support achieving Saudi Vision 2030 objectives.",
      buttons: {
        buildings: "Building Construction",
        roads: "Road Works",
        landscaping: "Landscaping",
        finishing: "Finishing Works",
        hvac: "HVAC Systems",
        maintenance: "Maintenance",
        computer: "IT Systems",
        videoWall: "Video Wall",
        events: "Events Management"
      },
    },
    ar: {
      heroTitle: "عن شركة القمة الصخرية المحدودة",
      heroSubtitle: "للمقاولات العامة",
      heroExtra: "في عالم تتسارع فيه وتيرة الإنجاز، انطلقت شركة القمة الصخرية في عالم المقاولات، برؤية طموحة تجمع بين الاحترافية والاستدامة في التنفيذ، والالتزام العميق بقيم الجودة. نسعى لأن نكون شريكا موثوقاً في مشاريع البنية التحتية والإنشاءات، من خلال توفير حلول متكاملة تواكب تطلعات عملائنا وتنسجم مع مستهدفات رؤية المملكة ٢٠٣٠",
      history: "نفتخر بخبراتنا الهندسية ومهاراتنا التشغيلية وبتاريخ حافل من العمل في بيئات متنوعة ومع جهات رائدة، حيث نضع الدقة والسلامة والالتزام الزمني على رأس أولوياتنا في كل مشروع. كما نؤمن بأن العلاقة مع المجتمع لا تقل أهمية عن العلاقة مع العميل، فنعمل على تعزيز حضورنا كمؤسسة وطنية مسؤولة، تحترم النسيج المحلي وتشارك في بناء مستقبل تنموي واعد.",
      servicesTitle: "خدماتنا",
      storyHeading: "رؤيتنا ورسالتنا",
      mission: "المساهمة الفاعلة في تطوير البنية التحتية للمملكة عبر تنفيذ مشاريع عالية الجودة وتعزيز الكفاءة التشغيلية والامتثال للمعايير الهندسية المعتمدة",
      values: "الالتزام بتقديم أعمال مقاولات باحترافية عالية ترتكز على: الجودة، الالتزام بالمواعيد، التطوير المستمر، تقنيات البناء الحديثة، السلامة المهنية، بناء علاقات مستدامة، الاستثمار في الكوادر الوطنية",
      vision: "أن نكون في طليعة شركات المقاولات الوطنية من خلال تقديم حلول إنشائية مستدامة ومبتكرة تواكب تطلعات عملائنا وتدعم تحقيق مستهدفات رؤية المملكة ٢٠٣٠",
      buttons: {
        buildings: "إنشاء المباني",
        roads: "أعمال الطرق",
        landscaping: "التشجير والملاعب",
        finishing: "أعمال التشطيب",
        hvac: "أنظمة التكييف",
        maintenance: "الصيانة",
        computer: "أنظمة الحاسب",
        videoWall: "شاشات العرض",
        events: "إدارة الفعاليات"
      },
    },
  };

  const t = content[currentLang];

  const services = [
    {
      icon: <FaBuilding size={50} />,
      title: { en: "Building Construction", ar: "إنشاء المباني" },
      text: {
        en: "Construction of residential, government, educational, and healthcare buildings with global quality standards.",
        ar: "إنشاء المباني السكنية والحكومية والمدارس والمستشفيات بمعايير جودة عالمية.",
      },
      link: "/service/buildings",
      btnKey: "buildings",
    },
    {
      icon: <FaRoad size={50} />,
      title: { en: "Road Works & Lighting", ar: "أعمال الطرق والإنارة" },
      text: {
        en: "Complete road solutions including paving, traffic signals, road markings, and lighting systems.",
        ar: "حلول متكاملة لأعمال الطرق تشمل التعبيذ، الإشارات المرورية، الخطوط الأرضية، والإنارة.",
      },
      link: "/service/roads",
      btnKey: "roads",
    },
    {
      icon: <FaTree size={50} />,
      title: { en: "Landscaping & Sports", ar: "التشجير والملاعب" },
      text: {
        en: "Design and implementation of gardens, sports fields, and recreational facilities.",
        ar: "تصميم وتنفيذ الحدائق والملاعب ومرافق الرياضة بأنواعها.",
      },
      link: "/service/landscaping",
      btnKey: "landscaping",
    },
    {
      icon: <FaPaintRoller size={50} />,
      title: { en: "Finishing Works", ar: "أعمال التشطيب" },
      text: {
        en: "Interior and exterior finishing works including modern paints, floors, gypsum board, and cladding.",
        ar: "تنفيذ جميع أنواع التشطيبات العصرية الداخلية والخارجية والواجهات.",
      },
      link: "/service/finishing",
      btnKey: "finishing",
    },
    {
      icon: <FaSnowflake size={50} />,
      title: { en: "HVAC Systems", ar: "أنظمة التبريد والتكييف" },
      text: {
        en: "Installation of modern cooling and air conditioning systems for comfortable and energy-efficient environments.",
        ar: "تركيب أنظمة التبريد والتكييف الحديثة لضمان بيئات مريحة وموفرة للطاقة.",
      },
      link: "/service/hvac",
      btnKey: "hvac",
    },
    {
      icon: <FaToolbox size={50} />,
      title: { en: "Maintenance & Operation", ar: "الصيانة والتشغيل" },
      text: {
        en: "Comprehensive building maintenance, operation, and cleaning services with specialized teams.",
        ar: "خدمات متكاملة لصيانة وتشغيل ونظافة الأبنية بفرق متخصصة.",
      },
      link: "/service/maintenance",
      btnKey: "maintenance",
    },
    {
      icon: <FaLaptop size={50} />,
      title: { en: "IT Systems & Networks", ar: "أنظمة الحاسب والشبكات" },
      text: {
        en: "Operation, maintenance, and monitoring of computer systems, networks, and BMS systems.",
        ar: "تشغيل ومتابعة وصيانة أنظمة الحاسب الآلي والشبكات وأنظمة إدارة المباني.",
      },
      link: "/service/computer",
      btnKey: "computer",
    },
    {
      icon: <FaVideo size={50} />,
      title: { en: "Video Wall Systems", ar: "أنظمة الفيديو وول" },
      text: {
        en: "Supply, installation, and maintenance of indoor and outdoor video wall systems.",
        ar: "توريد وتركيب وصيانة أنظمة الفيديو وول الداخلية والخارجية.",
      },
      link: "/service/videowall",
      btnKey: "videoWall",
    },
    {
      icon: <FaUsers size={50} />,
      title: { en: "Events Management", ar: "إدارة الفعاليات" },
      text: {
        en: "Comprehensive organization and management of exhibitions, conferences, and corporate events.",
        ar: "خدمة متكاملة لتنظيم وإدارة المعارض والمؤتمرات والفعاليات المؤسسية.",
      },
      link: "/service/events",
      btnKey: "events",
    },
  ];

  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section className={styles.heroSection}>
        <canvas ref={starCanvasHero} className={styles.heroCanvas} />
        <motion.div className={styles.heroContent}>
          <motion.h1 className={styles.heroTitle}>{t.heroTitle}</motion.h1>
          <motion.p className={styles.heroSubtitle}>{t.heroSubtitle}</motion.p>
          <motion.p className={styles.heroExtra}>{t.heroExtra}</motion.p>
        </motion.div>
      </section>

      {/* 🧬 Story Section */}
      <section className={styles.storySection}>
        <canvas ref={starCanvasStory} className={styles.storyCanvas} />
        <div
          className={styles.storyWrapper}
          style={{
            flexDirection: currentLang === "ar" ? "row-reverse" : "row",
          }}
        >
          <motion.div className={styles.storyText}>
            <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
            <div className={styles.missionVision}>
              <h3>{currentLang === "en" ? "Our Mission" : "رسالتنا"}</h3>
              <p>{t.mission}</p>
              
              <h3>{currentLang === "en" ? "Our Values" : "قيمنا"}</h3>
              <p>{t.values}</p>
              
              <h3>{currentLang === "en" ? "Our Vision" : "رؤيتنا"}</h3>
              <p>{t.vision}</p>
            </div>
            <p className={styles.storyParagraph}>{t.history}</p>
          </motion.div>
          <motion.div className={styles.storyImage}>
            <img src="/about.png" alt="Our Story" />
          </motion.div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section className={styles.servicesSection}>
        <canvas ref={starCanvasServices} className={styles.storyCanvas} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.servicesTitle}>{t.servicesTitle}</h2>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title[currentLang]}</h3>
                <p className={styles.serviceText}>{s.text[currentLang]}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.serviceButton}
                  onClick={() => router.push(s.link)}
                >
                  {t.buttons[s.btnKey]}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}