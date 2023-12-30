import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import HeaderSimple from './components/header/HeaderSimple'
import Hero from './components/Hero'
import Functions from './components/functions/Functions'
import About from './components/about/About'
import Credits from './components/Credits'
import RequestAccess from './components/RequestAccess'
import Summary from './components/Summary'
import Footer from './components/Footer'

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
            <HeaderSimple />
            <RequestAccess />
            <Footer />
          </Route>
          <Route path='/summary'>
            <HeaderSimple />
            <Summary />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
