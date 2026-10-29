const PROFILE = {
  email: "luizagit2025@gmail.com",
  github: "https://github.com/Izadev21"
};

const repo = (name) => `${PROFILE.github}/${name}`;

const covers = {
  tarefas: `
    <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="440" fill="#F3DCE0"/>
      <circle cx="520" cy="80" r="120" fill="#E9BFC8"/>
      <g transform="translate(220 30)">
        <rect width="200" height="400" rx="34" fill="#2B1720"/>
        <rect x="10" y="10" width="180" height="380" rx="26" fill="#FBF5F2"/>
        <text x="28" y="66" font-family="Georgia, serif" font-style="italic" font-size="24" fill="#8C2F45">Tarefas</text>
        <g font-family="Manrope, sans-serif" font-size="12" fill="#2B1720">
          <rect x="24" y="88" width="152" height="46" rx="12" fill="#fff" stroke="#EBD6DA"/>
          <circle cx="44" cy="111" r="8" fill="#8C2F45"/><path d="M40 111l3 3 5-6" stroke="#fff" stroke-width="2" fill="none"/>
          <rect x="60" y="106" width="80" height="8" rx="4" fill="#D9B8C0"/>
          <rect x="24" y="144" width="152" height="46" rx="12" fill="#fff" stroke="#EBD6DA"/>
          <circle cx="44" cy="167" r="8" fill="none" stroke="#8C2F45" stroke-width="2"/>
          <rect x="60" y="162" width="96" height="8" rx="4" fill="#2B1720"/>
          <rect x="24" y="200" width="152" height="46" rx="12" fill="#fff" stroke="#EBD6DA"/>
          <circle cx="44" cy="223" r="8" fill="none" stroke="#8C2F45" stroke-width="2"/>
          <rect x="60" y="218" width="70" height="8" rx="4" fill="#2B1720"/>
          <rect x="24" y="318" width="152" height="44" rx="22" fill="#8C2F45"/>
          <text x="100" y="345" text-anchor="middle" fill="#fff" font-weight="700">+ Nova tarefa</text>
        </g>
      </g>
      <g font-family="IBM Plex Mono, monospace" font-size="15" fill="#8C2F45">
        <text x="36" y="80">GET /tasks</text>
        <text x="36" y="110">POST /tasks</text>
        <text x="36" y="140">PATCH /:id/toogle</text>
        <text x="460" y="400">.tsx</text>
      </g>
    </svg>`,
  java: `
    <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="440" fill="#2B1720"/>
      <g font-family="IBM Plex Mono, monospace" font-size="15">
        <g transform="translate(230 46)">
          <rect width="180" height="104" rx="12" fill="#FBF5F2"/>
          <rect width="180" height="34" rx="12" fill="#E59AAB"/>
          <rect y="22" width="180" height="12" fill="#E59AAB"/>
          <text x="90" y="23" text-anchor="middle" fill="#2B1720" font-style="italic">abstract Animal</text>
          <text x="14" y="62" fill="#2B1720">- habitat</text>
          <text x="14" y="86" fill="#2B1720">+ emitirSom()</text>
        </g>
        <path d="M320 150v44M190 194h260M190 194v40M450 194v40" stroke="#E59AAB" stroke-width="2.5" fill="none"/>
        <g transform="translate(110 234)"><rect width="160" height="60" rx="12" fill="#FBF5F2"/><text x="80" y="36" text-anchor="middle" fill="#2B1720">Dog</text></g>
        <g transform="translate(370 234)"><rect width="160" height="60" rx="12" fill="#FBF5F2"/><text x="80" y="36" text-anchor="middle" fill="#2B1720">Cat</text></g>
        <g fill="#E59AAB">
          <text x="70" y="352">enum FurColor</text>
          <text x="250" y="352">enum Habitat</text>
          <text x="420" y="352">enum TrainingLevel</text>
        </g>
        <text x="70" y="398" fill="#A88D97">@Override · super() · overload</text>
      </g>
    </svg>`
};

const projects = [
  {
    id: "integramente",
    title: "IntegraMente",
    category: "mobile",
    label: "Mobile · TCC",
    kicker: "App educacional · TEA",
    image: "assets/projetos/integramente.webp",
    alt: "Ícone do app IntegraMente, tela de abertura e tela inicial com o mascote Teo",
    bg: "#5B6CF0",
    short: "Aplicativo educacional para estudantes com TEA, com atividades interativas e recursos de acessibilidade. Projeto de conclusão de curso desenvolvido em equipe.",
    desc: "Aplicativo educacional desenvolvido como trabalho de conclusão do curso Técnico em Informática do Instituto Educacional Raphael Di Santo, voltado à prática escolar de estudantes com Transtorno do Espectro Autista (TEA). A versão atual está integrada ao servidor e foi verificada com um roteiro de 30 cenários; a avaliação pedagógica com estudantes é a próxima etapa.",
    features: [
      "Conteúdo organizado em matérias, tópicos e questões",
      "Quatro modalidades de atividade: pontos, formas no mapa, letras e grupos",
      "Tema claro e escuro, três tamanhos de fonte e dicas lidas em voz alta",
      "Retomada de questões, tela de resultado e edição de perfil",
      "Assistente de IA (Teo) para a área do adulto, com acesso aos dados apenas pelas regras da API via MCP"
    ],
    extra: { src: "assets/projetos/integramente-arquitetura.webp", alt: "Arquitetura do IntegraMente", caption: "Arquitetura do sistema · apresentação do TCC" },
    facts: [["Equipe", "6 integrantes"], ["Orientação", "Prof. Michael do Amaral Yansen"], ["Verificação", "Roteiro com 30 cenários"]],
    tags: ["React Native", "Expo", "TypeScript", "Spring Boot", "PostgreSQL", "Python"],
    links: []
  },
  {
    id: "mural",
    title: "Mural da Turma",
    category: "fullstack",
    label: "Full-stack",
    kicker: "Front-end React + API REST própria",
    image: "assets/projetos/mural.webp",
    alt: "Painel do Mural da Turma com a lista de usuários, edição de dados e desativação de conta",
    bg: "#1E1238",
    short: "Aplicação full-stack com cadastro, login por JWT, edição de perfil e desativação de conta, integrada a uma API própria publicada na Vercel.",
    desc: "Front-end em React (Vite) integrado à BackendDB, API REST que desenvolvi em Node.js, Express e MongoDB Atlas. A interface exibe um console de rede com cada requisição e seu status HTTP, o que deixa visível a comunicação entre front-end e back-end.",
    features: [
      "Cadastro e login com autenticação JWT e senhas criptografadas com bcrypt",
      "Listagem de usuários com filtro por nome ou e-mail",
      "Edição dos próprios dados (PUT) e desativação da conta com soft delete (DELETE)",
      "Recuperação de senha por e-mail com Nodemailer",
      "API publicada na Vercel com CORS configurado para o front-end"
    ],
    extra: { src: "assets/projetos/mural-login.webp", alt: "Tela de acesso do Mural da Turma", caption: "Tela de acesso com as abas Entrar e Criar conta" },
    facts: [["Front-end", "React + Vite"], ["Back-end", "Node.js, Express, MongoDB"], ["Deploy da API", "Vercel"]],
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    links: [
      { label: "Front-end", href: repo("front-luiza"), solid: true },
      { label: "API (BackendDB)", href: repo("BackendDB") }
    ]
  },
  {
    id: "ocorrencias",
    title: "Livro de Ocorrências",
    category: "web",
    label: "Web",
    kicker: "Sistema escolar · coordenação pedagógica",
    image: "assets/projetos/ocorrencias.webp",
    alt: "Painel do Livro de Ocorrências com contadores, motivos, filtros e a lista de registros",
    bg: "#1B2029",
    short: "Painel para a coordenação pedagógica registrar, filtrar e acompanhar ocorrências de alunos.",
    desc: "Sistema para a coordenação pedagógica registrar ocorrências de alunos: disciplinares, acadêmicas, reuniões com responsáveis, elogios e atendimentos.",
    features: [
      "Resumo com total de registros, pendentes, resolvidos e casos de gravidade alta em aberto",
      "Busca por aluno, turma ou protocolo",
      "Filtros por categoria, gravidade e status",
      "Alteração de status direto na tabela e impressão de cada registro"
    ],
    facts: [["Público", "Coordenação pedagógica"], ["Protocolo", "OC-ano-sequência"]],
    tags: ["Dashboard", "CRUD", "Filtros"],
    links: []
  },
  {
    id: "clima",
    title: "Consulta de Clima",
    category: "web",
    label: "Web",
    kicker: "React + API OpenWeatherMap",
    image: "assets/projetos/clima.webp",
    alt: "Tela da Consulta de Clima mostrando Campinas com temperatura, mínima e máxima, umidade e vento",
    bg: "#2E3A5C",
    short: "Interface de consulta de clima em React, com temperatura, sensação térmica, umidade e vento.",
    desc: "Aplicação em React com Vite para consultar o clima de uma cidade a partir da API OpenWeatherMap, com tratamento de carregamento e de erro e ícones da biblioteca Lucide.",
    features: [
      "Busca por cidade com validação de campo vazio e atalho pela tecla Enter",
      "Requisição à OpenWeatherMap em português e em graus Celsius",
      "Cartão com temperatura, sensação térmica, mínima e máxima, umidade e vento"
    ],
    facts: [["Stack", "React + Vite"], ["API", "OpenWeatherMap"]],
    tags: ["React", "Vite", "API REST", "Lucide"],
    links: []
  },
  {
    id: "maquiagem",
    title: "Minha Coleção",
    category: "web",
    label: "Web",
    kicker: "CRUD em React com rotas",
    image: "assets/projetos/maquiagem.webp",
    alt: "Tabela da coleção de maquiagem com nome, marca, tipo e ações de editar e excluir",
    bg: "#FBE9EF",
    short: "Aplicação de cadastro e organização de produtos de maquiagem, com login, cadastro e listagem editável.",
    desc: "Aplicação em React com React Router dividida em três telas: login, cadastro e listagem. A listagem permite adicionar, editar e excluir produtos, com validação dos campos.",
    features: [
      "Navegação entre login, cadastro e listagem com React Router",
      "Adição, edição e exclusão de produtos com estado em React",
      "Identificação visual do tipo de produto na tabela"
    ],
    extra: { src: "assets/projetos/maquiagem-login.webp", alt: "Tela de login da aplicação Minha Coleção", caption: "Tela de login" },
    facts: [["Stack", "React + React Router"], ["Telas", "Login, cadastro e listagem"]],
    tags: ["React", "React Router", "Vite", "CSS"],
    links: [{ label: "Código", href: repo("Listagem-Maquiagem"), solid: true }]
  },
  {
    id: "tarefas",
    title: "Tarefas Mobile",
    category: "mobile",
    label: "Mobile",
    kicker: "React Native + TypeScript",
    svg: covers.tarefas,
    bg: "#F3DCE0",
    short: "Aplicativo de tarefas em React Native consumindo uma API REST, com criação, edição, exclusão e conclusão.",
    desc: "Aplicativo mobile com Expo e TypeScript que consome uma API REST de tarefas. O código é organizado em componentes, um hook próprio para o estado das tarefas, uma camada de serviço tipada e um tema centralizado.",
    features: [
      "Listagem, criação, edição e exclusão de tarefas",
      "Marcação de tarefa concluída por requisição à API",
      "Tipagem das tarefas e dos formulários com interfaces TypeScript",
      "Tratamento de erro e estado de lista vazia"
    ],
    facts: [["Stack", "React Native, Expo, TypeScript"], ["Organização", "Componentes, hook e serviço"]],
    tags: ["React Native", "Expo", "TypeScript", "API REST"],
    links: [{ label: "Código", href: repo("Rds-Mobile"), solid: true }]
  },
  {
    id: "java",
    title: "Herança em Java",
    category: "estudos",
    label: "Estudos",
    kicker: "Programação orientada a objetos",
    svg: covers.java,
    bg: "#2B1720",
    short: "Modelagem de animais com classe abstrata, herança, sobrescrita, sobrecarga e enums.",
    desc: "Projeto em Java para praticar os principais conceitos de orientação a objetos, modelando animais a partir de uma classe abstrata e testando os comportamentos na classe principal.",
    features: [
      "Classe abstrata Animal com as subclasses Dog e Cat",
      "Sobrescrita (@Override), sobrecarga de métodos e uso de super()",
      "Enums para pelagem, habitat e nível de treinamento",
      "Classe utilitária de validações"
    ],
    facts: [["Linguagem", "Java"], ["Conceitos", "Herança, abstração, enum"]],
    tags: ["Java", "POO", "Herança", "Enum"],
    links: [{ label: "Código", href: repo("iaRedivo"), solid: true }]
  }
];

