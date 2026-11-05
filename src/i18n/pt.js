const pt = {
  meta: {
    title: "Carlos Eduardo — Desenvolvedor Front-end",
    description:
      "Desenvolvedor front-end em João Pessoa. Sites e plataformas em React para negócios locais. Criador do Farol Pitimbu.",
  },
  nav: {
    skip: "Pular para o conteúdo",
    home: "Início",
    about: "Sobre",
    skills: "Skills",
    projects: "Projetos",
    experience: "Trajetória",
    contact: "Contato",
    menuLabel: "Menu principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    languageSwitch: "Switch to English",
  },
  hero: {
    eyebrow: "// DESENVOLVEDOR FRONT-END",
    title: "Sites e plataformas em React para *negócios locais*.",
    support:
      "Criei e mantenho o Farol Pitimbu, plataforma com 97 negócios do litoral sul da Paraíba.",
    status: "Disponível para vagas remotas e projetos",
    ctaProjects: "Ver projetos",
    ctaWhatsapp: "Falar no WhatsApp",
    ctaResume: "Baixar currículo",
  },
  about: {
    eyebrow: "// SOBRE",
    title: "Quem está por trás do *código*.",
    paragraphs: [
      "Sou desenvolvedor front-end em João Pessoa. Trabalho com React, JavaScript e Tailwind CSS, com Supabase no back-end. Criei o Farol Pitimbu do zero e sigo evoluindo a plataforma com novas funções.",
      "Sou formado em Análise e Desenvolvimento de Sistemas e Técnico em Programação Web (Senac), e curso Engenharia de Software. Busco vaga júnior remota e atendo negócios que precisam de um site que traga clientes.",
    ],
    photoAlt: "Foto em preto e branco de Carlos Eduardo",
    cards: [
      { label: "Localização", value: "João Pessoa, PB · Remoto" },
      { label: "Área", value: "Front-end" },
      { label: "Nível", value: "Júnior" },
      { label: "Disponibilidade", value: "Emprego, freelance e projetos" },
    ],
  },
  skills: {
    eyebrow: "// SKILLS",
    title: "O que eu uso para *entregar*.",
    groups: {
      frontend: {
        title: "Front-end",
        items: ["React", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS", "React Router", "Vite"],
      },
      backend: {
        title: "Back-end e dados",
        items: ["Supabase (Auth, Storage, PostgreSQL)", "Node.js (básico)"],
      },
      quality: {
        title: "Qualidade",
        items: ["SEO técnico", "Acessibilidade", "Performance", "Design responsivo"],
      },
      tools: {
        title: "Ferramentas",
        items: ["Git e GitHub", "Vercel", "Figma", "Leaflet"],
      },
      ai: {
        title: "IA no fluxo",
        items: ["Claude", "ChatGPT", "Codex"],
      },
      learning: {
        title: "Em evolução",
        items: ["TypeScript", "Next.js", "Python"],
      },
    },
  },
  projects: {
    eyebrow: "// PROJETOS",
    title: "Projetos no *ar*.",
    viewSite: "Ver site",
    code: "Código",
    caseStudy: "Estudo de caso",
    closeCaseStudy: "Fechar estudo de caso",
    farol: {
      title: "Farol Pitimbu",
      description:
        "Guia digital do litoral sul da Paraíba. Reúne 97 negócios entre gastronomia, hospedagem, passeios e serviços, com cupons, mapa e painel para o dono do negócio. Primeira cidade do NortCity, que vai levar o modelo a outras cidades.",
      mockupAlt: "Página inicial do Farol Pitimbu aberta em um celular",
    },
    clothing: {
      title: "Clothing",
      // CONFIRMAR: acrescentar ao texto "Minha parte: <sua parte no projeto>."
      description: "Loja virtual feita em equipe na formação do Senac.",
      imageAlt: "Página inicial da loja virtual Clothing",
    },
    upcomingTitle: "Em breve",
    upcomingTag: "Em desenvolvimento",
    upcoming: {
      cardoni: { title: "Cardoni", description: "Site para barbearia." },
      "vittorio-motori": { title: "Vittorio Motori", description: "Projeto da faculdade." },
    },
    caseStudyContent: {
      title: "Estudo de caso: Farol Pitimbu",
      problemTitle: "Problema",
      problem:
        "Os negócios de Pitimbu (PB) tinham pouca presença on-line e o turista não achava as opções da cidade em um só lugar.",
      solutionTitle: "Solução",
      solution:
        "Uma plataforma que reúne tudo e leva o visitante ao WhatsApp do negócio com um clique.",
      builtTitle: "O que construí",
      built: [
        "Cadastro e login",
        "Painel do dono do negócio",
        "Painel administrativo com analytics próprio de visitas e cliques",
        "Ofertas e cupons com validação por QR code",
        "Mapa interativo (Leaflet + OpenStreetMap)",
        "Busca por categoria e favoritos",
        "SEO técnico, com sitemap de mais de 120 URLs",
      ],
      resultTitle: "Resultado",
      result: "97 negócios cadastrados, no ar desde maio de 2025 e em evolução contínua.",
      stackTitle: "Stack",
      stack: [
        "React",
        "React Router",
        "Vite",
        "Tailwind CSS v4",
        "Supabase (PostgreSQL, Auth, Storage, funções)",
        "Vercel",
      ],
      galleryTitle: "Galeria",
      gallery: {
        home: "Página inicial do Farol Pitimbu, com a busca e as categorias de negócios",
        mapa: "Mapa interativo do Farol Pitimbu com os negócios marcados na cidade",
        negocio: "Página de um negócio no Farol Pitimbu, com informações e botão de WhatsApp",
        cupom: "Cupom de oferta do Farol Pitimbu com QR code para validação",
        admin: "Painel administrativo do Farol Pitimbu com dados fictícios de visitas e cliques",
      },
    },
  },
  experience: {
    eyebrow: "// TRAJETÓRIA",
    title: "Minha *jornada*.",
    items: {
      "engenharia-software": {
        date: "2026",
        // CONFIRMAR: acrescentar ao texto ": <projeto atual>"
        text: "Engenharia de Software (Unipê) e volta à Fábrica de Software",
      },
      "tecnico-conclusao": {
        date: "mai/2026",
        text: "Conclusão do Técnico em Programação Web (Senac)",
      },
      hackathon: {
        date: "nov/2025",
        text: "Hackathon Devs de Impacto (iMasters)",
      },
      "tecnico-inicio": {
        date: "ago/2025",
        text: "Início do Técnico em Programação Web (Senac)",
      },
      farol: {
        date: "mai/2025",
        text: "Criação do Farol Pitimbu",
      },
      "ads-conclusao": {
        date: "dez/2024",
        text: "Conclusão de Análise e Desenvolvimento de Sistemas (Unipê)",
      },
      "fabrica-software": {
        date: "ago/2023",
        text: "Fábrica de Software da Unipê: front-end do projeto Ponto de Coleta",
      },
      "ads-inicio": {
        // CONFIRMAR: jan/2023 ou 2022 (mantido o valor que já estava no site)
        date: "2022",
        text: "Início de Análise e Desenvolvimento de Sistemas (Unipê)",
      },
    },
  },
  differentiators: {
    eyebrow: "// DIFERENCIAIS",
    title: "Por que trabalhar *comigo*.",
    items: {
      producao: {
        title: "Projeto real em produção",
        description: "Farol Pitimbu no ar desde 2025, com 97 negócios.",
      },
      "front-back": {
        title: "Front e back",
        description: "Interface em React e dados no Supabase.",
      },
      seo: {
        title: "SEO e performance",
        description: "Páginas prontas para o Google e carregamento rápido.",
      },
      negocio: {
        title: "Falo com o dono do negócio",
        description: "Transformo a necessidade do comerciante em tela funcional.",
      },
    },
  },
  contact: {
    eyebrow: "// CONTATO",
    title: "Vamos *conversar*.",
    subtitle: "Disponível para vagas remotas (Brasil e exterior), freelance e projetos.",
    emailLabel: "E-mail",
    formName: "Nome",
    formNamePlaceholder: "Seu nome",
    formEmail: "E-mail",
    formEmailPlaceholder: "seu@email.com",
    formMessage: "Mensagem",
    formMessagePlaceholder: "Como posso ajudar?",
    submit: "Enviar mensagem",
    sending: "Enviando...",
    newTab: "abre em nova aba",
    successMessage: "Mensagem enviada com sucesso! Vou retornar em breve.",
    errorMessage: "Erro ao enviar mensagem. Tente novamente mais tarde.",
  },
  footer: {
    tagline: "Desenvolvedor Front-end · João Pessoa, PB",
    copyright: "© 2026 Carlos Eduardo",
  },
};

export default pt;
