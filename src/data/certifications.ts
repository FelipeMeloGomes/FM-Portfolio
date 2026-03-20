export interface Certification {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  institution: string;
  date: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: {
      pt: "Desenvolvimento Front-end",
      en: "Front-end Development",
    },
    institution: "FreeCodeCamp",
    date: "2023",
    image: "/assets/certifications/FM-FrontEndDevelopment.webp",
  },
  {
    id: "2",
    title: {
      pt: "JavaScript Developer",
      en: "JavaScript Developer",
    },
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-JavaScriptDeveloper.webp",
  },
  {
    id: "3",
    title: {
      pt: "React Developer",
      en: "React Developer",
    },
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-ReactDeveloper.webp",
  },
  {
    id: "4",
    title: {
      pt: "TypeScript",
      en: "TypeScript",
    },
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-TypeScript.webp",
  },
  {
    id: "5",
    title: {
      pt: "Git e GitHub",
      en: "Git and GitHub",
    },
    institution: "Udemy",
    date: "2024",
    image: "/assets/certifications/FM-GitGitHub.webp",
  },
  {
    id: "6",
    title: {
      pt: "PHP",
      en: "PHP",
    },
    institution: "Udemy",
    date: "2026",
    image: "/assets/certifications/FM-PHP.webp",
  },
  {
    id: "7",
    title: {
      pt: "Laravel",
      en: "Laravel",
    },
    institution: "Udemy",
    date: "2026",
    image: "/assets/certifications/FM-LARAVEL.webp",
  },
  {
    id: "8",
    title: {
      pt: "SQL",
      en: "SQL",
    },
    institution: "Dio",
    date: "2024",
    image: "/assets/certifications/FM-SQL.webp",
  },
];