const techs = [
  { group: "Linguagens", items: [["JavaScript", "javascript"], ["TypeScript", "typescript"], ["Java", "java"], ["HTML5", "html5"], ["CSS3", "css3"]] },
  { group: "Front-end e mobile", items: [["React", "react"], ["React Native", "reactnative"], ["Expo", "expo", true], ["Vite", "vite"], ["React Router", "reactrouter", true]] },
  { group: "Back-end", items: [["Node.js", "nodejs"], ["Express", "express", true], ["JWT", "jsonwebtokens", true], ["Mongoose", "mongoose", true]] },
  { group: "Banco de dados", items: [["MongoDB Atlas", "mongodb"]] },
  { group: "Ferramentas e plataformas", items: [["Git", "git"], ["GitHub", "github", true], ["Vercel", "vercel", true], ["VS Code", "vscode"]] }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const media = (p, lazy = true) => p.image
  ? `<img src="${p.image}" alt="${p.alt}" ${lazy ? 'loading="lazy"' : ""} decoding="async">`
  : p.svg;

function renderStack() {
  $("#stack").innerHTML = techs.map((g) => `
    <div class="stack__group reveal">
      <h3>${g.group}</h3>
      <ul>${g.items.map(([name, icon, mono]) => `
        <li class="tech"><img class="tech__ico${mono ? " tech__ico--mono" : ""}" src="assets/icons/${icon}.svg" alt="" width="34" height="34" loading="lazy">${name}</li>`).join("")}
      </ul>
    </div>`).join("");
}

function renderProjects() {
  $("#projectList").innerHTML = projects.map((p) => `
    <li data-category="${p.category}" class="reveal">
      <button class="row" type="button" data-open="${p.id}" aria-label="Ver detalhes de ${p.title}">
        <span class="thumb" style="--thumb-bg:${p.bg}">${media(p)}</span>
        <span class="row__body">
          <span class="row__meta">${p.label} · ${p.kicker}</span>
          <span class="row__title">${p.title}<span aria-hidden="true">↗</span></span>
          <span class="row__desc">${p.short}</span>
          <span class="tags">${p.tags.slice(0, 5).map((t) => `<span>${t}</span>`).join("")}</span>
        </span>
      </button>
    </li>`).join("");
}

function setupFilters() {
  const bar = $("#filters");
  const pill = $(".seg__pill", bar);
  const buttons = $$("button", bar);
  const move = (btn) => {
    pill.style.width = `${btn.offsetWidth}px`;
    pill.style.height = `${btn.offsetHeight}px`;
    pill.style.transform = `translate(${btn.offsetLeft}px, ${btn.offsetTop}px)`;
  };
  buttons.forEach((btn) => btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    move(btn);
    const f = btn.dataset.filter;
    $$("#projectList > li").forEach((li, i) => {
      const show = f === "all" || li.dataset.category === f;
      li.classList.toggle("is-hidden", !show);
      li.classList.remove("in");
      if (show && !reduceMotion) {
        void li.offsetWidth;
        li.style.animationDelay = `${i * 40}ms`;
        li.classList.add("in");
      }
    });
  }));
  const sync = () => move($(".is-active", bar));
  addEventListener("resize", sync);
  document.fonts?.ready.then(sync);
  sync();
}

