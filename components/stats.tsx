'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FolderKanban, BookOpen, Award } from 'lucide-react'
import { projects } from '@/data/projects'
import { books } from '@/data/books'
import { certifications } from '@/data/certifications'

interface StatItem {
  id: string
  label: string
  value: number
  icon: React.ElementType
}

const statsData: StatItem[] = [
  {
    id: 'projects',
    label: 'Projetos',
    value: projects.length,
    icon: FolderKanban,
  },
  {
    id: 'books-read',
    label: 'Livros Lidos',
    value: books.filter((b) => b.status === 'lido').length,
    icon: BookOpen,
  },
  {
    id: 'certifications',
    label: 'Certificações',
    value: certifications.length,
    icon: Award,
  },
]

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setCount(value)
      return
    }

    let start = 0
    const duration = 1500
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value, shouldReduceMotion])

  return <span>{count}</span>
}

function StatsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  }

  return (
    <section className="py-12 border-y border-border">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView || shouldReduceMotion ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto max-w-4xl px-4"
      >
        <div className="grid grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-6 h-6 text-accent mb-3" />
              <div className="text-4xl font-bold text-accent mb-1">
                <AnimatedCounter value={stat.value} isInView={isInView} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function StatsStatic() {
  return (
    <section className="py-12 border-y border-border">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-6 h-6 text-accent mb-3" />
              <div className="text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <StatsStatic />
  }

  return <StatsGrid />
}
