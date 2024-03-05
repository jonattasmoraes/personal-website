'use client'

import About, { Content } from '@/components/About/about'
import { Project } from '@/components/Cards/cards'
import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import Loader from '@/components/Loading/loading'
import Projects from '@/components/Projects/projects'
import { useFetch } from '@/hooks/useFetch'

export default function Home() {
  const { data: projects } = useFetch<Project[]>(
    'https://content-api-1.onrender.com/api/project'
  )

  const { data: content } = useFetch<Content[]>(
    'https://content-api-1.onrender.com/api/content'
  )

  if (!projects || !content) {
    return <Loader />
  }

  return (
    <>
      <Header content={content} />
      <About content={content} />
      <Projects projects={projects} />
      <Footer />
    </>
  )
}
