'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre' },
  { href: '#carreira', label: 'Carreira' },
  { href: '/blog', label: 'Blog' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certificações' },
  { href: '#projects', label: 'Projetos' },
  { href: '#books', label: 'Livros' },
  { href: '#contact', label: 'Contato' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-background/0 border-b border-transparent'
      )}
    >
      <div className="container mx-auto max-w-4xl px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>Felipe</span>
            <span className="text-accent">Melo</span>
          </Link>

          <div className="flex items-center gap-1">
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm rounded-md transition-colors hover:text-accent',
                      pathname === item.href
                        ? 'text-accent'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
