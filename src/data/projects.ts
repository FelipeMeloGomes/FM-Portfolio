export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  image: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FM Blog",
    description: {
      pt: "Blog de tecnologia com autenticação via Firebase, criação de posts com editor rico e layout responsivo. Utiliza React, TypeScript, TailwindCSS, Chakra UI e React Router.",
      en: "Technology blog with Firebase authentication, post creation with rich editor and responsive layout. Uses React, TypeScript, TailwindCSS, Chakra UI, and React Router.",
    },
    image: "/assets/img/projects/FM-Blog.webp",
    stack: ["React", "TypeScript", "TailwindCSS", "Chakra UI", "Firebase"],
    liveUrl: "https://fm-blog-react.netlify.app/",
    repoUrl: "https://github.com/FelipeMelogomes/FM-Blog",
  },
  {
    id: "2",
    title: "FM Shop",
    description: {
      pt: "E-commerce com autenticação, carrinho de compras e integração com Stripe para pagamentos. Desenvolvido com Next.js, TypeScript e TailwindCSS.",
      en: "E-commerce with authentication, shopping cart and Stripe integration for payments. Built with Next.js, TypeScript and TailwindCSS.",
    },
    image: "/assets/img/projects/FM-Shop.webp",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    liveUrl: "https://fm-ecommerce-jade.vercel.app/",
    repoUrl: "https://github.com/FelipeMeloGomes/FM_Ecommerce",
  },
  {
    id: "3",
    title: "FM Dummer",
    description: {
      pt: "Aplicativo mobile com gerenciamento de usuários, planos e licenças para controle de acesso a um APK exclusivo.",
      en: "Mobile app with user management, plans and licenses to control access to an exclusive APK.",
    },
    image: "/assets/img/projects/FM-Dumer.webp",
    stack: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
    repoUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
  },
];
