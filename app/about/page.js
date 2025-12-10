"use client";


import { LangProvider, useLang } from "@/components/LangContext";
import AboutContent from "@/components/AboutPage";
import en from "@/locales/en.json";


export default function AboutPage() {
    const { t } = useLang();

    return (
           <LangProvider initialLang="en" dict={en}>
              <AboutContent />
            </LangProvider>
    );
}
