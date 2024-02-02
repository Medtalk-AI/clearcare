import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import axios from 'axios'

const Summary = () => {
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  const [response, setResponse] = useState('')

  const createSummary = async (e) => {
    e.preventDefault()
    if (input === '') return
    try {
      await axios.post('http://localhost:5500/summarize', { input })
        .then((res) => {
          setResponse(res.data)
          showAlert("Your note has been summarized.")
        })
        .catch((err) => {
          console.log(err)
          showAlert("Sorry, something went wrong. Please try again.")
          setInput('')
          setResponse('')
        })
    } catch (err) {
      console.log(err)
      showAlert("Sorry, something went wrong. Please try again.")
      setInput('')
      setResponse('')
    }
  }

  const showAlert = (msg) => {
    setAlertMsg(msg)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }

  const handleClickX = () => {
    setInput('')
    setResponse('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(response)
    showAlert('Your summary has been copied.')
  }

  return (
    <section className='section'>
      <form action='' className="container mx-auto lg:mt-24" onSubmit={(e) => createSummary(e)}>
        {alert && <div className="rounded-sm bg-alert text-white text-center p-4 w-full mt-[50px]" role="alert">
          <p>{alertMsg}</p>
        </div>}
        <div className='flex flex-col lg:flex-row mt-[50px]'>
          <div className="flex-1 flex lg:mr-6 bg-primary">
            <textarea
              className="textarea"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder='Enter your medical note'
              leading-relaxed
            ></textarea>
            {input &&
              <div onClick={() => handleClickX()} className="cursor-pointer m-6">
                <XIcon className='w-8 h-8 text-accent hover:text-accent-hover' />
              </div>
            }
          </div>
          <div className='flex-1 mt-4 lg:mt-0 bg-secondary border-solid border-2 border-primary p-6 text-paragraph leading-relaxed'>
            {response === '' ? 'Your summary' : response}
          </div>
        </div>
        <div className='flex justify-end'>
          <button type='button' onClick={() => handleCopy()} className="btn btn-md text-paragraph bg-secondary border-solid border-paragraph border-2 hover:bg-secondary mt-8 transition-all duration-300 mr-6">
            Copy
          </button>
          <button className="btn btn-md bg-accent hover:bg-accent-hover mt-8 transition-all duration-300">
            Summarize
          </button>
        </div>
      </form>
    </section>
  )
}

export default Summary