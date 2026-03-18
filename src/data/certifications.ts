export interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Desenvolvimento Front-end",
    institution: "FreeCodeCamp",
    date: "2023",
    image: "/assets/certifications/FM-FrontEndDevelopment.webp",
  },
  {
    id: "2",
    title: "JavaScript Developer",
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-JavaScriptDeveloper.webp",
  },
  {
    id: "3",
    title: "React Developer",
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-ReactDeveloper.webp",
  },
  {
    id: "4",
    title: "TypeScript",
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-TypeScript.webp",
  },
  {
    id: "5",
    title: "Git e GitHub",
    institution: "Udemy",
    date: "2024",
    image: "/assets/certifications/FM-GitGitHub.webp",
  },
  {
    id: "6",
    title: "PHP",
    institution: "Udemy",
    date: "2026",
    image: "/assets/certifications/FM-PHP.webp",
  },
  {
    id: "7",
    title: "Laravel",
    institution: "Udemy",
    date: "2026",
    image: "/assets/certifications/FM-LARAVEL.webp",
  },
  {
    id: "8",
    title: "SQL",
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-SQL.webp",
  },
];
