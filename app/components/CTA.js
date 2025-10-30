import styles from "../../Styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Upgrade from Hand Tools to High-Tech</h2>
      <p>Experience the Shilpkaar difference today!</p>
      <a href="#contact" className={styles.button}>
        Book a Consultation
      </a>
    </section>
  );
}
