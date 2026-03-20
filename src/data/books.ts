export type BookStatus = "lido" | "lendo" | "quero ler";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  status: BookStatus;
  year?: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Entendendo Algoritmos",
    author: "Aditya Bhargava",
    cover: "https://covers.openlibrary.org/b/isbn/9788575225639-L.jpg",
    status: "lido",
    year: 2016,
  },
  {
    id: "2",
    title: "Introdução à Linguagem SQL",
    author: "Thomas Nield",
    cover:
      "https://m.media-amazon.com/images/I/711siL1zU1L._AC_UF1000,1000_QL80_.jpg",
    status: "lido",
    year: 2016,
  },
  {
    id: "3",
    title: "Estruturas de Dados e Algoritmos com JavaScript",
    author: "Loiane Groner",
    cover: "https://m.media-amazon.com/images/I/71KGa1y8eaL.jpg",
    status: "lido",
    year: 2019,
  },
  {
    id: "4",
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    cover: "https://m.media-amazon.com/images/I/815d9tE7jSL.jpg",
    status: "quero ler",
    year: 2018,
  },
  {
    id: "5",
    title: "Código Limpo",
    author: "Robert C. Martin",
    cover:
      "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF1000,1000_QL80_.jpg",
    status: "quero ler",
    year: 2008,
  },
];

export const bookStatusLabels: Record<BookStatus, string> = {
  lido: "Lido",
  lendo: "Lendo",
  "quero ler": "Quero ler",
};

export const bookStatusColors: Record<BookStatus, string> = {
  lido: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  lendo: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "quero ler": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};
