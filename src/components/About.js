import React from 'react'

const About = () => {
  return (
    <section id='about' className='section lg:mt-24 bg-accent'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px] leading-snug text-white">
            We started ClearCare to help our parents and relatives.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About