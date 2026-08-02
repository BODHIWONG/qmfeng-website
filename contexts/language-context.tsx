"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const parentContext = useContext(LanguageContext);
  const [localLang, setLocalLang] = useState<Language>(initialLang);

  const localTranslate = useCallback(
    (zh: string, en: string) => (localLang === "zh" ? zh : en),
    [localLang]
  );

  const localValue = useMemo<LanguageContextType>(
    () => ({ lang: localLang, setLang: setLocalLang, t: localTranslate }),
    [localLang, localTranslate]
  );

  return (
    <LanguageContext.Provider value={parentContext ?? localValue}>
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
