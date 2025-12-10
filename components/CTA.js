"use client";

import styles from "../Styles/CTA.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "./LangContext";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className={styles.cta} id="consultation">
      <div className={styles.container}>
        <h2>{t.ctaHeading}</h2>

        <p>{t.ctaText}</p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.primaryBtn}>
            {t.ctaPrimaryBtn}
          </a>

          <a
            href="https://wa.me/918319266986?text=Hi!%20I%20want%20to%20discuss%20a%20furniture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FaWhatsapp /> {t.ctaWhatsappBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
