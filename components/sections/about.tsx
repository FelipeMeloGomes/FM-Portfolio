"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function AboutContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const finalVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : variants;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={finalVariants}
        className="container mx-auto max-w-4xl px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Sobre <span className="text-accent">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              👨‍💻 Desenvolvedor Full Stack com formação em Análise e
              Desenvolvimento de Sistemas e pós-graduação em Full Stack
              Development.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              🚀 Apaixonado por tecnologia, estou sempre em busca de aprendizado
              contínuo e evolução profissional. Tenho interesse especial por
              boas práticas de código, interfaces modernas e experiências de
              usuário fluidas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              🎯 Além do universo da programação, gosto de futebol, música,
              podcasts, leitura e momentos de descanso para recarregar a
              criatividade.
            </p>
            <Link
              href="#skills"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              Minhas Skills
            </Link>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-muted rounded-2xl flex items-center justify-center">
              <span className="text-8xl">💼</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutStatic() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Sobre <span className="text-accent">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              👨‍💻 Desenvolvedor Full Stack com formação em Análise e
              Desenvolvimento de Sistemas e pós-graduação em Full Stack
              Development.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              🚀 Apaixonado por tecnologia, estou sempre em busca de aprendizado
              contínuo e evolução profissional. Tenho interesse especial por
              boas práticas de código, interfaces modernas e experiências de
              usuário fluidas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              🎯 Além do universo da programação, gosto de futebol, música,
              podcasts, leitura e momentos de descanso para recarregar a
              criatividade.
            </p>
            <Link
              href="#skills"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              Minhas Skills
            </Link>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-muted rounded-2xl flex items-center justify-center">
              <span className="text-8xl">💼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <AboutStatic />;
  }

  return <AboutContent />;
}
