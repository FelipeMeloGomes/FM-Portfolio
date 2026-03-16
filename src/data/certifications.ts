export interface Certification {
  id: string
  title: string
  institution: string
  date: string
  image: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Desenvolvimento Front-end',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-FrontEndDevelopment.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '2',
    title: 'JavaScript Developer',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-JavaScriptDeveloper.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '3',
    title: 'React Developer',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-ReactDeveloper.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '4',
    title: 'TypeScript',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-TypeScript.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '5',
    title: 'Git e GitHub',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-GitGitHub.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '6',
    title: 'PHP',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-PHP.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '7',
    title: 'Laravel',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-LARAVEL.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
  {
    id: '8',
    title: 'SQL',
    institution: 'Rocketseat',
    date: '2024',
    image: '/assets/certifications/FM-SQL.webp',
    credentialUrl: 'https://www.rocketseat.com.br',
  },
]
