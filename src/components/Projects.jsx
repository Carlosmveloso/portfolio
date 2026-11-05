import { ExternalLink } from "lucide-react";

import { projects } from "../data/projects";
import { GithubIcon } from "./icons/BrandIcons";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import SectionHeading from "./ui/SectionHeading";

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projetos" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const content = t.projects.items[project.id];
            return (
              <article key={project.id} className="cartao overflow-hidden">
                <img
                  src={project.image}
                  alt={content.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl">{content.title}</h3>
                  <p className="mt-3 text-texto-suave">{content.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="etiqueta">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="botao botao-principal"
                    >
                      {t.projects.viewProject} <ExternalLink size={18} aria-hidden="true" />
                    </a>
                    {project.caseStudyUrl ? (
                      <a href={project.caseStudyUrl} className="botao botao-secundario">
                        {t.projects.caseStudy}
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="botao botao-secundario"
                      >
                        <GithubIcon size={18} aria-hidden="true" /> {t.projects.code}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
