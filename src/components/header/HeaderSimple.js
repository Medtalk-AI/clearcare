import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'

const HeaderSimple = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-secondary h-20' : 'h-24'} flex items-center fixed top-0 w-full z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-left">
        <Link to='home' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300 font-bold text-accent cursor-pointer'>ClearCare.AI</Link>
      </div>
    </header>
  )
}

export default HeaderSimple