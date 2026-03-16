import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Certifications } from '@/components/sections/certifications'
import { Projects } from '@/components/sections/projects'
import { Books } from '@/components/sections/books'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
