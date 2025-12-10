"use client";

import { Suspense } from "react";

import { LangProvider } from "@/components/LangContext";
import en from "@/locales/en.json";
import CatalogContent from "@/components/CatalogPage";


export default function ContentPage() {

    return (
             <LangProvider initialLang="en" dict={en}>
      <Suspense fallback={<div>Loading catalog...</div>}>
        <CatalogContent />
      </Suspense>
    </LangProvider>
    );
}
