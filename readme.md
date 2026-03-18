# Felipe Melo | Portfolio

Portfólio pessoal construído com tecnologias web modernas.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer)

- **Next.js 14** — App Router, Server Components, Metadata API
- **TypeScript** — Type safety em todo o código
- **Tailwind CSS** — Framework CSS utilitário com tokens de design customizados
- **Framer Motion** — Animações suaves e minimalistas com scroll triggers
- **next-themes** — Dark/Light mode com detecção de preferência do sistema

## Funcionalidades

- **Dark/Light Mode** — Detecção de preferência do sistema com toggle manual
- **Animações Minimalistas** — Animações de fade-in ao rolar usando Framer Motion
- **Seção de Livros** — Grid filtrável por status de leitura (lido, lendo, quero ler)
- **Download de Currículo** — Link direto para download do CV
- **SEO Otimizado** — Metadata API do Next.js com Open Graph e Twitter cards

## Estrutura do Projeto

```
.
├── app/
│   ├── globals.css          # Importações do Tailwind e propriedades customizadas
│   ├── layout.tsx           # Layout raiz com metadata e providers
│   └── page.tsx             # Composição da página principal
├── components/
│   ├── animations.tsx       # Utilitários de animação reutilizáveis
│   ├── footer.tsx          # Rodapé do site
│   ├── navbar.tsx          # Navegação com efeitos de scroll
│   ├── theme-provider.tsx  # Provider do next-themes
│   ├── theme-toggle.tsx    # Botão de alternar Dark/Light mode
│   └── sections/
│       ├── hero.tsx        # Seção hero com avatar
│       ├── about.tsx       # Seção sobre
│       ├── skills.tsx      # Grid de habilidades
│       ├── projects.tsx    # Vitrine de projetos
│       ├── books.tsx       # Livros com filtro de status
│       └── contact.tsx     # Links de contato
├── lib/
│   └── utils.ts            # Funções utilitárias (helper cn)
├── public/
│   └── assets/             # Arquivos estáticos
│       ├── img/            # Imagens (projetos, perfil)
│       └── *.docx          # Arquivo do currículo
├── src/
│   └── data/
│       ├── books.ts        # Dados dos livros
│       └── projects.ts     # Dados dos projetos
├── tailwind.config.ts      # Configuração do Tailwind
├── tsconfig.json           # Configuração do TypeScript
└── package.json            # Dependências
```

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FelipeMelogomes/fm-portfolio.git

# Navegue para o diretório do projeto
cd fm-portfolio

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Atualizando Dados

### Adicionando Livros

Edite `src/data/books.ts`:

```typescript
export const books: Book[] = [
  {
    id: '6',
    title: 'Novo Livro',
    author: 'Nome do Autor',
    cover: 'https://covers.openlibrary.org/b/isbn/978-EXEMPLO-L.jpg',
    status: 'lendo',
    year: 2024,
  },
]
```

### Adicionando Projetos

Edite `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '5',
    title: 'Novo Projeto',
    description: 'Descrição do projeto',
    image: '/assets/img/projects/sua-imagem.webp',
    stack: ['React', 'TypeScript'],
    liveUrl: 'https://seu-demo.com',
    repoUrl: 'https://github.com/seu-repositorio',
  },
]
```

## Deploy

Faça deploy na Vercel com zero configuração:

```bash
# Instale a CLI da Vercel
pnpm add -g vercel

# Faça o deploy
vercel
```

Ou conecte seu repositório GitHub à Vercel para deploys automáticos a cada push.
