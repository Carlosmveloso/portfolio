import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { clothing, farol, upcomingProjects } from "../data/projects";
import { GithubIcon } from "./icons/BrandIcons";
import { useLanguage } from "../hooks/useLanguage";
import CaseStudy from "./CaseStudy";
import SectionHeading from "./ui/SectionHeading";

function TechList({ items }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((tech) => (
        <li key={tech} className="etiqueta">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  const { t } = useLanguage();

  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(
    () => window.location.hash === "#estudo-farol",
  );
  const caseStudyRef = useRef(null);
  const caseStudyButtonRef = useRef(null);

  useEffect(() => {
    if (!isCaseStudyOpen) return;
    caseStudyRef.current?.focus({ preventScroll: true });
    caseStudyRef.current?.scrollIntoView();
  }, [isCaseStudyOpen]);

  function closeCaseStudy() {
    setIsCaseStudyOpen(false);
    caseStudyButtonRef.current?.focus();
  }

  return (
    <section id="projetos" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <article className="cartao grid gap-8 overflow-hidden p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:p-10 md:pr-0">
          <div>
            <h3 className="text-3xl md:text-4xl">{t.projects.farol.title}</h3>
            <p className="mt-4 max-w-xl text-texto-suave">{t.projects.farol.description}</p>
            <TechList items={farol.technologies} />
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={farol.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="botao botao-principal"
              >
                {t.projects.viewSite} <ExternalLink size={18} aria-hidden="true" />
              </a>
              <button
                ref={caseStudyButtonRef}
                type="button"
                onClick={() => setIsCaseStudyOpen((current) => !current)}
                aria-expanded={isCaseStudyOpen}
                aria-controls="estudo-farol"
                className="botao botao-secundario"
              >
                {t.projects.caseStudy}
              </button>
            </div>
          </div>

          <div className="-mr-20 w-64 justify-self-end rounded-[44px] border-[10px] border-linha bg-fundo md:-mr-16 md:w-72 lg:w-80">
            <img
              src={farol.mockup}
              alt={t.projects.farol.mockupAlt}
              width="390"
              height="844"
              loading="lazy"
              className="aspect-[390/844] w-full rounded-[34px] object-cover object-top"
            />
          </div>
        </article>

        <CaseStudy
          content={t.projects.caseStudyContent}
          closeLabel={t.projects.closeCaseStudy}
          isOpen={isCaseStudyOpen}
          panelRef={caseStudyRef}
          onClose={closeCaseStudy}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <article className="cartao overflow-hidden">
            <img
              src={clothing.image}
              alt={t.projects.clothing.imageAlt}
              width="1200"
              height="584"
              loading="lazy"
              className="aspect-[1200/584] w-full object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-2xl">{t.projects.clothing.title}</h3>
              <p className="mt-3 text-texto-suave">{t.projects.clothing.description}</p>
              <TechList items={clothing.technologies} />
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={clothing.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="botao botao-principal"
                >
                  {t.projects.viewSite} <ExternalLink size={18} aria-hidden="true" />
                </a>
                <a
                  href={clothing.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="botao botao-secundario"
                >
                  <GithubIcon size={18} aria-hidden="true" /> {t.projects.code}
                </a>
              </div>
            </div>
          </article>

          <div>
            <h3 className="text-2xl">{t.projects.upcomingTitle}</h3>
            <ul className="mt-4 grid gap-4">
              {upcomingProjects.map((id) => (
                <li key={id} className="cartao p-5">
                  <span className="etiqueta">{t.projects.upcomingTag}</span>
                  <h4 className="mt-3 text-xl">{t.projects.upcoming[id].title}</h4>
                  <p className="mt-1 text-texto-suave">{t.projects.upcoming[id].description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
