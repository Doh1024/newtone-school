import React from 'react'
import {useRef} from "react"
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
			<nav ref={navRef}>
				<Link to="/" onClick={hideNavbar}>Home</Link>
				<Link to="/about" onClick={hideNavbar}>About</Link>
				<Link to="/programs" onClick={hideNavbar}>Programs</Link>
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