import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo1 from './images/logodaniela2.png'
import {FaBars, FaTimes } from 'react-icons/fa'
import '../components/Navbar.css'

const Navbar = () => {

    //setting mobile nav
const [click, setClick] =useState(false)
const handleClick = () =>setClick(!click)

//change nav color when scrolling
const [color, setColor] =useState(false)
const changeColor = () => {
    if(window.scrollY >= 90) {
        setColor(true)
    }else {
        setColor(false)
    }
}

window.addEventListener('scroll' , changeColor)

//close menu on click
const closeMenu = () =>setClick(false)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <nav className="navbar">
            <Link to="hero" spy={true} smooth={true}  duration={500}  className='logo'>
                <img src={logo1} alt="logo"/>
            </Link>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color:"#ffffff"}}/>) 
                : (<FaBars size={20} style={{color:"#ffffff"}} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Acasa</Link>
                </li>
                <li className="nav-item">
                    <Link to='about' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}>Despre</Link>
                </li>
                <li className="nav-item">
                    <Link to='testimonials' spy={true} smooth={true} offset={-180} duration={500} onClick={closeMenu}>Review</Link>
                </li>
                <li className="nav-item">
                    <Link to='demo' spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>Demo</Link>
                </li>
                <li className="nav-item">
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar