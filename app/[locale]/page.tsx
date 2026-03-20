"use client";

import dynamic from "next/dynamic";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import {
  SkeletonBookCard,
  SkeletonCard,
  SkeletonCertCard,
} from "@/components/skeleton";
import { Stats } from "@/components/stats";

const Books = dynamic(
  () => import("@/components/sections/books").then((mod) => mod.Books),
  {
    loading: () => (
      <div className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="h-8 w-48 mx-auto mb-12 bg-muted animate-pulse rounded" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
              <SkeletonBookCard key={`book-skeleton-${i}`} />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Certifications = dynamic(
  () =>
    import("@/components/sections/certifications").then(
      (mod) => mod.Certifications
    ),
  {
    loading: () => (
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="h-8 w-48 mx-auto mb-12 bg-muted animate-pulse rounded" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
              <SkeletonCertCard key={`cert-skeleton-${i}`} />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  {
    loading: () => (
      <div className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="h-8 w-48 mx-auto mb-12 bg-muted animate-pulse rounded" />
          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loaders are static placeholders
              <SkeletonCard key={`project-skeleton-${i}`} />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  {
    loading: () => (
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="h-8 w-48 mx-auto mb-12 bg-muted animate-pulse rounded" />
        </div>
      </div>
    ),
  }
);

const Timeline = dynamic(
  () => import("@/components/sections/timeline").then((mod) => mod.Timeline),
  {
    loading: () => (
      <div className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="h-8 w-48 mx-auto mb-12 bg-muted animate-pulse rounded" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`timeline-skeleton-${String.fromCharCode(97 + i)}`}
                className="h-24 bg-muted animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Skills />
        <Certifications />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
