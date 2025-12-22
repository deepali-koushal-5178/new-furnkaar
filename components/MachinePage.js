"use client";

import Image from "next/image";
import styles from "@/Styles/Machine.module.css";
import { machinesData } from "@/data/machines";
import { useLang } from "@/components/LangContext";

export default function MachineContent() {
  const { t } = useLang();

  return (
    <section className={styles.machines}>
      <h1 className={styles.heading}>{t.machinesHeading}</h1>
      <p className={styles.subheading}>{t.machinesSubheading}</p>

      <div className={styles.container}>
        {machinesData.map((m, index) => {
          const nameKey = `m${m.id}_name`;
          const descKey = `m${m.id}_desc`;

          return (
            <div
              key={m.id}
              className={`${styles.machine} ${index % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.imageBox}>
                <Image
                  src={m.img}
                  alt={t[nameKey] || m.name}
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>

              <div className={styles.textBox}>
                <h2>{t[nameKey] || m.name}</h2>
                <p>{t[descKey] || m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
