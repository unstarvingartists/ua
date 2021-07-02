import * as React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import LogoCloud from '../components/logo-cloud'

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Navigation />
          <Hero />
        </div>
      </div>
      <LogoCloud />
    </Layout>
  )
}
