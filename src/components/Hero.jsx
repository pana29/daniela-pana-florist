import React from 'react'
import { Link } from 'react-scroll';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className="content">
            <p>Telefon</p>
            <a className='phone' href='tel: +40 799 966 878'> +40 799 966 878 </a>
            <p>Decorator Floral</p>
            <p>Nu ezitati sa ma contactati</p>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
            <button className="button">Contacteaza-ma</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero;