import { features } from "../data/features";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

function Differentiators() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="differentiators" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.differentiators.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.differentiators.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.differentiators.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, icon: Icon }) => {
            const content = t.differentiators.items[id];
            return (
              <div
                key={id}
                className="group relative overflow-hidden rounded-2xl glass p-6 shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-head text-base font-bold text-foreground">
                    {content.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {content.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
