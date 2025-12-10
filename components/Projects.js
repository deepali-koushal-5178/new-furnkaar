"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../Styles/Projects.module.css";
import { useLang } from "./LangContext";

export default function Projects() {
  const { t } = useLang();

  const projects = [
    { img: "/images/Kitchens/kitchen33.jpg", title: t.projectAltKitchen },
    { img: "/images/Sliding-Wardrobe/wb32.jpg", title: t.projectAltWardrobe },
    { img: "/images/tv1.jpg", title: t.projectAltTVUnit },
    { img: "/images/Double-Bed/db10.jpg", title: t.projectAltBedroom }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null); 
  const startX = useRef(0);
  const endX = useRef(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.projects}>
      <h2>{t.projectsHeading}</h2>
      <p className={styles.subtext}>{t.projectsSubtext}</p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageBox}>
              <Image
                src={p.img}
                alt={p.title || "Project Image"}
                width={400}
                height={250}
                className={styles.projectImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <button className={styles.viewBtn} onClick={() => setSelectedIndex(i)}>
                  {t.viewProject}
                </button>
              </div>
            </div>
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            
            <button
              className={styles.closeBtn}
              aria-label={t.modalClose}
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <button className={`${styles.navBtn} ${styles.left}`} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className={`${styles.navBtn} ${styles.right}`} onClick={handleNext}>
              <FaChevronRight />
            </button>

            <Image
              src={projects[selectedIndex].img}
              alt={projects[selectedIndex].title}
              width={800}
              height={500}
              className={styles.modalImg}
              priority
            />

            <p className={styles.modalTitle}>{projects[selectedIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
