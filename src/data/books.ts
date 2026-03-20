export type BookStatus = "lido" | "lendo" | "quero ler";

export interface Book {
  id: string;
  cover: {
    pt: string;
    en: string;
  };
  status: BookStatus;
  year?: number;
}

export const books: Book[] = [
  {
    id: "entendendoAlgoritmos",
    cover: {
      pt: "https://covers.openlibrary.org/b/isbn/9788575225639-L.jpg",
      en: "https://covers.openlibrary.org/b/isbn/9781617292231-L.jpg",
    },
    status: "lido",
    year: 2016,
  },
  {
    id: "introducaoSql",
    cover: {
      pt: "https://m.media-amazon.com/images/I/711siL1zU1L._AC_UF1000,1000_QL80_.jpg",
      en: "https://covers.openlibrary.org/b/isbn/9781491938614-L.jpg",
    },
    status: "lido",
    year: 2016,
  },
  {
    id: "estruturaDadosJs",
    cover: {
      pt: "https://m.media-amazon.com/images/I/71KGa1y8eaL.jpg",
      en: "https://covers.openlibrary.org/b/isbn/9781785285493-L.jpg",
    },
    status: "lido",
    year: 2019,
  },
  {
    id: "arquiteturaLimpa",
    cover: {
      pt: "https://m.media-amazon.com/images/I/815d9tE7jSL.jpg",
      en: "https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg",
    },
    status: "quero ler",
    year: 2018,
  },
  {
    id: "codigoLimpo",
    cover: {
      pt: "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF1000,1000_QL80_.jpg",
      en: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    },
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
