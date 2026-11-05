import Eyebrow from "./Eyebrow";
import Titulo from "./Titulo";

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10 md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Titulo texto={title} className="titulo-secao mt-4" />
    </div>
  );
}

export default SectionHeading;
