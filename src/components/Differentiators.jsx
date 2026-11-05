import { features } from "../data/features";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import SectionHeading from "./ui/SectionHeading";

function Differentiators() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="diferenciais" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.differentiators.eyebrow} title={t.differentiators.title} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((id) => {
            const content = t.differentiators.items[id];
            return (
              <div key={id} className="cartao p-6">
                <h3 className="text-xl">{content.title}</h3>
                <p className="mt-3 text-texto-suave">{content.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
