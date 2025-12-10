"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import CTAButton from "./CTAButton";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHindi = pathname.startsWith("/hindi");
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);


  const switchLang = () => {
    if (isHindi) {
      router.push(pathname.replace("/hindi", ""));
    } else {
      router.push("/hindi" + pathname);
    }
  };

  // ⭐ Smooth scroll listener (passive for performance)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
     <nav
  className={`${styles.navbar} 
    ${mounted && scrolled ? styles.scrolled : ""} 
    ${pathname !== "/" ? styles.notHome : ""}`}
  aria-label="Main Navigation"
>

        {/* Logo */}
        <div className={styles.logo}>
            <h1>Furnkaar</h1>
         
          <span className={styles.tagline}>
            The Signature Collection by Shilpkaar Furnitures
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <Link
              href="/en"
              className={
                pathname === "/en" ||
                pathname === "/hi" ||
                pathname === "/"
                  ? styles.active
                  : ""
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/machines"
              className={pathname === "/machines" ? styles.active : ""}
            >
              Our Machines
            </Link>
          </li>

          <li>
            <Link
              href="/catalog"
              className={pathname === "/catalog" ? styles.active : ""}
            >
              Product Catalog
            </Link>
          </li>

          <li>
            <Link
              href="/faq"
              className={pathname === "/faq" ? styles.active : ""}
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? styles.active : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? styles.active : ""}
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className={styles.ctaContainer}>
          <CTAButton desktop={true} />
        </div>

        {/* Language Button */}
        <button className={styles.langBtn} onClick={switchLang}>
          {isHindi ? "EN" : "हिन्दी"}
        </button>
      </nav>
    </>
  );
}
