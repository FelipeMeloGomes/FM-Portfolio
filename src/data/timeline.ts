export interface TimelineItem {
  id: string
  year: string
  title: string
  company: string
  description: string
  type: 'work' | 'education' | 'milestone'
}

export const timeline: TimelineItem[] = [
  {
    id: '1',
    year: '2024',
    title: 'Desenvolvedor Front-end',
    company: 'Freelancer',
    description:
      'Desenvolvimento de aplicações web modernas com foco em React, Next.js e TypeScript. Criação de interfaces responsivas e experiências digitais inovadoras.',
    type: 'work',
  },
  {
    id: '2',
    year: '2023',
    title: 'Formação em Desenvolvimento Web',
    company: 'Udemy / Cursos Online',
    description:
      'Aprofundamento em Next.js 14, TypeScript avançado, TailwindCSS e boas práticas de arquitetura de software.',
    type: 'education',
  },
  {
    id: '3',
    year: '2022',
    title: 'Primeiros Projetos Professionais',
    company: 'Projetos Pessoais',
    description:
      'Início do desenvolvimento de projetos completos incluindo e-commerce, blogs e aplicações mobile com React Native.',
    type: 'milestone',
  },
  {
    id: '4',
    year: '2021',
    title: 'Início da Carreira Tech',
    company: 'Estudos Autodidatas',
    description:
      'Início dos estudos em programação web, focando em HTML, CSS, JavaScript e React. Participação em bootcamps e cursos online.',
    type: 'education',
  },
]
