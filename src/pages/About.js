import React, { useEffect } from 'react'
import aboutus from '../assets/about2.jpg'
import person from '../assets/about.png'
import aboutus2 from '../assets/aboutus.png'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

	const languageSlice = useSelector((state) => state.language);

  useEffect(() => {
    //scroll to top on load
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);

	useEffect(() => {
		i18n.changeLanguage(languageSlice.language);
	}, [languageSlice, i18n]);
  return (
    <div>
      <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-">
        <div className="lg:flex md:items-center md:justify-between">
          <div className="flex-1 lg:mr-10">
            <h2 className="text-4xl pb-4 text-center font-montserrat font-bold leading-7 text-dark-cyan sm:text-5xl sm:leading-10 sm:truncate">
              {t('our_winnipeg_campus')}
            </h2>
            <p className="mt-4 text-lg text-center font-montserrat leading-6 text-gray-500">
              {t('about_p_1')}
            </p>
            <p className="mt-4 text-lg text-center font-montserrat leading-6 text-gray-500">
              {t('about_p_2')}
            </p>
            <div className="mt-6">
              <Link
                to="/Contact"
                onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}}
                className="flex justify-center md:mb-12 lg:mb-0 font-montserrat sm:mx-52 items-center py-2 border border-transparent text-base leading-6 font-semibold rounded bg-light-purple text-md text-white shadow hover:text-white hover:bg-dark-cyan focus:outline-none focus:ring"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 lg:ml-10">
            <img
              src={aboutus2}
              alt="School"
              className="object-cover object-center w-full rounded-lg mb-5 shadow-md"
              loading='lazy'
            />
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg leading-8 font-medium text-dark-cyan">
                  {t('our_mission')}
                </span>
              </div>
            </div>
            <div className="mt-4 text-md text-center leading-7 text-gray-500">
              {t('mission')}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="mt-12 sm:mt-0">
              <img src={aboutus} alt="aboutus" loading="lazy" class="h-full rounded-lg sm:w-full mb-4"></img>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-4">
              <blockquote className="bg-white w-10/12 sm:w-auto rounded-lg sm:ml-4 shadow p-8 mb-5 sm:mr-4">
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
    </div>
  )
}

export default About
/*
    <div>
      <h1 className="text-left font-semibold text-4xl flex justify-center mt-8 pb-6 font-montserrat tracking-wide dark:text-dark-cyan">
        {t('our_winnipeg_campus')}
      </h1>
      <div className='max-w-screen-lg mt-10 mx-auto flex flex-col items-center mb-16 justify-center'>
        <div className='flex w-2/3 md:w-full flex-col-2 md:items-center'>
          <div className='md:w-1/2 lg:-ml-20 lg:mr-24'>
            <img src={aboutus} alt="aboutus" loading="lazy" class="h-full w-full mb-4"></img>
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
*/