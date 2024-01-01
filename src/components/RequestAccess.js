import React, {useState} from 'react'

const RequestAccess = () => {
  return (
    <section className='section'>
      <div className="container mx-auto lg:mt-24">
        <div className='flex flex-col items-center text-center'>
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block mt-[50px] lg:mt-[0px] leading-snug text-black">
            ClearCare.AI is coming soon.
          </h2>
          <p className="text-gray-700 mt-8 lg:mt-4 max-w-[800px]">
            Sign up to turn your medical reports into accessible, interactive and jargon-less summaries.
          </p>
          <form action="" className="space-y-8 w-full max-w-[780px] flex flex-col items-center text-center mt-16">
            <input type="text" className='input' placeholder='Your First Name' required />
            <input type="text" className='input' placeholder='Your Last Name' required />
            <input type="email" className='input' placeholder='Your E-Mail' required />
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
              Request Access
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RequestAccess