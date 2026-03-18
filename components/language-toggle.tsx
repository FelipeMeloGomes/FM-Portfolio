"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 px-2 py-1.5 text-sm rounded-md hover:bg-muted transition-colors"
      aria-label={
        locale === "pt" ? "Switch to English" : "Mudar para Português"
      }
    >
      <motion.span
        key="pt"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={locale === "pt" ? "font-semibold" : "text-muted-foreground"}
      >
        PT
      </motion.span>
      <span className="text-muted-foreground">|</span>
      <motion.span
        key="en"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={locale === "en" ? "font-semibold" : "text-muted-foreground"}
      >
        EN
      </motion.span>
    </button>
  );
}
