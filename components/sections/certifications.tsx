'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { certifications } from '@/data/certifications'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

function CertificationCard({ cert }: { cert: typeof certifications[0] }) {
  const shouldReduceMotion = useReducedMotion()

  const cardMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2, ease: 'easeOut' as const },
      }

  return (
    <motion.article
      variants={cardVariants}
      {...cardMotionProps}
      className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
    >
      <div className="aspect-video relative bg-muted">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
        <p className="text-xs text-muted-foreground mb-2">{cert.institution}</p>
        <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            <ExternalLink className="w-3 h-3" />
            Ver credencial
          </a>
        )}
      </div>
    </motion.article>
  )
}

function CertificationsContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.1 })
  const shouldReduceMotion = useReducedMotion()

  const finalHeaderVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : headerVariants

  const finalContainerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : containerVariants

  return (
    <section id="certifications" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={finalHeaderVariants}
        className="container mx-auto max-w-4xl px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Certifi<span className="text-accent">cações</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Certificações e cursos completados.
        </p>
      </motion.div>

      <motion.div
        variants={finalContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container mx-auto max-w-5xl px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function CertificationsStatic() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Certifi<span className="text-accent">cações</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Certificações e cursos completados.
        </p>
      </div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{cert.institution}</p>
                <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver credencial
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <CertificationsStatic />
  }

  return <CertificationsContent />
}
