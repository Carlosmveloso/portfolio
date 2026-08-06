import { ArrowRight, Download, Mail } from "lucide-react";

import { profile } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import resumeFile from "../assets/files/Currículo - Carlos Eduardo 2026.pdf";
import profilePhoto from "../assets/images/profile.jpeg";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  function goToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-background bg-gradient-hero text-foreground"
      >
        <section>
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute top-20 -right-20 h-96 w-96 rounded-full bg-purple opacity-20 blur-3xl animate-blob [animation-delay:-6s]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 rounded-full w-80 h-80 bg-cyan opacity-[0.15] blur-3xl animate-blob [animation-delay:-12s]" />
        </section>
        <section className="mx-auto grid max-w-6xl gap-16 px-5 pt-32 pb-20 lg:grid-cols-2 lg:items-center">
          <section className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass mb-6 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex w-full h-full bg-cyan animate-ping rounded-full opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan"></span>
              </span>
              <p>{t.hero.badge}</p>
            </div>
            <h1 className="flex flex-col gap-3 font-head font-bold tracking-tight text-5xl text-balance text-foreground">
              <span>{profile.name}</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t.profile.role}
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg text-balance">
              {t.hero.tagline}
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80">
              {t.profile.bio}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => goToSection("projects")}
                className="group flex gap-2 items-center px-5 py-3 bg-gradient-primary rounded-xl text-sm text-primary-foreground font-semibold shadow-glow transition-opacity hover:opacity-90"
              >
                {t.hero.ctaProjects}{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <a
                className="flex gap-2 items-center px-5 py-3 text-sm font-semibold border border-border bg-card rounded-xl transition-colors hover:bg-muted-secundary"
                href={resumeFile}
                download="Curriculo - Carlos Eduardo.pdf"
              >
                <Download size={16} /> {t.hero.ctaResume}
              </a>
              <button
                onClick={() => goToSection("contact")}
                className="flex gap-2 items-center px-5 py-3 text-sm font-semibold glass rounded-xl transition-colors hover:bg-muted-secundary"
              >
                <Mail size={16} /> {t.hero.ctaContact}
              </button>
            </div>
          </section>

          <section
            className="relative mx-auto w-full max-w-sm animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-40 blur-2xl animate-float" />
            <div className="glass relative aspect-square w-full overflow-hidden rounded-3xl shadow-elegant animate-float">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="glass absolute -right-4 -bottom-4 rounded-2xl px-4 py-3 text-left shadow-elegant">
              <p className="text-xs text-muted-foreground">{t.hero.stackLabel}</p>
              <p className="text-sm font-semibold text-foreground">
                {profile.stack.join(" · ")}
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Hero;
