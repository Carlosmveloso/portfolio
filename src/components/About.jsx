import { MapPin, Briefcase, GraduationCap, Send } from "lucide-react";

import { profile } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const infoCards = [
    { icon: MapPin, label: t.about.locationLabel, value: t.profile.location },
    { icon: Briefcase, label: t.about.areaLabel, value: t.profile.area },
    { icon: GraduationCap, label: t.about.levelLabel, value: t.profile.level },
    { icon: Send, label: t.about.availabilityLabel, value: t.profile.availability },
  ];

  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.about.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-lg text-balance text-muted-foreground">
              {t.profile.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted-secundary px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl glass p-5 shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
