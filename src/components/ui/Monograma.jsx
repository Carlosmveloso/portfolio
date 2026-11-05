function Monograma({ className = "" }) {
  return (
    <span role="img" aria-label="Carlos Eduardo" className={`monograma ${className}`}>
      <span className="font-titulo font-semibold text-texto">C</span>
      <span className="font-mono font-bold text-laranja">E</span>
      <span className="monograma-cursor" />
    </span>
  );
}

export default Monograma;
