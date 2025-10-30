import styles from "../../Styles/WhyChoose.module.css";
import { FaTrophy, FaCog, FaBoxOpen, FaIndustry } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className={styles.whychoose}>
      <h2>Why Choose Shilpkaar Furnitures?</h2>
      <p className={styles.intro}>
        At Shilpkaar Furnitures, we combine design expertise with precision manufacturing to deliver modular furniture that lasts for years and looks stunning in every home.
      </p>

    <div className={styles.features}>
        <div>
          <FaTrophy />
          <strong>10+ Years Experience</strong>
          <br />
          Trusted by homeowners and interior designers across India.
        </div>

        <div>
          <FaCog />
          <strong>German & Italian Machinery</strong>
          <br />
          Every product is cut, edge-banded, and finished with high precision.
        </div>

        <div>
          <FaIndustry />
          <strong>Made in India</strong>
          <br />
          Designed, manufactured, and assembled entirely in our Indore facility.
        </div>

        <div>
          <FaBoxOpen />
          <strong>End-to-End Service</strong>
          <br />
          From design consultation to on-site installation and warranty support.
        </div>
      </div>
    </section>
  );
}
