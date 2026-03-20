"use client";

import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2, Send, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const t = useTranslations("contact");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(
        // biome-ignore lint/style/noNonNullAssertion: env vars are set in .env.local
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        // biome-ignore lint/style/noNonNullAssertion: env vars are set in .env.local
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        // biome-ignore lint/style/noNonNullAssertion: env vars are set in .env.local
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        name="from_name"
        required
        placeholder={t("form.name")}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
      />
      <input
        type="email"
        name="from_email"
        required
        placeholder={t("form.email")}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
      />
      <input
        type="text"
        name="subject"
        required
        placeholder={t("form.subject")}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder={t("form.message")}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("form.sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("form.send")}
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-500">
          <CheckCircle className="w-4 h-4" />
          {t("form.success")}
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500">
          <XCircle className="w-4 h-4" />
          {t("form.error")}
        </div>
      )}
    </form>
  );
}
