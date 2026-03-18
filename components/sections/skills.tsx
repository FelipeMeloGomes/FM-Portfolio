"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const skills = {
  frontend: ["React & TypeScript", "Next.js", "Tailwind CSS", "Jest"],
  backend: ["PHP & Laravel", "MySQL & PostgreSQL", "Node.js", "REST APIs"],
  tools: ["Git & GitHub", "Docker", "Linux", "Figma"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function SkillsContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("skills");

  const categories = [
    { title: t("frontend"), skills: skills.frontend },
    { title: t("backend"), skills: skills.backend },
    { title: t("tools"), skills: skills.tools },
  ];

  const finalContainerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : containerVariants;

  const finalCardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : cardVariants;

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={finalContainerVariants}
        className="container mx-auto max-w-4xl px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">{t("title")}</h2>
        <p className="text-muted-foreground text-center mb-12">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={finalCardVariants}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillsStatic() {
  const t = useTranslations("skills");

  const categories = [
    { title: t("frontend"), skills: skills.frontend },
    { title: t("backend"), skills: skills.backend },
    { title: t("tools"), skills: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{t("title")}</h2>
        <p className="text-muted-foreground text-center mb-12">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SkillsStatic />;
  }

  return <SkillsContent />;
}
