import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-light-blue">
    <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="h-8 mr-3" alt="Logo" />
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 dark:text-black">
            <li>
                <Link to="/" class="mr-4 hover:underline md:mr-6 ">Home</Link>
            </li>
            <li>
                <Link to="/about" class="mr-4 hover:underline md:mr-6">About</Link>
            </li>
            <li>
                <Link to="/programs" class="mr-4 hover:underline md:mr-6 ">Programs</Link>
            </li>
            <li>
                <Link to="/contact" class="hover:underline">Contact Us</Link>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-black sm:text-center dark:text-black">© 2022 Newtone School of Language. All Rights Reserved.
    </span>
</footer>
  )
}

export default Footer
