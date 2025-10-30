 import styles from "../../Styles/FAQ.module.css";
export default function FAQ() {
  const faqs = [
    {
      q: "How long does installation take?",
      a: "Most kitchens and wardrobes are ready within 3–7 days after design approval.",
    },
    {
      q: "What materials do you use?",
      a: "We use premium Action Tesa HDHMR and MDF boards with German edge-banding machines.",
    },
    {
      q: "Do you offer a warranty?",
      a: "Yes, all modular furniture includes a 5-year warranty with service support.",
    },
    {
      q: "Can I customize the design and finish?",
      a: "Absolutely! Every design is customized to your size, color, and storage needs.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.list}>
        {faqs.map((f, i) => (
          <div key={i} className={styles.item}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
