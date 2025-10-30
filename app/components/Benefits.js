import styles from "../../Styles/Benefits.module.css";
import { FaClock, FaBroom, FaPalette, FaGem, FaHammer, FaRupeeSign } from "react-icons/fa";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2>Why Homeowners Love the Shilpkaar Experience</h2>
      <div className={styles.grid}>
        <div>
          <FaClock /> <strong>Time-Saving</strong>
          <br /> No weeks of on-site work.
        </div>
        <div>
          <FaBroom /> <strong>Dust-Free</strong>
          <br /> Everything is built in the factory.
        </div>
        <div>
          <FaPalette /> <strong>Customizable</strong>
          <br /> Made as per your size, color & need.
        </div>
        <div>
          <FaGem /> <strong>Aesthetic Appeal</strong>
          <br /> Perfect edge finish & uniform design.
        </div>
        <div>
          <FaHammer /> <strong>Durable</strong>
          <br /> Built with Action Tesa MDF/HDHMR.
        </div>
        <div>
          <FaRupeeSign /> <strong>Value for Money</strong>
          <br /> Long-lasting & easy to relocate.
        </div>
      </div>
      <p className={styles.testimonial}>
        “Our modular kitchen was installed in just 3 days — absolutely no mess!”
        <br />– <strong>Sneha, Indore</strong>
      </p>
    </section>
  );
}
