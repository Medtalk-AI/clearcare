import React, {useState} from 'react'
import {HashLink, NavHashLink} from 'react-router-hash-link'
import {navigation} from '../data'
import {XIcon, MenuAlt3Icon} from '@heroicons/react/outline'
import {motion} from 'framer-motion'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }
  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <nav className='relative'>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-black">
        <MenuAlt3Icon style={{color: '#1f1a50'}} className='w-8 h-8' />
      </div>
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      >
      </motion.div>
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <XIcon className='w-8 h-8 text-white' />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8'>
              <NavHashLink smooth to={`/#${item.href}`} activeClassName='active' className='cursor-pointer text-white capitalize' onClick={() => setIsOpen(false)}>{item.name}</NavHashLink>
            </li>
          )
        })}
        <HashLink smooth to='/request-access'>
          <button className='text-white border-2 border-white py-4 px-7 rounded-sm hover:bg-accent-hover transition-all'>
            Sign Up
          </button>
        </HashLink>
      </motion.ul>
    </nav >
  )
}

export default NavMobile