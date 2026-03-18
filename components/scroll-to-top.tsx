"use client";

import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollToTop from "react-scroll-to-top";

export function ScrollToTopWrapper() {
  const t = useTranslations("scrollToTop");

  return (
    <ScrollToTop
      smooth
      top={300}
      component={<ArrowUp size={20} />}
      aria-label={t("label")}
      style={{
        background: "hsl(var(--accent))",
        color: "hsl(var(--accent-foreground))",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        border: "none",
        cursor: "pointer",
        zIndex: 99999,
        bottom: "24px",
        right: "24px",
      }}
    />
  );
}
