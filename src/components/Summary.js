import React from 'react'

const Summary = () => {
  return (
    <section className='section'>
      <div className="container mx-auto lg:mt-24">
        <div className='flex flex-col lg:flex-row mt-[50px]'>
          <div className="flex-1 flex flex-col items-end">
            <textarea className="textarea" placeholder='Enter your medical note'></textarea>
            <button className="btn btn-md bg-accent hover:bg-accent-hover mt-8 transition-all duration-300">
              Simplify
            </button>
          </div>
          <div className='flex-1'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary