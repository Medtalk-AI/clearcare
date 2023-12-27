import React from 'react'
import {Link} from 'react-scroll'
import {navigation} from '../data'

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-8 text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li className="hover:text-accent cursor-pointer" key={index}>
              <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>{item.name}</Link>
            </li>
          )
        })}
        <li className="hover:text-accent cursor-pointer">
          <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav