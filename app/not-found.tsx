'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <p className="text-muted-foreground mb-8">
            Ops! Esta página não foi encontrada.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Voltar para Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">
              Ops! Esta página não foi encontrada.
            </p>
          </div>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A página que você está procurando pode ter sido removida, 
            teve seu nome alterado ou está temporariamente indisponível.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Voltar para Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
