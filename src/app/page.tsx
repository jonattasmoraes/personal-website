'use client'

import About, { Content } from '@/components/About/about'
import { Project } from '@/components/Cards/cards'
import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import Loader from '@/components/Loading/loading'
import Projects from '@/components/Projects/projects'
import { useFetch } from '@/hooks/useFetch'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const { data: projects, isFetching: projectsIsFetching } =
    useFetch<Project[]>('/project')

  const { data: content, isFetching: contentIsFetching } =
    useFetch<Content[]>('/content')

  useEffect(() => {
    if (projectsIsFetching && contentIsFetching) {
      setLoading(true)
    }
  }, [projectsIsFetching, contentIsFetching])

  return (
    <>
      {loading && <Loader content={content} />}
      <Header content={content} />
      <About content={content} />
      <Projects projects={projects} />
      <Footer />
    </>
  )
}
