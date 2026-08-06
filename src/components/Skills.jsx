import { skills } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.skills.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.skills.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.skills.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ id, icon: Icon, items }) => (
            <div
              key={id}
              className="rounded-3xl glass p-6 shadow-elegant transition-shadow hover:shadow-glow"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-head text-base font-semibold text-foreground">
                  {t.skills.categories[id]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="group relative cursor-default rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-transparent"
                  >
                    <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="relative text-foreground transition-colors group-hover:text-primary-foreground">
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
