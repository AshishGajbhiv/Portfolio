import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import GridBackground from './components/GridBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div>
        <GridBackground />
        
        <div className="relative z-10 text-white pt-20">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App