import { Sun, Menu, Moon, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const sectionIds = ["home", "about", "skills", "projects", "experiences", "contact"];

function Header() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
      const scrollPosition = window.scrollY + 120;
      for (const id of [...sectionIds].reverse()) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToSection(id) {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const menuItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experiences", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-foreground transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between glass rounded-2xl p-4 shadow-elegant">
            <h1
              onClick={() => goToSection("home")}
              className="cursor-pointer font-head font-bold text-lg tracking-tight"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent mr-1">
                Carlos
              </span>
              <span>Eduardo</span>
            </h1>

            <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`relative rounded-lg px-3 py-2 transition-colors ${
                    activeSection === item.id
                      ? "font-semibold text-foreground"
                      : "hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={
                  language === "pt" ? "Switch to English" : "Mudar para Português"
                }
                onClick={toggleLanguage}
                className="hidden md:flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted-secundary hover:text-foreground"
              >
                <Languages size={14} />
                {t.nav.languageSwitchShort}
              </button>
              <button
                type="button"
                aria-label={
                  isLight ? "Ativar tema escuro" : "Ativar tema claro"
                }
                onClick={() => setIsLight((current) => !current)}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted-secundary hover:text-foreground"
              >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
              >
                {t.nav.contactCta}
              </button>
              <button
                className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted-secundary lg:hidden"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          <div className="mt-2 shadow-elegant lg:hidden">
            {isMenuOpen && (
              <nav className="glass rounded-2xl p-4 text-muted-foreground text-sm animate-fade-up">
                <ul className="flex flex-col gap-1" id="mobile-menu">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => goToSection(item.id)}
                        className={`block w-full rounded-lg px-3 py-2 text-left font-semibold transition-colors ${
                          activeSection === item.id
                            ? "bg-muted-secundary text-foreground"
                            : "hover:bg-muted-secundary hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-5 pt-5">
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Languages size={16} />
                    {t.nav.languageSwitchLong}
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSection("contact")}
                    className="text-center font-semibold bg-gradient-primary text-background py-2 rounded-2xl transition-opacity hover:opacity-90"
                  >
                    {t.nav.contactCta}
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
