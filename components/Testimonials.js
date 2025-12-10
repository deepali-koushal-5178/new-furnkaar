"use client";

import { testimonialsData } from "@/data/testimonial";
import styles from "../Styles/Testimonials.module.css";
import { useLang } from "./LangContext";

export default function Testimonials() {
  const { t, lang } = useLang();

  // Build translated testimonials
  const testimonials = testimonialsData.map((item, index) => {
    const id = index + 1;

    return {
      ...item,
      quote: t[`testimonial${id}Quote`] || item.quote,
      location: t[`testimonial${id}Location`] || item.location
    };
  });

  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading">{t.testimonialsHeading}</h2>

      <div className={styles.cards}>
        {testimonials.map((tItem, i) => (
          <article
            key={i}
            className={styles.card}
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <blockquote className={styles.quote}>
              <p itemProp="reviewBody">“{tItem.quote}”</p>
            </blockquote>

            <cite className={styles.author}>
              — <span itemProp="author">{tItem.name}</span>, {tItem.location}
            </cite>
          </article>
        ))}
      </div>
    </section>
  );
}
