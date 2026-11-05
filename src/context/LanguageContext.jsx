import { useEffect, useState } from "react";

import en from "../i18n/en";
import pt from "../i18n/pt";
import { LanguageContext } from "./languageContext";

const STORAGE_KEY = "language";
const translations = { pt, en };

function readSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Navegador bloqueou o armazenamento: a escolha vale só nesta visita.
  }
}

function getInitialLanguage() {
  const saved = readSavedLanguage();
  if (saved === "pt" || saved === "en") return saved;

  // Robôs de busca renderizam em inglês; o site deve ser indexado em português.
  if (/bot|crawler|spider/i.test(navigator.userAgent)) return "pt";

  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [language, t]);

  function toggleLanguage() {
    const next = language === "pt" ? "en" : "pt";
    setLanguage(next);
    saveLanguage(next);
  }

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
