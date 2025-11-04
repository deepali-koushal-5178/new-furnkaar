import Image from "next/image";
import styles from "../Styles/Process.module.css";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Design Consultation",
      desc: "We begin by understanding your lifestyle, space, and design goals to create tailored modular solutions.",
      img: "/images/step-design.jpg",
      alt: "Design consultation at Shilpkaar Furnitures Indore",
    },
    {
      id: 2,
      title: "Material Selection",
      desc: "Choose from premium laminates, veneers, acrylics, and hardware — sourced from trusted global brands.",
      img: "/images/step-materials.jpg",
      alt: "Material selection and laminates display",
    },
    {
      id: 3,
      title: "Factory Manufacturing",
      desc: "Our in-house facility uses precision German & Italian machinery for perfect cuts and seamless assembly.",
      img: "/images/step-factory.jpg",
      alt: "Factory manufacturing process with CNC machine",
    },
    {
      id: 4,
      title: "Quality Check",
      desc: "Each unit is inspected for alignment, durability, and finish to ensure factory-grade perfection.",
      img: "/images/step-quality.jpg",
      alt: "Quality check process at Shilpkaar factory",
    },
    {
      id: 5,
      title: "Quick Installation",
      desc: "Our trained professionals install everything cleanly and efficiently — no mess, no delays.",
      img: "/images/step-installation.jpg",
      alt: "Installation team fitting modular furniture",
    },
    {
      id: 6,
      title: "After-Sales Support",
      desc: "We provide post-installation service, maintenance, and warranty for complete peace of mind.",
      img: "/images/step-design.jpg",
      alt: "Customer support and service team at Shilpkaar",
    },
  ];

  return (
    <section className={styles.process} id="process">
      <h2>The Shilpkaar Way: Factory-Made Perfection</h2>
      <p className={styles.intro}>
        From concept to completion — every step is handled in-house to ensure
        precision, consistency, and quality that lasts for years.
      </p>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id}>
            <div className={styles.imgBox}>
              <Image
                src={step.img}
                alt={step.alt}
                width={400}
                height={250}
                className={styles.stepImage}
              />
            </div>
            <h3>{step.id}. {step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
