import React from 'react'
import aboutus from '../assets/aboutus.png'

const About = () => {
  return (
    <div>
      <h1 class="text-center font-semibold text-4xl p-5 dark:text-dark-cyan">Our Winnipeg Campus</h1>
      <p class="mx-auto text-center pl-4 pr-4 dark:text-dark-cyan">Newtone programs are delivered in-person at our Downtown Winnipeg campus.</p>
      <p class="text-center w-2/3 lg:w-1/3 mx-auto pb-6 pt-6 dark:text-dark-cyan">We pride ourselves in providing a welcoming, inclusive and multi-cultural campus. Conveniently located near bus stops, cycling paths, public spaces and several local restaurants and cafés, our campus offers several amenities to compliment your studies. Learn alongside like-minded individuals and embark on your unique learning journey at Newtone.</p>
      <img src={aboutus} alt="aboutus" class="mx-auto pb-20 pl-10 pr-10"></img>
    </div>
  )
}

export default About
