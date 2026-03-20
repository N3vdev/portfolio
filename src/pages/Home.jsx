import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Marquee from '../sections/Marquee'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home