"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export function LangProvider({ initialLang = "en", dict = {}, children }) {
  const [lang, setLang] = useState(initialLang);
  const [t, setT] = useState(dict);

  useEffect(() => {
    setT(dict);
  }, [dict]);

  const switchLang = (newLang, newDict) => {
    setLang(newLang);
    setT(newDict);
  };

  return (
    <LangContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
