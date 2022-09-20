import React from 'react'
import logo1 from './images/logodaniela2.png'
import './Footer.css'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer' >
        <div className="container">
            {/* <ul>
                <li className="nav-item-footer">
                    <a href='/'>Acasa</a>
                </li>
                <li className="nav-item-footer">
                    <a href='/'>Despre</a>
                </li>
                <li className="nav-item-footer">
                    <a href='/'>Review</a>
                </li>
                <li className="nav-item-footer">
                    <a href='/'>Demo</a>
                </li>
            </ul> */}
            <div className="bottom">
                <span className="line-footer"></span>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}  className='logo'>
                <img className='logo-footer' src={logo1} alt="logo" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer