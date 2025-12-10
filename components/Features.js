"use client";

import styles from "../Styles/Features.module.css";
import { GiWoodPile } from "react-icons/gi";
import { FaTools, FaHardHat, FaClock, FaPalette } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useLang } from "./LangContext";

export default function Features() {
  const { t } = useLang();

  return (
    <section className={styles.features}>
      <h2>{t.featuresHeading}</h2>
      <p className={styles.intro}>{t.featuresIntro}</p>

      <div className={styles.list}>

        <div>
          <GiWoodPile className={styles.icon} />
          <span>{t.feature1}</span>
        </div>

        <div>
          <FaTools className={styles.icon} />
          <span>{t.feature2}</span>
        </div>

        <div>
          <FaHardHat className={styles.icon} />
          <span>{t.feature3}</span>
        </div>

        <div>
          <FaClock className={styles.icon} />
          <span>{t.feature4}</span>
        </div>

        <div>
          <MdCancel className={styles.icon} />
          <span>{t.feature5}</span>
        </div>

        <div>
          <FaPalette className={styles.icon} />
          <span>{t.feature6}</span>
        </div>

      </div>
    </section>
  );
}
