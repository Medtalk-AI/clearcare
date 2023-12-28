import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Functions from './components/functions/Functions'
import About from './components/about/About'
import Credits from './components/Credits'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Functions />
      <About />
      <Credits />
      <Footer />
    </div>
  )
}

export default App
