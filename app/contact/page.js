"use client";


import { LangProvider, useLang } from "@/components/LangContext";
import AboutContent from "@/components/AboutPage";
import en from "@/locales/en.json";
import ContactContent from "@/components/ContactPage";


export default function ContactPage() {
    const { t } = useLang();

    return (
           <LangProvider initialLang="en" dict={en}>
              <ContactContent />
            </LangProvider>
    );
}
