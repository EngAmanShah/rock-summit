import React from "react";
import {
  FaBuilding,
  FaHardHat,
  FaTools,
  FaTruck,
  FaHome,
  FaRoad,
  FaTree,
  FaPaintRoller,
  FaSnowflake,
  FaToolbox,
  FaCogs,
  FaBolt,
  FaWater,
  FaFireExtinguisher,
} from "react-icons/fa";
import {
  GiBrickWall,
  GiConcreteBag,
  GiSteelBeams,
  GiDigDug,
  GiHammerNails,
  GiStoneWall,
  GiRoof,
  GiFloorPolisher,
} from "react-icons/gi";
import "./Skills.css";

// Safe icon component that handles undefined icons
const SafeIcon = ({ icon: Icon, className, name }) => {
  if (!Icon || typeof Icon === 'undefined') {
    return <div className={className}>🏗️</div>;
  }
  return <Icon className={className} />;
};

export default function TechMarquee({ lang = "en" }) {
  // Translations
  const translations = {
    en: {
      heading: "Construction Technologies & Methods",
      description: "From modern building techniques to advanced construction equipment and sustainable practices — we utilize cutting-edge technologies for superior project delivery.",
      techNames: {
        BuildingConstruction: "Building Construction",
        CivilEngineering: "Civil Engineering",
        ConstructionTools: "Construction Tools",
        HeavyEquipment: "Heavy Equipment",
        ResidentialBuildings: "Residential Buildings",
        RoadConstruction: "Road Construction",
        Landscaping: "Landscaping",
        FinishingWorks: "Finishing Works",
        HVACSystems: "HVAC Systems",
        Maintenance: "Maintenance",
        MechanicalSystems: "Mechanical Systems",
        ElectricalWorks: "Electrical Works",
        Plumbing: "Plumbing",
        SafetySystems: "Safety Systems",
        Masonry: "Masonry",
        ConcreteWorks: "Concrete Works",
        SteelStructures: "Steel Structures",
        Excavation: "Excavation",
        Carpentry: "Carpentry",
        StoneWorks: "Stone Works",
        Roofing: "Roofing",
        Flooring: "Flooring",
        AutoCAD: "AutoCAD",
        BIM: "BIM Modeling",
        SketchUp: "3D Modeling",
      },
    },
    ar: {
      heading: "التقنيات والأساليب الإنشائية",
      description: "من تقنيات البناء الحديثة إلى المعدات المتقدمة والممارسات المستدامة — نستخدم أحدث التقنيات لتسليم مشاريع متميزة.",
      techNames: {
        BuildingConstruction: "إنشاء المباني",
        CivilEngineering: "الهندسة المدنية",
        ConstructionTools: "أدوات البناء",
        HeavyEquipment: "المعدات الثقيلة",
        ResidentialBuildings: "المباني السكنية",
        RoadConstruction: "إنشاء الطرق",
        Landscaping: "التشجير والمسطحات",
        FinishingWorks: "أعمال التشطيب",
        HVACSystems: "أنظمة التكييف",
        Maintenance: "الصيانة",
        MechanicalSystems: "الأنظمة الميكانيكية",
        ElectricalWorks: "أعمال الكهرباء",
        Plumbing: "أعمال السباكة",
        SafetySystems: "أنظمة السلامة",
        Masonry: "أعمال المباني",
        ConcreteWorks: "أعمال الخرسانة",
        SteelStructures: "المنشآت المعدنية",
        Excavation: "أعمال الحفر",
        Carpentry: "أعمال النجارة",
        StoneWorks: "أعمال الحجر",
        Roofing: "أعمال الأسقف",
        Flooring: "أعمال الأرضيات",
        AutoCAD: "أوتوكاد",
        BIM: "نمذجة المعلومات",
        SketchUp: "النمذجة ثلاثية الأبعاد",
      },
    },
  };

  const t = translations[lang] ?? translations.en;

  // Construction tech rows - simplified without problematic icons
  const techRows = [
    [
      { icon: FaBuilding, name: "BuildingConstruction" },
      { icon: FaHardHat, name: "CivilEngineering" },
      { icon: FaTools, name: "ConstructionTools" },
      { icon: FaTruck, name: "HeavyEquipment" },
      { icon: FaHome, name: "ResidentialBuildings" },
      { icon: FaRoad, name: "RoadConstruction" },
      { icon: FaTree, name: "Landscaping" },
      { icon: FaPaintRoller, name: "FinishingWorks" },
    ],
    [
      { icon: FaSnowflake, name: "HVACSystems" },
      { icon: FaToolbox, name: "Maintenance" },
      { icon: FaCogs, name: "MechanicalSystems" },
      { icon: FaBolt, name: "ElectricalWorks" },
      { icon: FaWater, name: "Plumbing" },
      { icon: FaFireExtinguisher, name: "SafetySystems" },
      { icon: GiBrickWall, name: "Masonry" },
      { icon: GiConcreteBag, name: "ConcreteWorks" },
    ],
    [
      { icon: GiSteelBeams, name: "SteelStructures" },
      { icon: GiDigDug, name: "Excavation" },
      { icon: GiHammerNails, name: "Carpentry" },
      { icon: GiStoneWall, name: "StoneWorks" },
      { icon: GiRoof, name: "Roofing" },
      { icon: GiFloorPolisher, name: "Flooring" },
    ],
  ];

  return (
    <section
      className={`tech-marquee-wrapper ${lang === "ar" ? "text-end" : "text-start"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="tech-marquee">
        <div className="container text-center py-4 px-3">
          <h1 className="fw-bold text-white">{t.heading}</h1>
          <p className="text-white text-wrap">{t.description}</p>
        </div>

        {techRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`marquee ${rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"} mt-4`}
          >
            <div className="marquee-content">
              {row.map((tech, i) => (
                <div key={i} className="tech-item">
                  <SafeIcon 
                    icon={tech.icon} 
                    className={`tech-icon ${tech.name.toLowerCase()}`}
                    name={tech.name}
                  />
                  <span>{t.techNames[tech.name]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}