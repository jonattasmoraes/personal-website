'use client'

import About from '@/components/About/about'
import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import Projects from '@/components/Projects/projects'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
