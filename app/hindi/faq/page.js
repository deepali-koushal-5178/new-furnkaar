"use client";

import Image from "next/image";
import styles from "@/Styles/About.module.css";
import { LangProvider, useLang } from "@/components/LangContext";
import { FaCogs, FaUsers, FaHandshake, FaLeaf } from "react-icons/fa";
import AboutContent from "@/components/AboutPage";
import hi from "@/locales/hi.json";
import FAQ from "@/components/FAQ";


export default function AboutPage() {

    return (
       <LangProvider initialLang="hi" dict={hi}>
      <FAQ />
    </LangProvider>
    );
}
