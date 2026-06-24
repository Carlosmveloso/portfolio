import { Sun, Menu, Moon, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";

function Header() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Ínicio", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiências", href: "#experiences" },
    { label: "Contato", href: "#contact" },
  ];
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-4 text-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between glass rounded-2xl p-4 shadow-elegant">
            <h1 className="font-head font-bold text-lg tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent mr-1">
                Carlos
              </span>
              <span>Eduardo</span>
            </h1>
            <div className="flex gap-5">
              <button
                type="button"
                aria-label={
                  isLight ? "Ativar tema escuro" : "Ativar tema claro"
                }
                onClick={() => setIsLight((current) => !current)}
              >
                {isLight ? (
                  <Moon size={18} className="text-current/60" />
                ) : (
                  <Sun size={18} className="text-current/60" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          <div className="mt-2 shadow-elegant">
            {isMenuOpen && (
              <nav className="glass rounded-2xl p-4 text-muted-foreground text-sm animate-fade-up">
                <ul className="flex flex-col gap-3" id="mobile-menu">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} onClick={() => setIsMenuOpen(false)} className="block w-full rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-muted-secundary hover:text-foreground">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-5 pt-5">
                  <button className="flex items-center gap-2 font-semibold">
                    <Languages size={16} />
                    English
                  </button>
                  <button className="font-semibold bg-gradient-primary text-background py-2 rounded-2xl">Entrar em contato</button>
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
