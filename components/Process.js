import Image from "next/image";
import styles from "../Styles/Process.module.css";
import { processSteps } from "@/data/process";

export default function Process() {
  const steps = processSteps;

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
<<<<<<< HEAD
              <Image
                src={step.img}
                alt={step.alt}
                width={400}
                height={250}
                className={styles.stepImage}
              />
=======
             <Image
  src={step.img}
  alt={step.alt}
  fill
  className={styles.stepImage}
  sizes="(max-width: 768px) 100vw, 33vw"
/>
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d
            </div>
            <h3>{step.id}. {step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
