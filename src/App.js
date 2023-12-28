import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/about/About'
import Credits from './components/Credits'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{height: '2000px'}}></div>
      <About />
      <Credits />
      <Footer />
    </div>
  )
}

export default App
