import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{height: '2000px'}}></div>
      <About />
      <div style={{height: '2000px'}}></div>
      <Footer />
    </div>
  )
}

export default App
