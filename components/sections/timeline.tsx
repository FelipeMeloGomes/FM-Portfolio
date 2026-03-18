'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Briefcase, GraduationCap, Star } from 'lucide-react'
import { timeline, type TimelineItem } from '@/src/data/timeline'
import { AnimatedSection } from '@/components/animations'

const typeConfig = {
  work: {
    icon: Briefcase,
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 dark:bg-blue-400/10',
  },
  education: {
    icon: GraduationCap,
    color: 'text-green-500 dark:text-green-400',
    bgColor: 'bg-green-500/10 dark:bg-green-400/10',
  },
  milestone: {
    icon: Star,
    color: 'text-yellow-500 dark:text-yellow-400',
    bgColor: 'bg-yellow-500/10 dark:bg-yellow-400/10',
  },
}

function TimelineItemComponent({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  const config = typeConfig[item.type]
  const Icon = config.icon

  const content = (
    <div
      ref={ref}
      className={`relative pl-8 sm:pl-12 ${index !== timeline.length - 1 ? 'pb-8' : ''}`}
    >
      {index !== timeline.length - 1 && (
        <div className="absolute left-[11px] sm:left-[15px] top-10 bottom-0 w-[2px] bg-border" />
      )}

      <div
        className={`absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${config.bgColor}`}
      >
        <Icon className={`w-3.5 h-3.5 ${config.color}`} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
        <span className="text-sm font-mono text-muted-foreground">
          {item.year}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
      <p className="text-sm text-muted-foreground/80 leading-relaxed">
        {item.description}
      </p>
    </div>
  )

  if (shouldReduceMotion) {
    return content
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  )
}

export function Timeline() {
  return (
    <AnimatedSection id="carreira" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Carreira
          </h2>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItemComponent
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
