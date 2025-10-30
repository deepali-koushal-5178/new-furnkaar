import styles from "../../Styles/Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.cards}>
        <div>
          <p>"Loved the precision finish and zero mess installation!"</p>
          <span>— Anjali, Bhopal</span>
        </div>
        <div>
          <p>"Perfect modular furniture at half the cost of local carpenters."</p>
          <span>— Ravi, Indore</span>
        </div>
        <div>
          <p>"Professional service, quick installation, and excellent quality."</p>
          <span>— Neha, Pune</span>
        </div>
      </div>
    </section>
  );
}
