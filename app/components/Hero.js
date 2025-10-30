'use client'
import { useEffect, useState } from "react";
import styles from "../../Styles/Hero.module.css";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          Shilpkaar
          {/* <span className={styles.tagline}>Factory-Finished Furniture</span> */}
        </div>

        <div className={styles.navLinks}>
          <a href="#login">Login</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Transform Your Home with Factory-Finished Modular Furniture</h1>
          <p>Style Jo Pocket Mein Fit</p>
          <a href="#contact" className={styles.button}>
            Get a Free Design Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
