import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { CommandPalette } from "@/components/command-palette";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTopWrapper } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { Cursor } from "@/components/ui/cursor";
import { UmamiAnalytics } from "@/components/umami-analytics";

const locales = ["pt", "en"];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_URL = process.env.SITE_URL || "https://felipemelo.dev";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    pt: "Felipe Melo | Desenvolvedor Fullstack",
    en: "Felipe Melo | Fullstack Developer",
  };

  const descriptions = {
    pt: "Desenvolvedor Fullstack com formação em Análise e Desenvolvimento de Sistemas. Especializado em React, Next.js, TypeScript, Tailwind CSS, PHP e Laravel.",
    en: "Fullstack Developer with a degree in Systems Analysis and Development. Specialized in React, Next.js, TypeScript, Tailwind CSS, PHP and Laravel.",
  };

  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.pt,
      template: "%s | Felipe Melo",
    },
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.pt,
    keywords: [
      "Desenvolvedor Fullstack",
      "Frontend",
      "Backend",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "Portfolio",
    ],
    authors: [{ name: "Felipe Melo" }],
    creator: "Felipe Melo",
    publisher: "Felipe Melo",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: locale === "pt" ? SITE_URL : `${SITE_URL}/en`,
      siteName: "Felipe Melo",
      title: titles[locale as keyof typeof titles] || titles.pt,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.pt,
      images: [
        {
          url: "/assets/img/perfil.webp",
          width: 512,
          height: 512,
          alt: "Felipe Melo - Desenvolvedor Fullstack",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.pt,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.pt,
      creator: "@felipemelog",
      images: ["/assets/img/perfil.webp"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <UmamiAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ScrollProgress />
            <CommandPalette />
            {children}
          </NextIntlClientProvider>
          <ScrollToTopWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
