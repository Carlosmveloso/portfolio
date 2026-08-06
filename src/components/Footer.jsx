import { Mail } from "lucide-react";

import { profile } from "../data/profile";
import { navigation } from "../data/navigation";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons/BrandIcons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const socialLinks = [
  { icon: GithubIcon, href: navigation.github, label: "GitHub" },
  { icon: LinkedinIcon, href: navigation.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: navigation.instagram, label: "Instagram" },
  { icon: Mail, href: `mailto:${navigation.email}`, label: "Email" },
];

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.experience, id: "experiences" },
    { label: t.nav.contact, id: "contact" },
  ];

  function goToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <h3 className="font-head text-lg font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Carlos
            </span>{" "}
            <span className="text-foreground">Eduardo</span>
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <nav>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground md:items-start">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goToSection(link.id)}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-all hover:border-transparent hover:bg-gradient-primary"
            >
              <Icon
                size={16}
                className="text-muted-foreground transition-colors group-hover:text-primary-foreground"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>
          © {year} {profile.name}. {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