function setupModal() {
  const modal = $("#modal");
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (!btn) return;
    const p = projects.find((x) => x.id === btn.dataset.open);
    $("#mMedia").style.setProperty("--thumb-bg", p.bg);
    $("#mMedia").innerHTML = media(p, false);
    $("#mKicker").textContent = `${p.label} · ${p.kicker}`;
    $("#mTitle").textContent = p.title;
    $("#mDesc").textContent = p.desc;
    $("#mFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
    const extra = $("#mExtra");
    extra.hidden = !p.extra;
    extra.innerHTML = p.extra ? `<img src="${p.extra.src}" alt="${p.extra.alt}" loading="lazy"><figcaption>${p.extra.caption}</figcaption>` : "";
    $("#mFacts").innerHTML = p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
    $("#mTags").innerHTML = p.tags.map((t) => `<li>${t}</li>`).join("");
    $("#mLinks").innerHTML = p.links.map((l) => `<a class="btn ${l.solid ? "btn--solid" : "btn--ghost"}" href="${l.href}" target="_blank" rel="noopener">${l.label} <span aria-hidden="true">↗</span></a>`).join("");
    $("#mLinks").hidden = !p.links.length;
    modal.showModal();
    $(".modal__inner", modal).scrollTop = 0;
    document.body.style.overflow = "hidden";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) modal.close();
  });
  modal.addEventListener("close", () => (document.body.style.overflow = ""));
}

