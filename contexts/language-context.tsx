"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function StatefulLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("zh");

  const t = useCallback(
    (zh: string, en: string) => (lang === "zh" ? zh : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const parentContext = useContext(LanguageContext);

  if (parentContext) {
    return <>{children}</>;
  }

  return <StatefulLanguageProvider>{children}</StatefulLanguageProvider>;
}

export function FixedLanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  const t = useCallback(
    (zh: string, en: string) => (lang === "zh" ? zh : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
