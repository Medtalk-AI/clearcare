import React, {useState} from 'react'
import axios from 'axios'

const Summary = () => {
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  const [response, setResponse] = useState('')

  const createSummary = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5500/summarize', {prompt})
        .then((res) => {
          setResponse(res.data)
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
          showAlert("Sorry, something went wrong. Please try again.")
          setInput('')
        })
      console.log(input)
    } catch (err) {
      console.log(err)
      showAlert("Sorry, something went wrong. Please try again.")
      setInput('')
    }
  }

  const showAlert = (msg) => {
    setAlertMsg(msg)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }

  return (
    <section className='section'>
      <form action='' className="container mx-auto lg:mt-24" onSubmit={(e) => createSummary(e)}>
      {alert && <div className="rounded-sm bg-alert text-white text-center p-4 w-full mt-[50px]" role="alert">
        <p>{alertMsg}</p>
      </div>}
        <div className='flex flex-col lg:flex-row mt-[50px]'>
          <div className="flex-1 flex flex-col lg:mr-6">
            <textarea 
              className="textarea" 
              onChange={(e) => setInput(e.target.value)}
              value={input} 
              placeholder='Enter your medical note'
              leading-relaxed
            ></textarea>
          </div>
          <div className='flex-1 mt-4 lg:mt-0 bg-secondary border-solid border-2 border-primary p-6 text-paragraph leading-relaxed'>
            Your summary
          </div>
        </div>
        <div className='flex justify-end'>
          <button className="btn btn-md text-accent bg-secondary border-solid border-accent border-2 hover:text-accent-hover hover:border-accent-hover hover:bg-secondary mt-8 transition-all duration-300 mr-6">
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