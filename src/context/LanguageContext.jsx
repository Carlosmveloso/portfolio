import { useEffect, useState } from "react";

import { LanguageContext } from "./languageContext";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") === "en" ? "en" : "pt";
  });

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("language", language);
  }, [language]);

  function toggleLanguage() {
    setLanguage((current) => (current === "pt" ? "en" : "pt"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
