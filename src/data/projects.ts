export type Project = {
  id: string;
  title: string;
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
    imagePath: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
    tags: ["Ruby", "React"],
    githubUrl: "https://github.com/horus018/Zatrion"
  },
  {
    id: "cargestor",
    title: "CarGestor",
    description: {
      en: "A robust freelance vehicle and inventory management application designed for car dealerships.",
      pt: "Um aplicativo robusto de gerenciamento de veículos e estoque para concessionárias de carros."
    },
    imagePath: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070",
    tags: ["Rails"],
    githubUrl: "https://github.com/horus018/CarGestor"
  },
  {
    id: "ipb-connect",
    title: "IPB-Connect",
    description: {
      en: "An e-commerce marketplace platform built for international students to trade products securely.",
      pt: "Uma plataforma de marketplace e-commerce para estudantes internacionais negociarem produtos com segurança."
    },
    imagePath: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070",
    tags: ["Fullstack"],
    githubUrl: "https://github.com/horus018/IPB-Connect"
  }
];