function setupTheme() {
  const root = document.documentElement;
  $("#themeToggle").addEventListener("click", () => {
    const t = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = t;
    try { localStorage.setItem("lm-theme", t); } catch (e) {}
  });
}

function setupNav() {
  const links = $$("[data-nav]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-current", a.dataset.nav === en.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["sobre", "tecnologias", "projetos", "contato"].forEach((id) => io.observe(document.getElementById(id)));
}

function setupReveal() {
  const name = $(".name");
  let n = 0;
  $$("[data-split]", name).forEach((el) => {
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = [...el.textContent].map((c) => `<span class="char" style="transition-delay:${n++ * 50 + 120}ms">${c}</span>`).join("");
  });
  requestAnimationFrame(() => setTimeout(() => name.classList.add("is-in"), 50));

  const els = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
  els.forEach((el) => io.observe(el));
}

function setupSpotlight() {
  if (!matchMedia("(pointer: fine)").matches || reduceMotion) return;
  const s = $(".spotlight");
  addEventListener("pointermove", (e) => {
    s.style.setProperty("--mx", `${e.clientX}px`);
    s.style.setProperty("--my", `${e.clientY}px`);
  }, { passive: true });
}

function setupClock() {
  const fmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" });
  const tick = () => ($("#clock").textContent = `${fmt.format(new Date())} BRT`);
  tick();
  setInterval(tick, 15000);
  const y = new Date().getFullYear();
  $("#year").textContent = y;
  $("#year2").textContent = y;
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-on"), 2200);
}

function setupContact() {
  $("#emailText").textContent = PROFILE.email;
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast("E-mail copiado");
      const label = $("[data-label]", $("#copyEmail"));
      label.textContent = "Copiado";
      setTimeout(() => (label.textContent = "Copiar"), 1800);
    } catch (e) {
      location.href = `mailto:${PROFILE.email}`;
    }
  });

  const form = $("#contactForm");
  const rules = {
    nome: (v) => (v.trim().length < 2 ? "Informe seu nome." : ""),
    email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Informe um e-mail válido." : ""),
    mensagem: (v) => (v.trim().length < 10 ? "A mensagem deve ter pelo menos 10 caracteres." : "")
  };
  const check = (field) => {
    const err = rules[field.name](field.value);
    const wrap = field.closest(".field");
    wrap.classList.toggle("has-error", !!err);
    $(".error", wrap).textContent = err;
    field.setAttribute("aria-invalid", !!err);
    return !err;
  };
  Object.keys(rules).forEach((n) => {
    const f = form.elements[n];
    f.addEventListener("blur", () => f.value && check(f));
    f.addEventListener("input", () => f.closest(".field").classList.contains("has-error") && check(f));
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = Object.keys(rules).map((n) => form.elements[n]);
    if (!fields.map(check).every(Boolean)) {
      fields.find((f) => f.getAttribute("aria-invalid") === "true").focus();
      return;
    }
    const d = new FormData(form);
    const subject = `[Portfólio] ${d.get("assunto")} — ${d.get("nome")}`;
    const body = `${d.get("mensagem")}\n\n—\n${d.get("nome")}\n${d.get("email")}`;
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("#formOk").hidden = false;
    form.reset();
  });
}

renderStack();
renderProjects();
setupFilters();
setupModal();
setupTheme();
setupNav();
setupReveal();
setupSpotlight();
setupClock();
setupContact();
