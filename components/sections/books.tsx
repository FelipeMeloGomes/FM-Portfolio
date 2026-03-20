"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Suspense, useEffect, useRef, useState } from "react";
import { SkeletonBookCard } from "@/components/skeleton";
import { type BookStatus, bookStatusColors, books } from "@/data/books";
import { BookStatusLabel } from "./book-status-label";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function BookCard({ book }: { book: (typeof books)[0] }) {
  const t = useTranslations("books");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const cardMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2, ease: "easeOut" as const },
      };

  const bookData = t.raw(`data.${book.id}`) as {
    title: string;
    author: string;
  };

  return (
    <m.div
      data-testid="book-card"
      variants={cardVariants}
      {...cardMotionProps}
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors"
    >
      <div className="aspect-[2/3] relative bg-muted">
        <Image
          src={book.cover[locale as "pt" | "en"]}
          alt={bookData.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">
          {bookData.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{bookData.author}</p>
        <span
          className={`inline-block text-xs px-2 py-0.5 rounded-full ${
            bookStatusColors[book.status]
          }`}
        >
          <BookStatusLabel status={book.status} />
        </span>
      </div>
    </m.div>
  );
}

function BooksGrid() {
  const t = useTranslations("books");
  const [activeFilter, setActiveFilter] = useState<BookStatus | "all">("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const filteredBooks =
    activeFilter === "all"
      ? books
      : books.filter((book) => book.status === activeFilter);

  const finalHeaderVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : headerVariants;

  const finalContainerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : containerVariants;

  const statusLabels: Record<string, string> = {
    all: t("status.all"),
    lendo: t("status.reading"),
    lido: t("status.read"),
    "quero ler": t("status.wantToRead"),
  };

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <m.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={finalHeaderVariants}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {t("title")} <span className="text-accent"></span>
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            {t("subtitle")}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {["all", "lendo", "lido", "quero ler"].map((filterValue) => (
            <button
              type="button"
              data-testid="book-filter"
              key={filterValue}
              onClick={() => setActiveFilter(filterValue as BookStatus | "all")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filterValue
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {statusLabels[filterValue]}
            </button>
          ))}
        </m.div>

        <m.div
          variants={finalContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </m.div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {t("noResults")}
          </p>
        )}
      </div>
    </section>
  );
}

function BooksLoading() {
  const t = useTranslations("books");

  const statusLabels: Record<string, string> = {
    all: t("status.all"),
    lendo: t("status.reading"),
    lido: t("status.read"),
    "quero ler": t("status.wantToRead"),
  };

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {t("title")} <span className="text-accent"></span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "lendo", "lido", "quero ler"].map((filterValue) => (
            <button
              type="button"
              key={filterValue}
              className="px-4 py-2 rounded-full text-sm transition-colors bg-muted text-muted-foreground"
            >
              {statusLabels[filterValue]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
            <SkeletonBookCard key={`book-skeleton-${idx}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BooksStatic() {
  const t = useTranslations("books");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<BookStatus | "all">("all");

  const filteredBooks =
    activeFilter === "all"
      ? books
      : books.filter((book) => book.status === activeFilter);

  const statusLabels: Record<string, string> = {
    all: t("status.all"),
    lendo: t("status.reading"),
    lido: t("status.read"),
    "quero ler": t("status.wantToRead"),
  };

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {t("title")} <span className="text-accent"></span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "lendo", "lido", "quero ler"].map((filterValue) => (
            <button
              type="button"
              data-testid="book-filter"
              key={filterValue}
              onClick={() => setActiveFilter(filterValue as BookStatus | "all")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filterValue
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {statusLabels[filterValue]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => {
            const bookData = t.raw(`data.${book.id}`) as {
              title: string;
              author: string;
            };
            return (
              <div
                key={book.id}
                data-testid="book-card"
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors"
              >
                <div className="aspect-[2/3] relative bg-muted">
                  <Image
                    src={book.cover[locale as "pt" | "en"]}
                    alt={bookData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-2 mb-1">
                    {bookData.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {bookData.author}
                  </p>
                  <span
                    className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                      bookStatusColors[book.status]
                    }`}
                  >
                    <BookStatusLabel status={book.status} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {t("noResults")}
          </p>
        )}
      </div>
    </section>
  );
}

export function Books() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BooksStatic />;
  }

  return (
    <Suspense fallback={<BooksLoading />}>
      <BooksGrid />
    </Suspense>
  );
}
