import React, {useEffect} from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
//language selector
import { useDispatch } from 'react-redux';
import { setLangauge } from '../store/reducers/languageSlice';

const Footer = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        //scroll to top on load
        window.scrollTo({top: 0, left:0, behavior: 'smooth'});
    }, []);

  return (
    <footer class=" p-4 bg-white sm:p-6 dark:bg-light-blue">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} class="h-12 mr-3" alt="logo" />
                </Link>
                <div class="relative inline-flex">
                    <svg class="w-2 h-2 mt-9 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select className='mt-5 bg-light-blue border border-dark-cyan rounded-full text-gray-600 h-10 pl-5 pr-10 hover:border-gray-400 focus:outline-none appearance-none' onChange={(e) => { dispatch(setLangauge(e.target.value));}}>
                        <option value='en'>English</option>
                        <option value='fr'>Français</option>
                        <option value='sp'>Español</option>
                        <option value='kr'>한국어</option>
                        <option value='vn'>người việt nam</option>
                        <option value='chS'>普通话</option>
                        <option value='chT'>廣東話</option>
                    </select>
                </div>
                
                <div class="sm:flex sm:items-center sm:justify-between mt-5">
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="https://twitter.com/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3 md:grid-cols-5">
                <div>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-8">
                            <Link to="/" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} class="mb-6 text-sm font-semibold text-gray-900 uppercase hover:underline dark:text-dark-cyan">Home</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                        <li>
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-8">
                            <Link to="/about" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} class="mb-6 text-sm font-semibold text-gray-900 uppercase hover:underline dark:text-dark-cyan">About</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                        <li>
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-8">
                            <Link to="/programs" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} class="mb-6 text-sm font-semibold text-gray-900 uppercase hover:underline dark:text-dark-cyan">Programs</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                        <li>
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-8">
                            <Link onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} class="mb-6 text-sm font-semibold text-gray-900 uppercase hover:underline dark:text-dark-cyan">Application</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                        <li>
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-8">
                            <Link to="/contact" onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});}} class="mb-6 text-sm font-semibold text-gray-900 uppercase hover:underline dark:text-dark-cyan">Contact us</Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                        <li>
                            <Link to="/" class="hover:underline">placeholder</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Newtone School of Language. All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer

/*    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-light-blue">
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
    </footer>*/ 