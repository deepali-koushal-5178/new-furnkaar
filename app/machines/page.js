"use client";


import { LangProvider, useLang } from "@/components/LangContext";
import en from "@/locales/en.json";
import MachineContent from "@/components/MachinePage";


export default function MachinePage() {
    const { t } = useLang();

    return (
           <LangProvider initialLang="en" dict={en}>
              <MachineContent />
            </LangProvider>
    );
}
