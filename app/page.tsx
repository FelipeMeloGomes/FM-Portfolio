import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/sections/about'
import { Timeline } from '@/components/sections/timeline'
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
  )
}
