import { timelineItems } from "../data/timeline";
import { useLanguage } from "../hooks/useLanguage";
import SectionHeading from "./ui/SectionHeading";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="trajetoria" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <ol className="max-w-4xl">
          {timelineItems.map((id) => {
            const item = t.experience.items[id];
            return (
              <li
                key={id}
                className="grid gap-1 border-t-2 border-linha py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <span className="font-bold text-laranja">{item.date}</span>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
