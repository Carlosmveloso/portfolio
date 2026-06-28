import { ArrowRight, Download, Mail } from "lucide-react";

import { profile } from "../data/profile";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-background bg-gradient-hero text-foreground"
      >
        <section>
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute top-20 -right-20 h-96 w-96 rounded-full bg-purple opacity-20 blur-3xl animate-blob [animation-delay:-6s]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 rounded-full w-80 h-80 bg-cyan opacity-[0.15] blur-3xl animate-blob [animation-delay:-12s]" />
        </section>
        <section className="pt-32 pb-20 px-5">
          <div className="inline-flex items-center gap-2 rounded-full glass mb-6 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex w-full h-full bg-cyan animate-ping rounded-full opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan"></span>
            </span>
            <p>Disponível para novas oportunidades</p>
          </div>
          <section>
            <h1 className="flex flex-col gap-3 font-head font-bold tracking-tight text-5xl text-balance text-foreground">
              <span>{profile.name}</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg text-balance">
              Transformando ideia em experiências digitais modernas e
              responsivas.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button className="flex gap-2 items-center px-5 py-3 bg-gradient-primary rounded-xl text-sm text-primary-foreground font-semibold shadow-glow">
                Ver projetos <ArrowRight size={16} />
              </button>
              <a
                className="flex gap-2 items-center px-5 py-3 text-sm font-semibold border border-border bg-card rounded-xl"
                href=""
              >
                <Download size={16} /> Baixar currículo
              </a>
              <button className="flex gap-2 items-center px-5 py-3 text-sm font-semibold border border-border bg-card rounded-xl">
                <Mail size={16}/> Entrar em contato
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Hero;
