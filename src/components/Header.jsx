import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "../hooks/useLanguage";
import Monograma from "./ui/Monograma";

const sectionIds = ["inicio", "sobre", "skills", "projetos", "trajetoria", "contato"];

function Header() {
  const { language, t, toggleLanguage } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    function handleScroll() {
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

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const menuItems = [
    { id: "inicio", label: t.nav.home },
    { id: "sobre", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projetos", label: t.nav.projects },
    { id: "trajetoria", label: t.nav.experience },
    { id: "contato", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-linha bg-fundo">
      <div className="conteudo flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label={t.nav.home} className="inline-flex p-1">
          <Monograma className="text-3xl" />
        </a>

        <nav aria-label={t.nav.menuLabel} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={`border-b-2 py-1 transition-colors hover:text-texto ${
                    activeSection === item.id
                      ? "border-laranja text-texto"
                      : "border-transparent text-texto-suave"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.nav.languageSwitch}
            className="min-h-11 px-2 text-sm text-texto-suave"
          >
            <span className={language === "pt" ? "font-bold text-laranja" : ""}>PT</span>
            {" / "}
            <span className={language === "en" ? "font-bold text-laranja" : ""}>EN</span>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-celular"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="flex size-11 items-center justify-center text-texto lg:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="menu-celular"
        aria-label={t.nav.menuLabel}
        hidden={!isMenuOpen}
        className="absolute inset-x-0 top-full border-b-2 border-linha bg-fundo lg:hidden"
      >
        <ul className="conteudo py-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={`block py-3 ${
                  activeSection === item.id ? "text-laranja" : "text-texto"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
