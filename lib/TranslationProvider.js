// lib/TranslationProvider.js (client)
'use client';
import React, { createContext, useContext } from 'react';

const TranslationContext = createContext({ locale: 'en', messages: {} });

export default function TranslationProvider({ locale, messages, children }) {
  return (
    <TranslationContext.Provider value={{ locale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(TranslationContext);
  return function t(path, defaultValue = '') {
    if (!ctx) return defaultValue;
    const parts = path.split('.');
    let v = ctx.messages;
    for (const p of parts) {
      v = v?.[p];
      if (v === undefined) return defaultValue || path;
    }
    return v;
  };
}