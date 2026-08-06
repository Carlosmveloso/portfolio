import { timelineItems } from "../data/timeline";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experiences" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.experience.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.experience.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.experience.headingHighlight}
            </span>
          </h2>
        </div>

        <ol className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-primary opacity-40 md:left-1/2" />
          <div className="space-y-10">
            {timelineItems.map((id, index) => {
              const item = t.experience.items[id];
              const isEven = index % 2 === 0;
              return (
                <li
                  key={id}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isEven ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-head text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="absolute top-1.5 left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background md:left-1/2" />
                </li>
              );
            })}
          </div>
        </ol>
      </div>
    </section>
  );
}

export default Experience;
