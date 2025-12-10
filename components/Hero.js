'use client';
import { useEffect, useState } from "react";
import styles from "../Styles/Hero.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "./LangContext";

export default function Hero({ heading, sub, ctaText }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const { t } = useLang();

console.log( heading, sub, ctaText , "value check")
  return (
    <section className={styles.hero}>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{t.heroHeading}</h1>
          <p>{t.heroSub}</p>
          <a
            href="https://wa.me/918446004545?text=Hi%20Team%20Shilpkaar!%20I%20would%20like%20to%20discuss%20a%20custom%20furniture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FaWhatsapp className={styles.whatsappIcon} /> {t.cta}
          </a>
        </div>

        <div className={styles.scrollDown}>↓ Scroll to Explore</div>
      </div>
    </section>
  );
}
