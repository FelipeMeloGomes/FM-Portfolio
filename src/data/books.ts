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
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    status: "lido",
    year: 2008,
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    cover: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
    status: "lido",
    year: 2019,
  },
  {
    id: "3",
    title: "Refactoring",
    author: "Martin Fowler",
    cover: "https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg",
    status: "lendo",
    year: 2018,
  },
  {
    id: "4",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    cover: "https://covers.openlibrary.org/b/isbn/9781491904244-L.jpg",
    status: "lendo",
    year: 2015,
  },
  {
    id: "5",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg",
    status: "quero ler",
    year: 2017,
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
