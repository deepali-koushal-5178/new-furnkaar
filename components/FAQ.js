"use client";

import { useState, useEffect } from "react";
import styles from "../Styles/FAQ.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { faqdata } from "@/data/faq";
import { useLang } from "./LangContext";

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);
  const [topPadding, setTopPadding] = useState(120);

  // Auto-adjust FAQ padding based on navbar height
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const height = navbar.offsetHeight;
      setTopPadding(height + 40); // extra gap
    }
  }, []);

  const faqs = faqdata.map((item, index) => {
    const id = index + 1;
    return {
      ...item,
      q: t[`faq${id}Q`] || item.q,
      a: t[`faq${id}A`] || item.a,
    };
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={styles.faq}
      aria-labelledby="faq-heading"
      style={{ paddingTop: `${topPadding}px` }}
    >
      <h2 id="faq-heading">{t.faqHeading}</h2>

      <div className={styles.list}>
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`${styles.item} ${
              openIndex === i ? styles.active : ""
            }`}
          >
            <button
              className={styles.question}
              onClick={() => handleToggle(i)}
              aria-expanded={openIndex === i}
            >
              {f.q}
              <IoIosArrowDown
                className={`${styles.icon} ${
                  openIndex === i ? styles.rotate : ""
                }`}
              />
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === i ? styles.show : ""
              }`}
            >
              <p className={styles.answer}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
