import React from 'react'
import {HashLink} from 'react-router-hash-link'

const PageNotFound = () => {
  return (
    <section className='section'>
      <div className="container mx-auto lg:mt-24">
        <div className='flex flex-col items-center text-center'>
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block mt-[50px] lg:mt-[0px] leading-snug text-black">
            Sorry, we can't find that page.
          </h2>
          <p className="text-gray-700 mt-8 lg:mt-4 max-w-[800px]">
            Please click the button below to return to our homepage.
          </p>
          <HashLink smooth to='/#home' className='mt-8 lg:mt-16'>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
              Go To Homepage
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound