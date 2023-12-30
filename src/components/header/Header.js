import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import Nav from '../Nav'
import NavMobile from '../NavMobile'
// Import Logo

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-secondary h-20' : 'h-24'} flex items-center fixed top-0 w-full z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link to='home' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300 font-bold text-accent cursor-pointer'>ClearCare.AI</Link>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header