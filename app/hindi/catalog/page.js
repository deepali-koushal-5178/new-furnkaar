"use client";

import { Suspense } from "react";
import { LangProvider } from "@/components/LangContext";
import hi from "@/locales/hi.json";
import CatalogContent from "@/components/CatalogPage";

export default function Page() {
  return (
    <LangProvider initialLang="hi" dict={hi}>
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogContent />
      </Suspense>
    </LangProvider>
  );
}
