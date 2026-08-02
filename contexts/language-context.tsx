"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
  isDefaultContext?: boolean;
}

const defaultContext: LanguageContextType = {
  lang: "zh",
  setLang: () => {},
  t: (zh) => zh,
  isDefaultContext: true,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

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

  if (!parentContext.isDefaultContext) {
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
  return useContext(LanguageContext);
}
