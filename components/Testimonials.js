import styles from "../Styles/Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Loved the precise finish and the zero-mess installation experience.",
      name: "Anjali",
      location: "Bhopal",
    },
    {
      quote:
        "Beautiful modular furniture with great quality and smooth process.",
      name: "Ravi",
      location: "Indore",
    },
    {
      quote:
        "Professional team, timely delivery, and excellent craftsmanship.",
      name: "Neha",
      location: "Pune",
    },
  ];

  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading">What Our Customers Say</h2>
      <div className={styles.cards}>
        {testimonials.map((t, i) => (
          <article key={i} className={styles.card} itemProp="review" itemScope itemType="https://schema.org/Review">
            <blockquote className={styles.quote}>
              <p itemProp="reviewBody">“{t.quote}”</p>
            </blockquote>
            <cite className={styles.author}>
              — <span itemProp="author">{t.name}</span>, {t.location}
            </cite>
          </article>
        ))}
      </div>
    </section>
  );
}
