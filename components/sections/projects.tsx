"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { SkeletonCard } from "@/components/skeleton";
import { ProjectsGrid } from "@/components/ui/projects-grid";
import { projects } from "@/data/projects";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function ProjectsContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("projects");

  const finalHeaderVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : headerVariants;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <m.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={finalHeaderVariants}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </m.div>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}

function ProjectsLoading() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
            <SkeletonCard key={`project-skeleton-${idx}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ProjectsLoading />;
  }

  return <ProjectsContent />;
}
