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
      "Líder em sites e transparência para instituições públicas no Brasil, atendendo mais de 200 municípios em 4 estados. Desenvolvimento de dashboard centralizando dados de leis cadastradas — anteriormente dispersos em planilhas Excel — com métricas por colaborador, sistema, mês e ano. Extração automatizada via web scraping para migração ao novo sistema. Implementação de APIs REST com PHP (Laravel), interfaces com Next.js, React e TypeScript, testes automatizados com Pest, geração de relatórios em PDF e Excel com Python e otimização de consultas no PostgreSQL.",
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
      "Desenvolvimento de landing page institucional para atrair novos desenvolvedores à comunidade. Criação de interfaces responsivas com HTML, CSS e JavaScript. Orientação e mentoria de membros iniciantes em HTML, CSS e JavaScript. Colaboração com equipes de design e backend com Git e metodologia Kanban.",
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
