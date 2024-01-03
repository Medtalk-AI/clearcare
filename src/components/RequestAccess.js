import React, {useState} from 'react'
import axios from 'axios'

const RequestAccess = () => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')

  /*
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      First: first,
      Last: last,
      Email: email
    }
    axios.post('https://sheet.best/api/sheets/d62da5e3-fc37-4faa-951a-a688dddb5daa', data)
      .then((response) => {
        setFirst('')
        setLast('')
        setEmail('')
      })
  }
  */

  const addUser = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5500/api/user', {
        first: first,
        last: last,
        email: email
      })
      console.log(`Data: ${res}`)
      showAlert("Thanks for signing up. We'll be in touch soon!")
    } catch (err) {
      console.log(err)
      showAlert("Sorry, something went wrong. Please try again.")
    } finally {
      setFirst('')
      setLast('')
      setEmail('')
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
      <div className="container mx-auto lg:mt-24">
        <div className='flex flex-col items-center text-center'>
          <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block mt-[50px] lg:mt-[0px] leading-snug text-black">
            ClearCare.AI is coming soon.
          </h2>
          <p className="text-gray-700 mt-8 lg:mt-4 max-w-[800px]">
            Sign up to turn your medical reports into accessible, interactive and jargon-less summaries.
          </p>
          <form action="" className="space-y-8 w-full max-w-[780px] flex flex-col items-center text-center mt-16" onSubmit={(e) => addUser(e)}>
            {alert &&
              <div className="rounded-sm bg-green-200 text-green-700 p-4 w-full" role="alert">
                <p>{alertMsg}</p>
              </div>
            }
            <input 
              type="text" 
              className='input' 
              placeholder='Your First Name' 
              required
              onChange={(e) => setFirst(e.target.value)}
              value={first}
            />
            <input 
              type="text" 
              className='input' 
              placeholder='Your Last Name' 
              required
              onChange={(e) => setLast(e.target.value)}
              value={last}
            />
            <input 
              type="email" 
              className='input' 
              placeholder='Your E-Mail' 
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
            />
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