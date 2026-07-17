export interface Experience {
  id: string;
  title: Record<'en' | 'pt', string>;
  company: string;
  type: Record<'en' | 'pt', string>;
  date: Record<'en' | 'pt', string>;
  location: string;
  achievements: Record<'en' | 'pt', string[]>;
  iconUrl?: string;
  skills?: Record<'en' | 'pt', string[]>;
}

export const experiences: Experience[] = [
  {
    id: "exp-6",
    title: {
      en: "Ruby on Rails Engineer",
      pt: "Engenheiro Ruby on Rails"
    },
    company: "Desys Finance",
    type: {
      en: "Full-time",
      pt: "Tempo Integral"
    },
    date: {
      en: "Mar 2025 - Mar 2026",
      pt: "Mar 2025 - Mar 2026"
    },
    location: "Remote",
    achievements: {
      en: [
        "Full-cycle development: Responsible for requirement analysis, coding, and testing of financial products.",
        "Main Tech Stacks: Ruby on Rails, Hotwire, and PostgreSQL.",
        "Quality Assurance: Maintaining high test coverage using RSpec and Capybara.",
        "Collaboration: Participating in peer code reviews and technical discussions."
      ],
      pt: [
        "Desenvolvimento ciclo completo: Responsável por análise de requisitos, programação e testes de produtos financeiros.",
        "Principais Tecnologias: Ruby on Rails, Hotwire e PostgreSQL.",
        "Garantia de Qualidade: Manutenção de alta cobertura de testes usando RSpec e Capybara.",
        "Colaboração: Participação em revisões de código em pares e discussões técnicas."
      ]
    },
    iconUrl: "/desys.png",
    skills: {
      en: ["Ruby on Rails", "Hotwire", "PostgreSQL", "RSpec", "Capybara", "Web Development"],
      pt: ["Ruby on Rails", "Hotwire", "PostgreSQL", "RSpec", "Capybara", "Desenvolvimento Web"]
    }
  },
  {
    id: "exp-5",
    title: {
      en: "Java Software Engineer",
      pt: "Engenheiro de Software Java"
    },
    company: "Universidade Tecnológica Federal do Paraná",
    type: {
      en: "Part-time",
      pt: "Meio Período"
    },
    date: {
      en: "Sep 2024 - Mar 2025",
      pt: "Set 2024 - Mar 2025"
    },
    location: "Remote",
    achievements: {
      en: [
        "Full-stack development using technologies like Java | SpringBoot | jQuery | Maven | Git | HTML | CSS.",
        "Involved in the maintenance and implementation of new features for the Student Mobility Information System."
      ],
      pt: [
        "Desenvolvimento full-stack utilizando tecnologias como Java | SpringBoot | jQuery | Maven | Git | HTML | CSS.",
        "Envolvimento na manutenção e implementação de novas funcionalidades para o Sistema de Informação de Mobilidade Estudantil."
      ]
    },
    iconUrl: "/utfpr.png",
    skills: {
      en: ["Java", "JavaScript", "JQuery", "HTML5", "CSS", "Spring Framework"],
      pt: ["Java", "JavaScript", "JQuery", "HTML5", "CSS", "Spring Framework"]
    }
  },
  {
    id: "exp-4",
    title: {
      en: "Ruby on Rails Engineer",
      pt: "Engenheiro Ruby on Rails"
    },
    company: "Santé Odonto",
    type: {
      en: "Full-time",
      pt: "Tempo Integral"
    },
    date: {
      en: "Oct 2021 - Sep 2024",
      pt: "Out 2021 - Set 2024"
    },
    location: "Cascavel, Paraná, Brazil",
    achievements: {
      en: [
        "Code reviews and code refactor.",
        "Analysis and development of new modules and maintain existing modules in the application.",
        "Perform financial analysis of projects.",
        "Organization of HTML, CSS, and JavaScript for front-end optimization.",
        "Using of technologies such as Bootstrap, jQuery, CSS3, and HTML5 to create dynamic and responsive interfaces.",
        "Strong group communication and team collaboration skills.",
        "Internal presentations about Redis, materialized views and Google Material Design."
      ],
      pt: [
        "Revisões e refatoração de código.",
        "Análise e desenvolvimento de novos módulos e manutenção de módulos existentes na aplicação.",
        "Realização de análise financeira de projetos.",
        "Organização de HTML, CSS e JavaScript para otimização do front-end.",
        "Uso de tecnologias como Bootstrap, jQuery, CSS3 e HTML5 para criar interfaces dinâmicas e responsivas.",
        "Fortes habilidades de comunicação em grupo e colaboração em equipe.",
        "Apresentações internas sobre Redis, materialized views e Google Material Design."
      ]
    },
    iconUrl: "/sante.png",
    skills: {
      en: ["Ruby on Rails", "SASS", "HTML", "Responsiveness", "Git", "PostgreSQL", "Web Applications"],
      pt: ["Ruby on Rails", "SASS", "HTML", "Responsividade", "Git", "PostgreSQL", "Aplicativos web"]
    }
  }
];
