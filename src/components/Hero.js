import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Hero = () => {
  return (
    <section id='home' className='section'>
      <div className="container mx-auto lg:mt-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-header mt-[50px] lg:mt-[0px] leading-snug">
            Simplify your medical notes.
            <br />
            Less jargon, less stress.
          </h2>
          <HashLink smooth to='/summary'>
            <button className="btn btn-md bg-accent mt-8 lg:mt-16 hover:bg-accent-hover transition-all">
              Try Our Demo
            </button>
          </HashLink>
          <p className="text-paragraph mt-8 lg:mt-16 max-w-[800px] leading-relaxed">
            ClearCare.AI is a one-stop solution to provide efficient communication and increased accessibility towards health conditions, lab results, imaging, doctor's notes and medical summaries.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero