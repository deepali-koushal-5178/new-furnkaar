import Image from "next/image";
import styles from "../../Styles/Projects.module.css";

export default function Projects() {
  const projects = [
    { img: "/images/kitchen.jpg", title: "Modular Kitchen – Indore" },
    { img: "/images/wardrobe.jpg", title: "Wardrobe Design – Bhopal" },
    { img: "/images/tvunit.jpg", title: "TV Unit – Pune" },
    { img: "/images/bed.jpg", title: "Bedroom Set – Ujjain" },
  ];

  return (
    <section className={styles.projects}>
      <h2>Our Latest Modular Furniture Projects</h2>
      <p className={styles.subtext}>
        Explore some of our recent factory-finished furniture installations across India.
      </p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <Image src={p.img} alt={p.title} width={400} height={300} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
