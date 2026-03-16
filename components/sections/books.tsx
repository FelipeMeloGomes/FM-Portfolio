'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { books, bookStatusLabels, bookStatusColors, type BookStatus } from '@/data/books'

const filters: { label: string; value: BookStatus | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Lendo', value: 'lendo' },
  { label: 'Lido', value: 'lido' },
  { label: 'Quero ler', value: 'quero ler' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function BookCard({ book }: { book: typeof books[0] }) {
  const shouldReduceMotion = useReducedMotion()

  const cardMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2, ease: 'easeOut' as const },
      }

  return (
    <motion.div
      variants={cardVariants}
      {...cardMotionProps}
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors"
    >
      <div className="aspect-[2/3] relative bg-muted">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
        <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
        <span
          className={`inline-block text-xs px-2 py-0.5 rounded-full ${
            bookStatusColors[book.status]
          }`}
        >
          {bookStatusLabels[book.status]}
        </span>
      </div>
    </motion.div>
  )
}

function BooksContent() {
  const [activeFilter, setActiveFilter] = useState<BookStatus | 'all'>('all')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.1 })
  const shouldReduceMotion = useReducedMotion()

  const filteredBooks =
    activeFilter === 'all'
      ? books
      : books.filter((book) => book.status === activeFilter)

  const finalHeaderVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : headerVariants

  const finalContainerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : containerVariants

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={finalHeaderVariants}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Livros <span className="text-accent">Lidos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Livros que li, estou lendo ou pretendo ler.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter.value
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={finalContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </motion.div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Nenhum livro encontrado com este filtro.
          </p>
        )}
      </div>
    </section>
  )
}

function BooksStatic() {
  const [activeFilter, setActiveFilter] = useState<BookStatus | 'all'>('all')

  const filteredBooks =
    activeFilter === 'all'
      ? books
      : books.filter((book) => book.status === activeFilter)

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Livros <span className="text-accent">Lidos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Livros que li, estou lendo ou pretendo ler.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter.value
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors"
            >
              <div className="aspect-[2/3] relative bg-muted">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>

              <div className="p-3">
                <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                <span
                  className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                    bookStatusColors[book.status]
                  }`}
                >
                  {bookStatusLabels[book.status]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Nenhum livro encontrado com este filtro.
          </p>
        )}
      </div>
    </section>
  )
}

export function Books() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <BooksStatic />
  }

  return <BooksContent />
}
