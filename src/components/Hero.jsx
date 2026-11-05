import { ArrowRight } from "lucide-react";

import { navigation } from "../data/navigation";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";
import Titulo from "./ui/Titulo";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="inicio" className="flex items-center md:min-h-[calc(100svh-4.5rem)]">
      <div className="conteudo py-16 md:py-20">
        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        <Titulo as="h1" texto={t.hero.title} className="titulo-topo mt-5 max-w-5xl" />
        <p className="mt-6 max-w-2xl text-lg text-texto-suave">{t.hero.support}</p>
        <p className="etiqueta-status mt-7">{t.hero.status}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projetos" className="botao botao-principal">
            {t.hero.ctaProjects} <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href={navigation.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="botao botao-secundario"
          >
            {t.hero.ctaWhatsapp}
          </a>
        </div>

        <p className="mt-6">
          <a href="/curriculo-carlos-eduardo.pdf" download className="link-texto">
            {t.hero.ctaResume}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;
