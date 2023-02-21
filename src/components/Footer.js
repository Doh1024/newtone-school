import React, {useEffect} from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"



const Footer = () => {

    useEffect(() => {
        //scroll to top on load
        window.scrollTo({top: 0, left:0, behavior: 'smooth'});
    }, []);

  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-light-blue">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 dark:text-black">
                <li>
                    <Link to="/" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} className="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
                <li>
                    <Link to="/programs" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} className="mr-4 hover:underline md:mr-6 ">Programs</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} className="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-dark-cyan lg:my-8" />
        <span className="block text-xs sm:text-sm text-black sm:text-center dark:text-black">© 2022 Newtone School of Language. All Rights Reserved.
        </span>
    </footer>
  )
}

export default Footer
