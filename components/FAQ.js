"use client";
import { useState } from "react";
import styles from "../Styles/FAQ.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does the installation process take?",
      a: "Most modular kitchens and wardrobes are installed within 5–10 days after final design approval.",
    },
    {
      q: "What materials do you use for modular furniture?",
      a: "We use high-quality HDHMR, MDF, and plywood with factory-level finishing, edge-banding, and moisture resistance.",
    },
    {
      q: "Do you provide a warranty on furniture?",
      a: "Yes. All products come with up to a 5-year warranty covering manufacturing and installation defects.",
    },
    {
      q: "Can the furniture design be customized?",
      a: "Absolutely! Every design is fully customizable in size, layout, color, and finish to match your space and preferences.",
    },
    {
      q: "Do you take commercial or office projects?",
      a: "Yes, we handle residential as well as commercial projects like offices, cafes, and showrooms with custom solutions.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      <div className={styles.list}>
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`${styles.item} ${openIndex === i ? styles.active : ""}`}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
