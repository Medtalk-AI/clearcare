import React from 'react'
import {HashLink, NavHashLink} from 'react-router-hash-link'
import {navigation} from '../data'

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-8 text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li className="hover:text-accent cursor-pointer" key={index}>
              <NavHashLink smooth to={`/#${item.href}`} activeClassName='active' className='transition-all duration-300'>{item.name}</NavHashLink>
            </li>
          )
        })}
        <li className="hover:text-accent cursor-pointer">
          <HashLink smooth to='/request-access'>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
              Sign Up
            </button>
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav