import Destaque from "./Destaque";

// O texto marca a palavra de destaque entre *asteriscos*.
function Titulo({ as: Tag = "h2", texto, className }) {
  return (
    <Tag className={className}>
      {texto
        .split("*")
        .map((parte, index) =>
          index % 2 === 1 ? <Destaque key={parte}>{parte}</Destaque> : parte,
        )}
    </Tag>
  );
}

export default Titulo;
