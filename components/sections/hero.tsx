"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useConfetti } from "@/hooks/use-confetti";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const _isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("hero");
  const { fireConfetti } = useConfetti();

  const itemVariantsReduced = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const avatarVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const },
        },
      };

  const socialVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.8, ease: "easeOut" as const },
        },
      };

  return (
    <section id="home" className="min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <m.div
            ref={ref}
            variants={
              shouldReduceMotion ? itemVariantsReduced : containerVariants
            }
            initial="hidden"
            animate="visible"
          >
            <m.p variants={itemVariants} className="text-muted-foreground mb-4">
              {t("greeting")} 👋
            </m.p>
            <m.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {t("name")}
            </m.h1>
            <m.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-accent mb-6"
            >
              {t("role")}
            </m.h2>
            <m.p
              variants={itemVariants}
              className="text-muted-foreground mb-8 max-w-md"
            >
              {t("description")}
            </m.p>
            <m.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                {t("viewProjects")}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                {t("contactMe")}
              </Link>
              <a
                href="/assets/FelipeMeloGomesDesenvolvedorFullStack.docx"
                download="FelipeMeloGomesDesenvolvedorFullStack.docx"
                onClick={fireConfetti}
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                {t("downloadCV")}
              </a>
            </m.div>
          </m.div>

          <m.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border">
                <Image
                  src="/assets/img/perfil.jpg"
                  alt="Felipe Melo - Desenvolvedor Fullstack"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>
            </div>
          </m.div>
        </div>

        <m.div
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-6 mt-12 justify-center md:justify-start"
        >
          <Link
            href="https://github.com/FelipeMelogomes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipemelog/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:felipe@example.com"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}

function HeroStatic() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-4">{t("greeting")} 👋</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("name")}</h1>
            <h2 className="text-xl md:text-2xl text-accent mb-6">
              {t("role")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                {t("viewProjects")}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                {t("contactMe")}
              </Link>
              <a
                href="/assets/FelipeMeloGomesDesenvolvedorFullStack.docx"
                download="FelipeMeloGomesDesenvolvedorFullStack.docx"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                {t("downloadCV")}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border">
                <Image
                  src="/assets/img/perfil.jpg"
                  alt="Felipe Melo - Desenvolvedor Fullstack"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-12 justify-center md:justify-start">
          <Link
            href="https://github.com/FelipeMelogomes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipemelog/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:felipe@example.com"
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <HeroStatic />;
  }

  return <HeroContent />;
}
