"use client";

import { ArrowUpRight, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/project-modal";
import type { Project } from "@/data/projects";
import { techColors } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const locale = useLocale() as "pt" | "en";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <article
        data-testid="project-card"
        className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
      >
        <div className="relative">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => {
                  const colors = techColors[tech] || {
                    bg: "bg-white/20",
                    text: "text-white",
                  };
                  return (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-xs rounded-md ${colors.bg} ${colors.text} font-medium backdrop-blur-sm`}
                    >
                      {tech}
                    </span>
                  );
                })}
                {project.stack.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-md bg-white/20 text-white font-medium backdrop-blur-sm">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>

          <p className="text-muted-foreground text-sm mb-4 sm:mb-6 line-clamp-2">
            {project.description[locale]}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-accent text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:bg-accent/90 transition-colors"
              >
                <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                {t("demo")}
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:bg-accent hover:border-accent hover:text-white transition-colors"
              >
                <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                {t("code")}
              </Link>
            )}
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm bg-muted hover:bg-muted/80 transition-colors"
            >
              <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              {t("details")}
            </button>
          </div>
        </div>
      </article>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
