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

	return (
		<header>
			<img src={logo} alt="logo"/>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/programs">Programs</Link>
				<Link to="/contact">Contact Us</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
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
