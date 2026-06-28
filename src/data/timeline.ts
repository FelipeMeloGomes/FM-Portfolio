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
      "Líder em sites e transparência para instituições públicas no Brasil, atendendo mais de 200 municípios em 4 estados. Projetei e construí um dashboard centralizado que consolidou dados de cadastro de leis anteriormente dispersos em planilhas Excel, com métricas em tempo real por colaborador, sistema, mês e ano. Automatizei a extração de dados via web scraping para migração ao novo sistema. Implementei APIs REST com PHP (Laravel), interfaces responsivas com Next.js, React e TypeScript, testes automatizados com Pest, geração de relatórios em PDF e Excel com Python e otimização de consultas no PostgreSQL.",
    type: "trabalho",
  },
  {
    id: "2",
    year: "2024",
    title: "Pós-graduação em Desenvolvimento Fullstack",
    company: "UNOPAR",
    description:
      "Pós-graduação focada em tecnologias modernas web, práticas avançadas de desenvolvimento fullstack e arquiteturas de software. Grade curricular incluiu padrões avançados em React, design de APIs REST, modelagem de banco de dados e metodologias ágeis.",
    type: "formacao",
  },
  {
    id: "3",
    year: "2024",
    title: "Desenvolvedor Front-End",
    company: "Código Certo",
    description:
      "Desenvolvi landing page institucional que ajudou a atrair novos desenvolvedores para a comunidade. Criação de interfaces responsivas com HTML, CSS e JavaScript. Mentoria de membros iniciantes em HTML, CSS e JavaScript, acelerando sua integração. Colaboração com equipes de design e backend usando Git e metodologia Kanban.",
    type: "trabalho",
  },
  {
    id: "4",
    year: "2022",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "UNOPAR",
    description:
      "Formação superior tecnológica focada em análise, projeto e desenvolvimento de sistemas de informação. Principais disciplinas: Estruturas de Dados e Algoritmos, Engenharia de Software, Banco de Dados, Desenvolvimento Web e Programação Orientada a Objetos.",
    type: "formacao",
  },
];
