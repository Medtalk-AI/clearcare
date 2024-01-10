import React from 'react'
import { creditsLogos } from '../data'

const Credits = () => {
  return (
    <section id='about' className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-header mt-[0px] lg:mt-0 mb-24 leading-snug text-center text-2xl lg:text-4xl">
            Built by students and alumni from
          </h2>
          <section className='grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
            {creditsLogos.map((item, index) => {
              return (
                <div className='flex justify-center align-items'>
                  <img src={item.icon} className='w-[150px] h-[50px]' alt="" />
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </section>
  )
}

export default Credits