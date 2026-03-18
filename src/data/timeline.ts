export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company?: string;
  description: string;
  type: "trabalho" | "formacao" | "conquista";
}

export const timeline: TimelineItem[] = [
  {
    id: "1",
    year: "2025",
    title: "Desenvolvedor Full-Stack Júnior",
    company: "Nucleogov Assessoria e Tecnologia",
    description:
      "Desenvolvimento frontend com Next.js, React e TypeScript. Implementação backend com PHP (Laravel), APIs e integrações. Criação de testes automatizados com Pest. Utilização de PostgreSQL e automação com Python. Participação em code reviews.",
    type: "trabalho",
  },
  {
    id: "2",
    year: "2024",
    title: "Pós-graduação em Desenvolvimento Fullstack",
    company: "UNOPAR",
    description:
      "Pós-graduação focada em tecnologias modernas web, práticas avançadas de desenvolvimento fullstack e arquiteturas de software.",
    type: "formacao",
  },
  {
    id: "3",
    year: "2024",
    title: "Desenvolvedor Front-End",
    company: "Código Certo",
    description:
      "Desenvolvimento de interfaces responsivas com HTML, CSS e JavaScript. Criação de landing pages dinâmicas. Versionamento com Git e metodologia Kanban.",
    type: "trabalho",
  },
  {
    id: "4",
    year: "2022",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "UNOPAR",
    description:
      "Formação superior tecnológica focada em análise, projeto e desenvolvimento de sistemas de informação.",
    type: "formacao",
  },
];
