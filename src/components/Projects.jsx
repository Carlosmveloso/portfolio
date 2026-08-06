import { ExternalLink } from "lucide-react";

import { projects } from "../data/projects";
import { GithubIcon } from "./icons/BrandIcons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.projects.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.projects.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.projects.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const content = t.projects.items[project.id];
            return (
              <div
                key={project.id}
                className="group overflow-hidden rounded-3xl glass shadow-elegant transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="aspect-video overflow-hidden bg-muted-secundary">
                  <img
                    src={project.image}
                    alt={content.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {content.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {content.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted-secundary px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
                    >
                      {t.projects.viewProject} <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted-secundary"
                    >
                      <GithubIcon size={14} /> {t.projects.code}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
