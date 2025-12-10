"use client";
import React from "react";
import { useLang } from "./LangContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div style={{display:"flex", gap:8, alignItems:"center"}}>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        style={{
          background: lang === "en" ? "#f68b1e" : "transparent",
          color: lang === "en" ? "#fff" : "#fff",
          padding: "6px 10px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        style={{
          background: lang === "hi" ? "#f68b1e" : "transparent",
          color: lang === "hi" ? "#fff" : "#fff",
          padding: "6px 10px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
        }}
      >
        हिन्दी
      </button>
    </div>
  );
}
