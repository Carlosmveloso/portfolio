import { farol } from "../data/projects";

function CaseStudy({ content, closeLabel, isOpen, panelRef, onClose }) {
  // Um print só de celular aparece inteiro; com vários, a galeria vira grade.
  const isSingleImage = farol.gallery.length === 1;

  return (
    <section
      id="estudo-farol"
      ref={panelRef}
      tabIndex={-1}
      hidden={!isOpen}
      aria-labelledby="estudo-farol-titulo"
      className="mt-6 rounded-md border-2 border-linha p-6 outline-none md:p-10"
    >
      <h3 id="estudo-farol-titulo" className="text-3xl md:text-4xl">
        {content.title}
      </h3>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-x-12">
        <div>
          <h4 className="text-xl">{content.problemTitle}</h4>
          <p className="mt-2 text-texto-suave">{content.problem}</p>
        </div>
        <div>
          <h4 className="text-xl">{content.solutionTitle}</h4>
          <p className="mt-2 text-texto-suave">{content.solution}</p>
        </div>
        <div>
          <h4 className="text-xl">{content.builtTitle}</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-texto-suave marker:text-laranja">
            {content.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl">{content.resultTitle}</h4>
            <p className="mt-2 text-texto-suave">{content.result}</p>
          </div>
          <div>
            <h4 className="text-xl">{content.stackTitle}</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {content.stack.map((tech) => (
                <li key={tech} className="etiqueta">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h4 className="mt-10 text-xl">{content.galleryTitle}</h4>
      <ul
        className={
          isSingleImage ? "mt-4 max-w-64" : "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {farol.gallery.map((name) => (
          <li key={name}>
            <img
              src={`/projetos/farol/${name}.webp`}
              alt={content.gallery[name]}
              width={isSingleImage ? 390 : 1200}
              height={isSingleImage ? 844 : 900}
              loading="lazy"
              className={`w-full rounded-md object-cover object-top ${
                isSingleImage ? "aspect-[390/844]" : "aspect-[4/3]"
              }`}
            />
          </li>
        ))}
      </ul>

      <button type="button" onClick={onClose} className="botao botao-secundario mt-8">
        {closeLabel}
      </button>
    </section>
  );
}

export default CaseStudy;
