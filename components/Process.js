"use client";

import Image from "next/image";
import styles from "../Styles/Process.module.css";
import { processSteps } from "@/data/process";
import { useLang } from "./LangContext";

export default function Process() {
  const { t } = useLang();

  const translatedSteps = processSteps.map((step) => ({
    ...step,
    title: t[`process${step.id}Title`] || step.title,
    desc: t[`process${step.id}Desc`] || step.desc,
  }));

  return (
    <section className={styles.process} id="process">
      <h2>{t.processHeading}</h2>
      <p className={styles.intro}>{t.processIntro}</p>

      <div className={styles.steps}>
        {translatedSteps.map((step) => (
          <div key={step.id}>
            <div className={styles.imgBox}>
              <Image
                src={step.img}
                alt={step.alt}
                fill
                className={styles.stepImage}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            <h3>
              {step.id}. {step.title}
            </h3>

            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
