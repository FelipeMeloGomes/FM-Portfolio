"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { SkeletonCard } from "@/components/skeleton";
import { Tooltip } from "@/components/ui/tooltip";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
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

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("projects");

  const cardMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2, ease: "easeOut" as const },
      };

  return (
    <motion.article
      variants={cardVariants}
      {...cardMotionProps}
      className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
    >
      <div className="aspect-video relative bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <Tooltip key={tech} content={tech}>
              <span className="text-xs px-2 py-1 bg-muted rounded-md">
                {tech}
              </span>
            </Tooltip>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              {t("demo")}
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              {t("code")}
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("projects");

  const finalHeaderVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : headerVariants;

  const finalContainerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : containerVariants;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={finalHeaderVariants}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={finalContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsLoading() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {t("title")}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl">
          {t("subtitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
            <SkeletonCard key={`project-skeleton-${idx}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsStatic() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {t("title")}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Tooltip key={tech} content={tech}>
                      <span className="text-xs px-2 py-1 bg-muted rounded-md">
                        {tech}
                      </span>
                    </Tooltip>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      {t("demo")}
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t("code")}
                    </Link>
                  )}
                </div>
              </div>
            </article>
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
    return <ProjectsStatic />;
  }

  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsGrid />
    </Suspense>
  );
}
