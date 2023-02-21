import React from 'react'
import aboutus from '../assets/aboutus.png'
import person from '../assets/about.png'

const About = () => {
  return (
  <div className="bg-light-green flex flex-col items-center justify-center p-10">
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-4xl p-5 font-montserrat tracking-wide dark:text-dark-cyan">Our Winnipeg Campus</h1>
      <p className="mx-auto text-center p-4 font-montserrat dark:text-dark-cyan">Newtone programs are delivered in-person at our Downtown Winnipeg campus.</p>
      <p class="text-center w-9/10 lg:1/3 font-montserrat mx-auto pb-6 pt-6 dark:text-dark-cyan">We pride ourselves in providing a welcoming, inclusive and multi-cultural campus. Conveniently located near bus stops, cycling paths, public spaces and several local restaurants and cafés, our campus offers several amenities to compliment your studies. Learn alongside like-minded individuals and embark on your unique learning journey at Newtone.</p>
      <img src={aboutus} alt="aboutus" loading="lazy" class="mx-auto w-full mb-4"></img>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
        <blockquote className="bg-white rounded-lg shadow p-8 mb-5 sm:mr-4">
          <svg aria-hidden="true" class="w-10 h-10 text-dark-cyan dark:text-dark-cyan" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
          <p class="text-black font-montserrat text-lg pt-10">Newtone's English language programs were engaging and the instructors truly cared about my success. With Newtone, I was able to attain the language skills needed to meet my PLAR requirements and excel in my learning and career journey.</p>
          <p class="text-black font-montserrat pt-10 font-bold">Aaliyah</p>
        </blockquote>
        <img src={person} alt="Person" className="bg-white w-32 rounded-full shadow h-32 object-cover object-center" />
      </div>
    </div>
  </div>
  )
}

export default About

/*<div>
      <h1 class="text-center font-semibold text-4xl p-5 dark:text-dark-cyan">Our Winnipeg Campus</h1>
      <p class="mx-auto text-center pl-4 pr-4 dark:text-dark-cyan">Newtone programs are delivered in-person at our Downtown Winnipeg campus.</p>
      <p class="text-center w-2/3 lg:w-1/3 mx-auto pb-6 pt-6 dark:text-dark-cyan">We pride ourselves in providing a welcoming, inclusive and multi-cultural campus. Conveniently located near bus stops, cycling paths, public spaces and several local restaurants and cafés, our campus offers several amenities to compliment your studies. Learn alongside like-minded individuals and embark on your unique learning journey at Newtone.</p>
      <div>
        //<img src={aboutus} alt="aboutus" loading="lazy" class="mx-auto flex justify-center align-center items-center object-contain p-5"></img>
        <div class="">
          <blockquote class="text-xl italic font-medium text-gray-900 dark:text-white p-5">
              <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
              <div class="">
                <p class="text-black pt-10 lg:w-1/4">Newtone's English language programs were engaging and the instructors truly cared about my success. With Newtone, I was able to attain the language skills needed to meet my PLAR requirements and excel in my learning and career journey.</p>
                <p class="text-black pt-10 font-bold">Aaliyah</p>
              </div>        
          </blockquote>
          <img src={person} alt="person" loading="lazy" class="h-auto lg:object-cover"/>
        </div>
        
      </div>
    </div>*/