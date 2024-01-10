import React from 'react'
import {aboutInfo} from '../../data'

const AboutInfographic = () => {
  return (
    <section id='about' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className='flex flex-col lg:flex-row'>
            {aboutInfo.map((item, index) => {
              return (
                <div key={index} className='flex items-center text-center'>
                  <div className='mb-8 text-center w-full'>
                    <div className='flex flex-col justify-center items-center py-6'>
                      <img src={item.icon} className='w-[100px] h-[100px] mt-6' alt="" />
                      <p className="text-paragraph mt-8 lg:mt-16 max-w-[400px] mx-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-accent mt-[50px] lg:mt-16 leading-snug text-center">
            We aim to change that.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default AboutInfographic