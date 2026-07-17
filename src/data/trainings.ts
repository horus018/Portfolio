export type Training = {
  id: string;
  title: string;
  description: { en: string; pt: string };
  imagePath: string;
  tags: string[];
  canvaUrl: string;
};

export const trainings: Training[] = [
  {
    id: "processo-aprendizado",
    title: "O Processo de Aprendizado e a Programação",
    description: {
      en: "A presentation on the learning process and computer programming.",
      pt: "Uma apresentação sobre o processo de aprendizado e a programação de computadores."
    },
    imagePath: "/aprendizado_programacao.png",
    tags: ["Educação", "Programação"],
    canvaUrl: "https://canva.link/wliws44eggzp93r"
  },
  {
    id: "redis",
    title: "Redis",
    description: {
      en: "An overview of Redis, in-memory data structures, and caching.",
      pt: "Uma visão geral do Redis, estruturas de dados em memória e cache."
    },
    imagePath: "/redis.png",
    tags: ["Banco de Dados", "Cache"],
    canvaUrl: "https://canva.link/y5vr7y062m0r4f3"
  },
  {
    id: "smart-order",
    title: "Smart Order",
    description: {
      en: "Presentation about the Smart Order application.",
      pt: "Apresentação sobre o aplicativo Smart Order."
    },
    imagePath: "/smart_order_training.png",
    tags: ["Mobile", "React Native"],
    canvaUrl: "https://canva.link/o4tnbp1xfgzx2vb"
  },
  {
    id: "material-design",
    title: "Material Design",
    description: {
      en: "Exploring the concepts and guidelines of Google's Material Design.",
      pt: "Explorando os conceitos e diretrizes do Material Design do Google."
    },
    imagePath: "/material_design.png",
    tags: ["Design", "UI/UX"],
    canvaUrl: "https://canva.link/bi0w0znvg7z96gb"
  },
  {
    id: "testes-automatizados",
    title: "Testes Automatizados",
    description: {
      en: "The importance and implementation of automated testing in software development.",
      pt: "A importância e implementação de testes automatizados no desenvolvimento de software."
    },
    imagePath: "/testes_automatizados.png",
    tags: ["QA", "Testing"],
    canvaUrl: "https://canva.link/j2ou0xn5tahr1qh"
  },
  {
    id: "views-materializadas",
    title: "Views Materializadas",
    description: {
      en: "Understanding materialized views for database performance optimization.",
      pt: "Entendendo views materializadas para otimização de performance em bancos de dados."
    },
    imagePath: "/views_materializadas.png",
    tags: ["Banco de Dados", "SQL"],
    canvaUrl: "https://canva.link/vod41gsgcqevukk"
  },
  {
    id: "work-instructions",
    title: "Work Instructions",
    description: {
      en: "Presentation of the Work Instructions project for assembly lines.",
      pt: "Apresentação do projeto Work Instructions para linhas de montagem."
    },
    imagePath: "/work_instructions_training.png",
    tags: ["Indústria", "Software"],
    canvaUrl: "https://canva.link/pr0qxbi3c0y6ccg"
  },
  {
    id: "kivy-python",
    title: "Kivy Python",
    description: {
      en: "Developing graphical user interfaces with Python and the Kivy framework.",
      pt: "Desenvolvendo interfaces gráficas com Python e o framework Kivy."
    },
    imagePath: "/kivy_python.png",
    tags: ["Python", "Kivy"],
    canvaUrl: "https://canva.link/jo7161l6eemdyac"
  },
  {
    id: "mongo-db-security",
    title: "Vulnerabilidades no MongoDB",
    description: {
      en: "Analyzing security vulnerabilities and best practices in MongoDB.",
      pt: "Analisando vulnerabilidades de segurança e boas práticas no MongoDB."
    },
    imagePath: "/mongodb.png",
    tags: ["Segurança", "NoSQL", "MongoDB"],
    canvaUrl: "https://canva.link/lwpzlyavx4lhca0"
  }
];
