"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function ContactContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("contact");

  const finalVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : variants;

  const links = [
    {
      href: "https://github.com/FelipeMelogomes",
      icon: Github,
      label: t("github"),
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/felipemelog/",
      icon: Linkedin,
      label: t("linkedin"),
      external: true,
    },
    {
      href: "mailto:felipe@example.com",
      icon: Mail,
      label: t("email"),
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={finalVariants}
        className="container mx-auto max-w-4xl px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">{t("title")}</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : 0.1 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                <link.icon className="w-5 h-5" />
                {link.label}
                {link.external && <ArrowUpRight className="w-4 h-4" />}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactStatic() {
  const t = useTranslations("contact");

  const links = [
    {
      href: "https://github.com/FelipeMelogomes",
      icon: Github,
      label: t("github"),
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/felipemelog/",
      icon: Linkedin,
      label: t("linkedin"),
      external: true,
    },
    {
      href: "mailto:felipe@example.com",
      icon: Mail,
      label: t("email"),
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{t("title")}</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
              {link.external && <ArrowUpRight className="w-4 h-4" />}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ContactStatic />;
  }

  return <ContactContent />;
}
