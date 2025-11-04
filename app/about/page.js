import Image from "next/image";
import styles from "@/Styles/About.module.css";
import { FaCogs, FaUsers, FaHandshake, FaLeaf } from "react-icons/fa";

export const metadata = {
    title: "About Us | Shilpkaar - Factory-Finished Furniture",
    description:
        "Discover Shilpkaar — Indore’s trusted modular furniture manufacturer delivering precision-built, factory-finished furniture for homes, offices, and commercial spaces.",
};

export default function AboutPage() {
    return (
        <main className={styles.about}>
            <section className={styles.intro}>
                <div className={styles.text}>
                    <h1>About Shilpkaar</h1>
                    <p>
                        At <strong>Shilpkaar</strong>, we bring craftsmanship and modern
                        technology together to redefine modular furniture in India. Our goal
                        is to make furniture manufacturing cleaner, faster, and more
                        precise—offering designs that combine function with beauty.
                    </p>
                    <p>
                        Based in Indore, our in-house factory is equipped with advanced
                        <strong> CNC</strong> and <strong>German edge-banding</strong> machines.
                        Every product—from kitchens and wardrobes to office furniture—is
                        made with factory precision, ensuring durability and perfect finish.
                    </p>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/about-factory.jpg"
                        alt="Shilpkaar furniture factory in Indore"
                        width={500}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>

            <section className={styles.values}>
                <h2>Our Core Values</h2>
                <div className={styles.grid}>
                    <div>
                        <FaCogs className={styles.icon} />
                        <h3>Precision Engineering</h3>
                        <p>
                            Every piece is built with CNC and edge-banding machines for millimeter-perfect fit and flawless finish.
                        </p>
                    </div>
                    <div>
                        <FaUsers className={styles.icon} />
                        <h3>Design Personalization</h3>
                        <p>
                            Each furniture project is tailored to client needs—space, color, and style preferences included.
                        </p>
                    </div>
                    <div>
                        <FaHandshake className={styles.icon} />
                        <h3>Integrity & Trust</h3>
                        <p>
                            Transparent process, timely delivery, and dedicated support ensure a professional experience every time.
                        </p>
                    </div>
                    <div>
                        <FaLeaf className={styles.icon} />
                        <h3>Sustainable Crafting</h3>
                        <p>
                            Eco-friendly materials and efficient factory production reduce waste and promote responsible manufacturing.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.callout}>
                <h2>Factory-Finished Furniture for Modern India</h2>
                <p>
                    Whether it's a home, office, or commercial project — Shilpkaar delivers
                    furniture that’s beautiful, durable, and built with precision. Experience
                    the future of modular furniture today.
                </p>
                <a href="/contact" className={styles.button}>
                    Book a Free Design Consultation
                </a>
            </section>
        </main>
    );
}
