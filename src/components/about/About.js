import React from 'react'
import AboutInfographic from './AboutInfographic'

const About = () => {
  return (
    <>
      <section id='about' className='section bg-accent'>
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block mt-[0px] lg:mt-[0px] leading-snug text-white">
              We started ClearCare to help our parents and relatives.
            </h2>
          </div>
        </div>
      </section>
      <AboutInfographic />
    </>
  )
}

export default About