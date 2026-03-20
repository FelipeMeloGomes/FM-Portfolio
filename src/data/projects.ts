export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FM Blog",
    description:
      "Blog de tecnologia com autenticação via Firebase, criação de posts com editor rico e layout responsivo. Utiliza React, TypeScript, TailwindCSS, Chakra UI e React Router.",
    image: "/assets/img/projects/FM-Blog.webp",
    stack: ["React", "TypeScript", "TailwindCSS", "Chakra UI", "Firebase"],
    liveUrl: "https://fm-blog-react.netlify.app/",
    repoUrl: "https://github.com/FelipeMelogomes/FM-Blog",
  },
  {
    id: "2",
    title: "FM Shop",
    description:
      "E-commerce com autenticação, carrinho de compras e integração com Stripe para pagamentos. Desenvolvido com Next.js, TypeScript e TailwindCSS.",
    image: "/assets/img/projects/FM-Shop.webp",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    liveUrl: "https://fm-ecommerce-jade.vercel.app/",
    repoUrl: "https://github.com/FelipeMeloGomes/FM_Ecommerce",
  },
  {
    id: "3",
    title: "FM Dummer",
    description:
      "Aplicativo mobile com gerenciamento de usuários, planos e licenças para controle de acesso a um APK exclusivo.",
    image: "/assets/img/projects/FM-Dumer.webp",
    stack: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
    repoUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
  },
];
