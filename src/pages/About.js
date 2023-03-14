import React, { useEffect } from 'react'
import aboutus from '../assets/aboutus.png'
import person from '../assets/about.png'

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

	const languageSlice = useSelector((state) => state.language);

	useEffect(() => {
		i18n.changeLanguage(languageSlice.language);
	}, [languageSlice, i18n]);
  return (
    <div>
      <div className='max-w-screen-lg mt-10 mx-auto flex flex-col items-center mb-16 justify-center'>
        <div className='flex w-2/3 md:w-full flex-col-2 md:items-center'>
          <div className='md:w-1/2 lg:-ml-20 lg:mr-24'>
            <img src={aboutus} alt="aboutus" loading="lazy" class="mx-auto w-full mb-4"></img>
            <h1 className="text-left font-semibold text-4xl pb-6 font-montserrat tracking-wide dark:text-dark-cyan">
              {t('our_winnipeg_campus')}
            </h1>
            <p className="mx-auto text-left font-montserrat dark:text-dark-cyan">
              {t('about_p_1')}
            </p>
            <p className="text-left w-9/10 lg:1/3 font-montserrat mx-auto pb-6 pt-6 dark:text-dark-cyan">
              {t('about_p_2')}
            </p>
          </div>
          <div className='md:w-1/2 md:ml-20 md:-mr-20 flex items-center justify-center'>
            <div className="flex flex-col md:flex-row justify-center items-center mb-4">
              <blockquote className="bg-white rounded-lg shadow p-8 mb-5 sm:mr-4">
                <svg aria-hidden="true" class="w-10 h-10 text-dark-cyan dark:text-dark-cyan" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <p className="text-black font-montserrat text-lg pt-10">
                  {t('quote')}
                </p>
                <p className="text-black font-montserrat leading-4 pt-10 font-bold">Aaliyah</p>
              </blockquote>
              <img src={person} alt="Person" className="bg-white w-32 rounded-full shadow h-32 object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default About
/*
    
    <div className="bg-gray-100 flex flex-col items-center justify-center p-10">
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-4xl p-5 font-montserrat tracking-wide dark:text-dark-cyan">Our Winnipeg Campus</h1>
      <p className="mx-auto text-center p-4 font-montserrat dark:text-dark-cyan">Newtone programs are delivered in-person at our Downtown Winnipeg campus.</p>
      <p class="text-center w-9/10 lg:1/3 font-montserrat mx-auto pb-6 pt-6 dark:text-dark-cyan">We pride ourselves in providing a welcoming, inclusive and multi-cultural campus. Conveniently located near bus stops, cycling paths, public spaces and several local restaurants and cafés, our campus offers several amenities to compliment your studies. Learn alongside like-minded individuals and embark on your unique learning journey at Newtone.</p>
      <img src={aboutus} alt="aboutus" loading="lazy" class="mx-auto w-full mb-4"></img>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
        <blockquote className="bg-white rounded-lg shadow p-8 mb-5 sm:mr-4">
          <svg aria-hidden="true" class="w-10 h-10 text-dark-cyan dark:text-dark-cyan" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
          <p class="text-black font-montserrat text-lg pt-10">Newtone's English language programs were engaging and the instructors truly cared about my success. With Newtone, I was able to attain the language skills needed to meet my PLAR requirements and excel in my learning and career journey.</p>
          <p class="text-black font-montserrat leading-4 pt-10 font-bold">Aaliyah</p>
        </blockquote>
        <img src={person} alt="Person" className="bg-white w-32 rounded-full shadow h-32 object-cover object-center" />
      </div>
    </div>
  </div>*/