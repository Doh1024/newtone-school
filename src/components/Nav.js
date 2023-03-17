import React, {useRef} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa"
import "./nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const hideNavbar = () =>{
		navRef.current.classList.remove("responsive_nav")
	};

	return (
		<header>		
			<Link to="/" onClick={hideNavbar}><img class='lg:ml-5' src={logo} alt="logo"/></Link>
			<nav ref={navRef} class="md:m-0 lg:mr-24">
				<Link to="/" onClick={hideNavbar}>Home</Link>
				<div class="dropdown m-0">
					<Link class="about" to="/about" onClick={hideNavbar}>About</Link>
					<div class="dropdown-content">
						<a href="/">Link 1</a>
						<a href="/">Link 2</a>
						<a href="/">Link 3</a>
					</div>				
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="-ml-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
				</div>	

				<div class="dropdown m-0">
					<Link class="program" to="/programs" onClick={hideNavbar}>Programs</Link>
					<div class="dropdown-content">
						<a href="/">Link 1</a>
						<a href="/">Link 2</a>
						<a href="/">Link 3</a>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="-ml-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
				</div>
				<Link to="/application" onClick={hideNavbar}>Application</Link>
				<Link to="/contact" onClick={hideNavbar}>Contact Us</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav

/*

*/