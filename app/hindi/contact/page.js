"use client";

import Image from "next/image";
import styles from "@/Styles/About.module.css";
import { LangProvider, useLang } from "@/components/LangContext";
import { FaCogs, FaUsers, FaHandshake, FaLeaf } from "react-icons/fa";
import hi from "@/locales/hi.json";
import ContactContent from "@/components/ContactPage";


export default function ContactPage() {
    const { t } = useLang();

    return (
       <LangProvider initialLang="hi" dict={hi}>
      <ContactContent />
    </LangProvider>
    );
}
