function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-background bg-gradient-hero text-foreground">
        <section>
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute top-20 -right-20 h-96 w-96 rounded-full bg-purple opacity-20 blur-3xl animate-blob [animation-delay:-6s]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 rounded-full w-80 h-80 bg-cyan opacity-[0.15] blur-3xl animate-blob [animation-delay:-12s]" />
        </section>
      </section>
    </>
  );
}

export default Hero;
