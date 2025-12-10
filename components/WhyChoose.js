"use client";

import styles from "../Styles/WhyChoose.module.css";
import {
  FaClock,
  FaBroom,
  FaPalette,
  FaGem,
  FaHammer,
  FaTrophy,
  FaCog,
  FaIndustry,
  FaBoxOpen,
  FaCheckCircle
} from "react-icons/fa";
import { useLang } from "./LangContext";

export default function WhyMerged() {
  const { t } = useLang();

  const cards = [
    {
      icon: <FaClock />,
      title: t.why1Title,
      text: t.why1Text
    },
    {
      icon: <FaBroom />,
      title: t.why2Title,
      text: t.why2Text
    },
    {
      icon: <FaPalette />,
      title: t.why3Title,
      text: t.why3Text
    },
    {
      icon: <FaGem />,
      title: t.why4Title,
      text: t.why4Text
    },
    {
      icon: <FaHammer />,
      title: t.why5Title,
      text: t.why5Text
    },
    {
      icon: <FaTrophy />,
      title: t.why6Title,
      text: t.why6Text
    },
    {
      icon: <FaCog />,
      title: t.why7Title,
      text: t.why7Text
    },
    {
      icon: <FaIndustry />,
      title: t.why8Title,
      text: t.why8Text
    },
    {
      icon: <FaBoxOpen />,
      title: t.why9Title,
      text: t.why9Text
    },
    {
      icon: <FaCheckCircle />,
      title: t.why10Title,
      text: t.why10Text
    }
  ];

  return (
    <section className={styles.section}>
      <h2>{t.whyChooseHeading}</h2>

      <p className={styles.intro}>
        {t.whyChooseIntro}
      </p>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
