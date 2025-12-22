"use client";
<<<<<<< HEAD
import styles from "../Styles/WhyChoose.module.css";
import { FaTrophy, FaCog, FaBoxOpen, FaIndustry, FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className={styles.whychoose} id="whychoose">
      <h2>Why Choose Shilpkaar Furnitures – Modular Furniture Manufacturer in Indore</h2>
      <span className={styles.subtitle}>
        Trusted manufacturing partner for homes, offices, and commercial spaces.
      </span>

      <p className={styles.intro}>
        We are not just furniture makers — we are manufacturers with a mission to bring
        precision, durability, and design harmony to every home, office, and commercial project.
      </p>

      <div className={styles.features}>
        <div>
          <FaTrophy />
          <strong>10+ Years of Expertise</strong>
          <br />
          Serving homeowners, architects, and businesses across India with custom-built solutions.
        </div>

        <div>
          <FaCog />
          <strong>German & Italian Technology</strong>
          <br />
          World-class edge banding, cutting, and finishing for flawless modular precision.
        </div>

        <div>
          <FaIndustry />
          <strong>In-House Manufacturing</strong>
          <br />
          Built from design to finish in our Indore facility — ensuring quality control at every stage.
        </div>

        <div>
          <FaBoxOpen />
          <strong>End-to-End Delivery</strong>
          <br />
          From design consultation to installation and after-sales support — handled entirely by our team.
        </div>

        <div>
          <FaCheckCircle />
          <strong>Quality Assured Materials</strong>
          <br />
          We use industry-grade boards, laminates, and fittings for strength and long life.
        </div>
      </div>

      <div className={styles.quality}>
        <p>
          <strong>Our Promise:</strong> Every Shilpkaar product goes through strict quality checks,
          ensuring precision manufacturing, long life, and a finish that defines craftsmanship.
        </p>
=======

import styles from "../Styles/WhyChoose.module.css";
import {
  FaClock,
  FaBroom,
  FaPalette,
  FaGem,
  FaHammer,
  FaTrophy,
  FaCog,
  FaIndustry,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhyMerged() {
  const cards = [
    {
      icon: <FaClock />,
      title: "Time-Saving",
      text: "No weeks of on-site carpentry. Everything is pre-built in the factory.",
    },
    {
      icon: <FaBroom />,
      title: "Dust-Free Process",
      text: "Your home stays clean — no cutting, dust or disturbance.",
    },
    {
      icon: <FaPalette />,
      title: "Fully Customizable",
      text: "Designed to match your space, color palette and style.",
    },
    {
      icon: <FaGem />,
      title: "Premium Finish",
      text: "Perfect edges, smooth panels and flawless craftsmanship.",
    },
    {
      icon: <FaHammer />,
      title: "Durable Build Quality",
      text: "Made from high-grade engineered boards & branded hardware.",
    },

    // 5 from Why Choose Section
    {
      icon: <FaTrophy />,
      title: "10+ Years Experience",
      text: "Trusted by homeowners, architects and commercial clients.",
    },
    {
      icon: <FaCog />,
      title: "German–Italian Technology",
      text: "Precision cutting, edge banding & premium finishing.",
    },
    {
      icon: <FaIndustry />,
      title: "In-House Manufacturing",
      text: "Built entirely in our Indore factory — no outsourcing.",
    },
    {
      icon: <FaBoxOpen />,
      title: "End-to-End Service",
      text: "Design, manufacturing, installation & after-sales under one roof.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality-Assured Materials",
      text: "High-grade boards, laminates & fittings for long life.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2>Why Homeowners & Professionals Trust Shilpkaar Furnitures</h2>

      <p className={styles.intro}>
        Combining the benefits of factory-finished modular furniture with
        the expertise of a 10+ year trusted manufacturing brand.
      </p>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d
      </div>
    </section>
  );
}
