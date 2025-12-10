"use client";

import Image from "next/image";
import styles from "@/Styles/About.module.css";
import { useLang } from "@/components/LangContext";
import { FaCogs, FaUsers, FaHandshake, FaLeaf } from "react-icons/fa";

export default function AboutContent() {
    const { t } = useLang();

    return (
        <main className={styles.about}>
            {/* INTRO SECTION */}
            <section className={styles.intro}>
                <div className={styles.text}>
                    <h1>{t.aboutTitle}</h1>

                    <p>{t.aboutP1}</p>
                    <p>{t.aboutP2}</p>
                    <p>{t.aboutP3}</p>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/about-factory.jpg"
                        alt="Furnkaar by Shilpkaar Furnitures factory in Indore"
                        width={500}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>

            {/* VALUES */}
            <section className={styles.values}>
                <h2>{t.coreValuesHeading}</h2>

                <div className={styles.grid}>
                    <div>
                        <FaCogs className={styles.icon} />
                        <h3>{t.value1Title}</h3>
                        <p>{t.value1Desc}</p>
                    </div>

                    <div>
                        <FaUsers className={styles.icon} />
                        <h3>{t.value2Title}</h3>
                        <p>{t.value2Desc}</p>
                    </div>

                    <div>
                        <FaHandshake className={styles.icon} />
                        <h3>{t.value3Title}</h3>
                        <p>{t.value3Desc}</p>
                    </div>

                    <div>
                        <FaLeaf className={styles.icon} />
                        <h3>{t.value4Title}</h3>
                        <p>{t.value4Desc}</p>
                    </div>
                </div>
            </section>

            {/* CALLOUT */}
            <section className={styles.callout}>
                <h2>{t.calloutHeading}</h2>
                <p>{t.calloutText}</p>

                <a href="/contact" className={styles.button}>
                    {t.calloutCTA}
                </a>
            </section>
        </main>
    );
}
