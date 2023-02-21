import React from 'react'
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";

//images
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"
import logo2 from '../assets/logo2.png'
import flex from '../assets/flex.png'
import accre from '../assets/accre.png'
import learn from '../assets/learn.png'

import {Link} from "react-router-dom";



const home = () => {
  return (
    <div>
      <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '90vmin',
      }}
      >
        <Overlay
          style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
          textAlign: 'center',
        }}>
          <div class="absolute inset-0  bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/80 sm:to-white/25"></div>
            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl font-montserrat font-medium sm:text-5xl tracking-wide">
                  English courses for a
                  <strong class="block font-extrabold font-montserrat text-light-purple">brighter future.</strong>
                </h1>
                <p class="mt-4 max-w-lg font-montserrat sm:text-xl md:text-lg sm:leading-relaxed tracking-wide pt-5">
                Discover Newtone and supercharge your communication in the classroom and beyond! 
                </p>
              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <Link to="/about" class="flex justify-center mx-auto sm:block sm:mx-0 px-10 rounded bg-white py-3 text-sm font-medium text-light-purple shadow hover:text-white hover:bg-light-purple focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          

        </Overlay>

          <Slide
            background={{
              backgroundImageSrc: hero1,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center center',
            }}
          />

          <Slide
            background={{
              backgroundImageSrc: hero2,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center center',
            }}
          />

          <Slide
            background={{
              backgroundImageSrc: hero3,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center center',
            }}
          />

          <Slide
            background={{
              backgroundImageSrc: hero4,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center center',
            }}
          />
          <Nav />
        </HeroSlider>

      {/*icons*/}

      <div class="container mx-auto mt-12 px-4">
        <h1 class="flex justify-center text-center font-montserrat align-center text-2xl sm:3xl lg:text-4xl font-bold m-5 mt-10 dark:text-dark-cyan">The Newtone Advantage</h1>
        <p class="text-center w-5/10 lg:1/4 font-montserrat mx-auto pb-10 pt-6 dark:text-dark-cyan">Whether you want to simply improve your English language skills or fulfill your Prior Learning Assessment and Recognition (PLAR) requirements to enrol in <a class="font-montserrat underline underline-offset-auto" href="https://www.robertsoncollege.com/programs/">Robertson College</a> programs, our innovative language programs will help you open up new pathways and achieve your goals.</p>
        <div class="flex flex-wrap justify-center">
          
          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div class="flex items-center justify-center mb-2">
              <img src={flex} alt="Flexibility Icon" class="w-12 h-12 mr-4" /> 
            </div>
            <h2 class="text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center">Flexibility</h2>
            <p class="text-medium p-5 font-montserrat dark:text-dark-cyan text-center">We offer affordable language programs with multiple start dates — so you can start at a time that's convenient for you.</p>
            <p class="text-medium p-5 font-montserrat dark:text-dark-cyan text-center">Small class sizes ensure that you get tailored one-on-one instruction and learn based on your preferences. </p>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div class="flex items-center justify-center mb-2">
              <img src={accre} alt="Accreditation Icon" class="w-12 h-12 mr-4" />
            </div>
            <h2 class="text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center">Accreditation</h2>
            <p class="text-medium p-5 font-montserrat dark:text-dark-cyan text-center">Our English language programs are accredited by <a class="font-montserrat underline underline-offset-auto" href="https://www.languagescanada.ca/en/">Languages Canada</a>  — Canada’s premier language organization — meaning they meet a considerable standard of excellence.</p>
            <p class="text-medium p-5 font-montserrat dark:text-dark-cyan text-center">This ensures that your English language courses are recognized anywhere in the world. </p>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div class="flex items-center justify-center mb-2">
              <img src={learn} alt="Learner Experience Icon" class="w-12 h-12 mr-4" />
            </div>
            <h2 class="text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center">Learner Experience</h2>
            <p class="text-medium p-5 font-montserrat dark:text-dark-cyan text-center">Our experienced language instructors utilize innovative teaching strategies and provide a genuine student-focused environment that helps you fast-track your success. </p>
          </div>
        </div>
      </div>
      {/*languages canada logo*/}   

      
        <div class="">
          <img src={logo2} alt="Newtone Logo" class="w-32 mx-auto pb-5" />
        </div>
        <Link to="/programs"><button class="bg-light-purple hover:bg-dark-cyan mb-20 mx-auto flex justify-center items-center text-white font-bold py-2 px-4 rounded mt-4">Discover our Programs</button></Link>
    </div>
  )
}

export default home

/* <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-montserrat font-medium sm:text-5xl">
                English courses for a
                <strong class="block font-extrabold font-montserrat text-dark-cyan">brighter future.</strong>
              </h1>
              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Discover Newtone and supercharge your communication in the classroom and beyond! 
              </p>
            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>*/