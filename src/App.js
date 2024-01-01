import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Hero from './components/Hero'
import Functions from './components/functions/Functions'
import About from './components/about/About'
import Credits from './components/Credits'
import RequestAccess from './components/RequestAccess'
import Summary from './components/Summary'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Hero />
            <Functions />
            <About />
            <Credits />
            <Footer />
          </Route>
          <Route path='/request-access'>
            <div className='flex flex-col justify-between h-screen bg-secondary'>
              <Header />
              <RequestAccess />
              <Footer />
            </div>
          </Route>
          <Route path='/summary'>
            <div className='flex flex-col justify-between h-screen bg-secondary'>
              <Header />
              <Summary />
              <Footer />
            </div>
          </Route>
          <Route path='*'>
            <div className='flex flex-col justify-between h-screen bg-secondary'>
              <Header />
              <PageNotFound />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
