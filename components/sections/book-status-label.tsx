"use client";

import { useTranslations } from "next-intl";
import type { BookStatus } from "@/data/books";

interface BookStatusLabelProps {
  status: BookStatus;
}

const statusKeyMap: Record<BookStatus, "read" | "reading" | "wantToRead"> = {
  lido: "read",
  lendo: "reading",
  "quero ler": "wantToRead",
};

export function BookStatusLabel({ status }: BookStatusLabelProps) {
  const t = useTranslations("books");
  const label = t(`status.${statusKeyMap[status]}`);

  return <>{label}</>;
}
