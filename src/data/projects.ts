export type Project = {
  id: string;
  title: Record<'en' | 'pt', string> | string;
  description: { en: string; pt: string };
  imagePath: string;
  tags: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "zatrion",
    title: "Zatrion",
    description: {
      en: "A dynamic platform combining Ruby, React, and LLMs to guide tabletop RPG campaigns.",
      pt: "Uma plataforma dinâmica combinando Ruby, React e LLMs para guiar campanhas de RPG de mesa."
    },
    imagePath: "/zatrion.png",
    tags: ["Ruby", "React", "Tailwind", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/horus018/zatrion_backend"
  },
  {
    id: "ipb-connect",
    title: "IPB-Connect",
    description: {
      en: "An e-commerce marketplace platform built for international students to trade products securely.",
      pt: "Uma plataforma de marketplace e-commerce para estudantes internacionais negociarem produtos com segurança."
    },
    imagePath: "/ipb_connect.png",
    tags: ["React", "NodeJS", "Stripe", "PostgreSQL", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/horus018/IPB-Connect"
  },
  {
    id: "work-instructions",
    title: "Work Instructions",
    description: {
      en: "A platform for creating and managing work instructions for factory assembly lines.",
      pt: "Uma plataforma para criar e gerenciar instruções de trabalho para linhas de montagem."
    },
    imagePath: "/work_instructions.png",
    tags: ["Ruby on Rails", "React", "PostgreSQL", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/horus018/WorkInstructions"
  },
  {
    id: "smart-order",
    title: "Smart Order",
    description: {
      en: "A mobile application for creating and managing orders for restaurants and retail.",
      pt: "Um aplicativo mobile para criação e gerenciamento de pedidos para restaurantes e lojas."
    },
    imagePath: "/smart_order.png",
    tags: ["React Native", "Expo", "React Navigation", "Tailwind", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/horus018/SmartOrder"
  },
  {
    id: "health-post",
    title: {
      en: "Health Connect",
      pt: "Saúde Conecta"
    },
    description: {
      en: "A web application for creating and managing appointments for a health post.",
      pt: "Uma aplicação web para criação e gerenciamento de consultas para um posto de saúde."
    },
    imagePath: "/saude_conecta.png",
    tags: ["Java", "Spring Boot", "Thymeleaf", "HTML", "CSS", "JS", "Jquery"],
    githubUrl: "https://github.com/horus018/posto_saude"
  },
  {
    id: "pacman-clone",
    title: "Pacman Clone",
    description: {
      en: "A 2D Pacman game using SFML.",
      pt: "Um jogo 2D do Pacman usando SFML."
    },
    imagePath: "/pacman.png",
    tags: ["C++", "SFML"],
    githubUrl: "https://github.com/horus018/pacman2"
  }
];
