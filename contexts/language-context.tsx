"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function RootLanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Language;
}) {
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-SG" : "en-SG";
  }, [lang]);

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

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const parentContext = useContext(LanguageContext);

  if (parentContext) {
    return <>{children}</>;
  }

  return (
    <RootLanguageProvider initialLang={initialLang}>
      {children}
    </RootLanguageProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
