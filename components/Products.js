"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../Styles/Products.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { items } from "@/data/products";

export default function Products() {
  const item = items;

  const categories = ["All", "Kitchens", "Wardrobes", "Bedrooms", "Living Rooms", "Office Spaces"];
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? item : item.filter((i) => i.category === active);

  return (
    <section className={styles.products}>
      <h2>What We Make</h2>
      <p className={styles.sub}>
        Explore our range of factory-finished modular furniture — from kitchens and wardrobes to
        office and commercial spaces.
      </p>

      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.pill} ${active === c ? styles.active : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgBox}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={styles.productImage}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}>
                <span className={styles.price}>{item.price}</span>
                <button className={styles.viewBtn} onClick={() => setSelected(item)}>
                  View Details
                </button>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.modalBackdrop} onClick={() => setSelected(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>
              ✕
            </button>

            <div className={styles.modalLeft}>
              <TransformWrapper initialScale={1} minScale={1} maxScale={4} wheel={{ step: 0.2 }}>
                <TransformComponent>
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    width={600}
                    height={400}
                    className={styles.modalImg}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>

            <div className={styles.modalRight}>
              <h3>{selected.name}</h3>
              <p className={styles.modalCat}>{selected.category}</p>
              <p className={styles.modalDesc}>{selected.desc}</p>
              <span className={styles.modalPrice}>{selected.price}</span>
              <p className={styles.modalCTA}>
                Interested in something similar?{" "}
                <a href="#contact">Let’s discuss your project.</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
