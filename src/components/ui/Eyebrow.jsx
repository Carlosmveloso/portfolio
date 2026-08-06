function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
      {children}
    </span>
  );
}

export default Eyebrow;
