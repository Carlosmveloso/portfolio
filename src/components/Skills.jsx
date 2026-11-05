import { skills } from "../data/skills";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import SectionHeading from "./ui/SectionHeading";

function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {skills.map(({ id, items, learning }) => (
            <div key={id} className="border-t-2 border-linha pt-5">
              <h3 className="text-2xl">{t.skills.categories[id]}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className={`etiqueta ${learning ? "text-texto-suave" : ""}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
