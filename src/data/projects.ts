export interface ProjectFeature {
  label: {
    pt: string;
    en: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  image: string;
  images: string[];
  stack: string[];
  features: {
    pt: string[];
    en: string[];
  };
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FM Blog",
    description: {
      pt: "Blog fullstack de tecnologia com sistema completo de autenticação, editor rich text e deploy automatizado na Vercel.",
      en: "Full-stack technology blog with complete authentication system, rich text editor, and automated deployment on Vercel.",
    },
    image: "/assets/img/projects/FM-Blog.webp",
    images: [],
    stack: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Firebase"],
    features: {
      pt: [
        "Sistema de autenticação (email/senha + Google OAuth)",
        "Editor rich text (TipTap) para criação de posts",
        "Sistema de comentários com replies e likes em tempo real",
        "Upload de imagens (Cloudinary)",
        "Dashboard com métricas de visualizações",
        "Sistema de busca por título",
        "Paginação e filtros avançados",
        "Dark/Light mode com persistência",
        "Testes E2E com Playwright",
        "Deploy automatizado na Vercel",
      ],
      en: [
        "Authentication system (email/password + Google OAuth)",
        "Rich text editor (TipTap) for post creation",
        "Comments system with replies and real-time likes",
        "Image upload (Cloudinary)",
        "Dashboard with view metrics",
        "Search by title",
        "Pagination and advanced filters",
        "Dark/Light mode with persistence",
        "E2E tests with Playwright",
        "Automated deployment on Vercel",
      ],
    },
    liveUrl: "https://fm-blog.vercel.app/",
    repoUrl: "https://github.com/FelipeMelogomes/FM-Blog",
  },
  {
    id: "2",
    title: "FM Shop",
    description: {
      pt: "E-commerce completo com checkout real via Stripe, CMS para gerenciamento de produtos e autenticação de usuários.",
      en: "Complete e-commerce with real Stripe checkout, CMS for product management, and user authentication.",
    },
    image: "/assets/img/projects/FM-Shop.webp",
    images: [],
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Sanity CMS",
      "Clerk",
      "Stripe",
    ],
    features: {
      pt: [
        "Checkout real via Stripe (cartão, boleto, Apple Pay, Google Pay)",
        "CMS Sanity para gerenciamento de produtos",
        "Autenticação completa com Clerk",
        "Sistema de wishlist com persistência híbrida",
        "Carrinho com Zustand e localStorage",
        "Busca de produtos com filtros por categoria/marca",
        "Cálculo de frete por CEP",
        "Webhook Stripe para confirmação de pedidos",
        "Tema dark/light com next-themes",
        "Rate limiting e CSRF protection",
        "Testes unitários com Vitest",
        "CI/CD com GitHub Actions",
      ],
      en: [
        "Real Stripe checkout (card, boleto, Apple Pay, Google Pay)",
        "Sanity CMS for product management",
        "Complete authentication with Clerk",
        "Wishlist system with hybrid persistence",
        "Cart with Zustand and localStorage",
        "Product search with category/brand filters",
        "Shipping calculation by ZIP code",
        "Stripe webhook for order confirmation",
        "Dark/Light theme with next-themes",
        "Rate limiting and CSRF protection",
        "Unit tests with Vitest",
        "CI/CD with GitHub Actions",
      ],
    },
    liveUrl: "https://fm-ecommerce-jade.vercel.app/",
    repoUrl: "https://github.com/FelipeMeloGomes/FM_Ecommerce",
  },
];

export const techColors: Record<string, { bg: string; text: string }> = {
  React: { bg: "bg-sky-500/10", text: "text-sky-500" },
  TypeScript: { bg: "bg-blue-500/10", text: "text-blue-500" },
  "Next.js": { bg: "bg-white/10", text: "text-white dark:text-white" },
  TailwindCSS: { bg: "bg-cyan-500/10", text: "text-cyan-500" },
  Firebase: { bg: "bg-amber-500/10", text: "text-amber-500" },
  Stripe: { bg: "bg-indigo-500/10", text: "text-indigo-500" },
  "shadcn/ui": { bg: "bg-black/10", text: "text-black dark:text-white" },
  "Sanity CMS": { bg: "bg-orange-500/10", text: "text-orange-500" },
  Clerk: { bg: "bg-violet-500/10", text: "text-violet-500" },
  Node: { bg: "bg-green-500/10", text: "text-green-500" },
  PostgreSQL: { bg: "bg-blue-500/10", text: "text-blue-600" },
};
