import styles from "../../Styles/Process.module.css";

export default function Process() {
  return (
    <section className={styles.process}>
      <h2>The Shilpkaar Way: Factory-Made Perfection</h2>
      <div className={styles.steps}>
        <div>
          <h3>Design Consultation</h3>
          <p>Choose design, layout, and finishes.</p>
        </div>
        <div>
          <h3>Factory Manufacturing</h3>
          <p>Precision cutting, edge-banding & assembly.</p>
        </div>
        <div>
          <h3>Quick Installation</h3>
          <p>Delivered and installed at your home in days.</p>
        </div>
        <div>
          <h3>After-Sales Support</h3>
          <p>Warranty and service available.</p>
        </div>
      </div>
    </section>
  );
}
