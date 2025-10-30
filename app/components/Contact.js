import styles from "../../Styles/Contact.module.css";

export default function Contact() {
  return (
    <footer id="contact" className={styles.contact}>
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong> Shop 2, Gayathri Paradise, Opp. Gayathri Mandir, Kanadia, Indore – 452016
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:8319266986">8319266986</a>
      </p>
      <p>
        <strong>Follow us:</strong> @shilpkaar_furnitures
      </p>
      <p className={styles.copy}>© {new Date().getFullYear()} Shilpkaar Furnitures</p>
    </footer>
  );
}
