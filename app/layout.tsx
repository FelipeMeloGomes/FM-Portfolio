import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Felipe Melo | Desenvolvedor Fullstack',
    template: '%s | Felipe Melo',
  },
  description:
    'Desenvolvedor Fullstack com formação em Análise e Desenvolvimento de Sistemas. Especializado em React, Next.js, TypeScript, Tailwind CSS, PHP e Laravel.',
  keywords: [
    'Desenvolvedor Fullstack',
    'Frontend',
    'Backend',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'PHP',
    'Laravel',
    'Portfolio',
  ],
  authors: [{ name: 'Felipe Melo' }],
  creator: 'Felipe Melo',
  icons: {
    icon: '/assets/img/logo.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://felipemelo.dev',
    title: 'Felipe Melo | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e PHP/Laravel.',
    siteName: 'Felipe Melo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Melo | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e PHP/Laravel.',
    creator: '@felipemelog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
