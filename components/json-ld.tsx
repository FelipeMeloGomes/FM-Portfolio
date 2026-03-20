import type { Person, WithContext } from "schema-dts";

export function JsonLd({ locale }: { locale: string }) {
  const isPt = locale === "pt";

  const schema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felipe Melo",
    url: "https://felipemelo.dev",
    image: "https://felipemelo.dev/assets/img/perfil.webp",
    jobTitle: isPt ? "Desenvolvedor Fullstack" : "Fullstack Developer",
    description: isPt
      ? "Desenvolvedor Fullstack com formação em Análise e Desenvolvimento de Sistemas. Especializado em React, Next.js, TypeScript, PHP e Laravel."
      : "Fullstack Developer with a degree in Systems Analysis and Development. Specialized in React, Next.js, TypeScript, PHP and Laravel.",
    email: "mailto:felipemelog@gmail.com",
    sameAs: [
      "https://github.com/FelipeMeloGomes",
      "https://www.linkedin.com/in/felipemelogomes",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Node.js",
    ],
    nationality: {
      "@type": "Country",
      name: "Brazil",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
