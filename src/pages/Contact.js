import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import "../assets/styles/conf.css"


function Contact () {

  const { t, i18n } = useTranslation();

	const languageSlice = useSelector((state) => state.language);

	useEffect(() => {
		i18n.changeLanguage(languageSlice.language);
	}, [languageSlice, i18n]);

  useEffect(() => {
    //scroll to top on load
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);


  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    programs: '',
    phone: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        programs: '',
        phone: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mgebygyp',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  if (status.submitted) {
    return (
      <div class="flex items-center justify-center h-screen">
        <div>
          <div class="flex flex-col items-center space-y-2">
          <svg
              width="115px"
              height="115px"
              viewBox="0 0 133 133"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
          >
              <g
                  id="check-group"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
              >
                      <circle
                      id="filled-circle"
                      fill="#07b481"
                      cx="66.5"
                      cy="66.5"
                      r="54.5"
                  />
                  <circle
                      id="white-circle"
                      fill="#FFFFFF"
                      cx="66.5"
                      cy="66.5"
                      r="55.5"
                  />
                  <circle
                      id="outline"
                      stroke="#07b481"
                      stroke-width="4"
                      cx="66.5"
                      cy="66.5"
                      r="54.5"
                  />
                  <polyline
                      id="check"
                      stroke="#FFFFFF"
                      stroke-width="5.5"
                      points="41 70 56 85 92 49"
                  />
              </g>
          </svg>
            <h1 class="text-2xl md:text-4xl font-montserrat font-bold">Thank You !</h1>
            <p class="text-center ml-5 mr-5 text-md md:text-xl font-medium font-montserrat pb-2 md:pb-8">Thank you, your message has been submitted.</p>
            <Link to="/" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}}
              class="inline-flex items-center px-4 py-2 text-white bg-light-purple rounded hover:bg-dark-cyan focus:outline-none focus:ring">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span class="text-lg font-montserrat font-bold">
                Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-20 sm:mt-20 sm:mb-20 md:mt-20 md:mb-20 lg:mt-20 lg:mb-20 bg-white">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <form onSubmit={handleOnSubmit}>
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold font-montserrat uppercase text-4xl text-dark-cyan">{t('started')}</h1>
              </div>
              <div>
                <p className="mt-2 flex font-montserrat text-dark-cyan">{t('details')}</p>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="firstName" onChange={handleOnChange} value={inputs.firstName} type="text" placeholder="First Name" required/>
                    
                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="lastName" onChange={handleOnChange} value={inputs.lastName} type="text" placeholder="Last Name" required/>

                <select id="programs" value={inputs.programs} onChange={handleOnChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                  <option selected>Program of Interest</option>
                  <option value="IAE1">IAE1 - High Beginner</option>
                  <option value="IAE2">IAE2 - Low Intermediate</option>
                  <option value="IAE3">IAE3 - Upper Intermediate</option>
                  <option value="IAE4">IAE4 - Advanced</option>
                  <option value="PACE">PACE</option>
                </select>
                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="email" onChange={handleOnChange} value={inputs.email} name="_replyto" type="email" placeholder="Email" required/>

                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="phone number"  type="number" placeholder="Phone" />
              </div>
                <div className="my-4">
                  <textarea placeholder="Questions?" onChange={handleOnChange} value={inputs.message} id="message" field="message" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button class="relative inline-flex items-center justify-center text-sm p-4 px-20 py-2 sm:px-16 sm:py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out bg-light-purple rounded-lg group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-dark-cyan group-hover:translate-x-0 ease">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      {!status.submitting
                      ? !status.submitted
                        ? 'LEARN ENGLISH WITH US'
                        : 'Submitted'
                      : 'Submitting...'}</span>
                    <span class="relative invisible">Button Text</span>
                  </button>
                </div>
              </div>
            </form>
              <div
                className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-dark-cyan rounded-2xl">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold font-montserrat uppercase text-4xl my-4">{t('drop_in')}</h1>
                  <p className="text-gray-400 ">{t('welcome')}
                  </p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-montserrat text-2xl">{t('address')}</h2>
                      <p className="text-gray-400">180 Main St, Winnipeg, MB R3C 1A6</p>
                    </div>
                  </div>
                  
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-montserrat text-2xl">{t('call')}</h2>
                      <p className="text-gray-400">Tel: 1-888-709-0730</p>
                      <p className="text-gray-400">Fax: 1-888-709-0730</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  )
}

export default Contact

/* old submit button
<button className="uppercase text-sm font-semibold tracking-wide bg-light-purple text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-dark-cyan" type="submit" disabled={status.submitting}>
  {!status.submitting
  ? !status.submitted
    ? 'LEARN ENGLISH WITH US'
    : 'Submitted'
  : 'Submitting...'}
</button>
*/