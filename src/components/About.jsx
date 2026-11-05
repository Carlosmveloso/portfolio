import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import SectionHeading from "./ui/SectionHeading";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sobre" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:items-start">
          <div className="max-w-2xl space-y-5 text-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="relative mr-6 mb-6 max-w-sm">
            <div aria-hidden="true" className="absolute inset-0 translate-x-6 translate-y-6 bg-laranja" />
            <img
              src="/foto-carlos.webp"
              alt={t.about.photoAlt}
              width="640"
              height="640"
              loading="lazy"
              className="relative h-auto w-full object-cover grayscale"
            />
          </div>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.cards.map(({ label, value }) => (
            <div key={label} className="cartao p-5">
              <dt className="text-sm text-texto-suave">{label}</dt>
              <dd className="mt-1 font-bold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
