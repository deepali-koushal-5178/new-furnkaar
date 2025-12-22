"use client";

import { LangProvider } from "@/components/LangContext";

export default function LangWrapper({ dict, lang, children }) {
  return (
    <LangProvider dict={dict} initialLang={lang}>
      {children}
    </LangProvider>
  );
}
