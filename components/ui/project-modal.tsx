"use client";

import { ArrowUpRight, CheckCircle2, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { techColors } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale() as "pt" | "en";
  const t = useTranslations("projects");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-accent hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {project.title}
          </h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description[locale]}
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-accent" />
              </span>
              {locale === "pt" ? "Funcionalidades" : "Features"}
            </h3>
            <ul className="grid gap-3">
              {project.features[locale].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => {
                const colors = techColors[tech] || {
                  bg: "bg-muted",
                  text: "text-muted-foreground",
                };
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 text-sm rounded-lg ${colors.bg} ${colors.text} font-medium`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
                {t("demo")}
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl font-medium hover:bg-accent hover:border-accent hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                {t("code")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
