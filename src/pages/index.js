import * as React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Hero from '../components/home/hero'
import LogoCloud from '../components/home/logo-cloud'
import Problem from '../components/home/problem'

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <LogoCloud />
      <Problem />
    </Layout>
  )
}
