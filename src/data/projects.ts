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
      pt: "Blog fullstack com sistema completo de autenticação e publicação de conteúdo. Demonstra domínio de React, TypeScript e integração com serviços cloud (Firebase), com deploy automatizado na Vercel.",
      en: "Full-stack blog with a complete authentication and content publishing system. Demonstrates proficiency in React, TypeScript, and cloud service integration (Firebase), with automated deployment on Vercel.",
    },
    image: "/assets/img/projects/FM-Blog.webp",
    stack: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Firebase"],
    liveUrl: "https://fm-blog.vercel.app/",
    repoUrl: "https://github.com/FelipeMelogomes/FM-Blog",
  },
  {
    id: "2",
    title: "FM Shop",
    description: {
      pt: "E-commerce funcional com fluxo completo de compra, do carrinho ao pagamento real via Stripe. Demonstra capacidade de integrar APIs de terceiros e construir aplicações prontas para produção com Next.js e TypeScript.",
      en: "Functional e-commerce with a complete purchase flow, from cart to real payment via Stripe. Demonstrates ability to integrate third-party APIs and build production-ready applications with Next.js and TypeScript.",
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
      pt: "Sistema de controle de acesso mobile com gerenciamento de usuários, planos e licenças. Demonstra experiência com lógica de permissões e distribuição de software em ambiente mobile.",
      en: "Mobile access control system with user, plan, and license management. Demonstrates experience with permission logic and software distribution in a mobile environment.",
    },
    image: "/assets/img/projects/FM-Dumer.webp",
    stack: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
    repoUrl: "https://github.com/FelipeMeloGomes/FM-Dummer",
  },
];
