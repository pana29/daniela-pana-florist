import React from 'react'
import { Link } from 'react-scroll'
import './Demo.css'

const Demo = () => {
  return (
    <div className='demo' id='demo'>
        <div className="container">
            <div className="col-1">
                <p>Florile sunt expresia plina de parfum.</p>
                <p>Florile au nevoie de răbdare, muncă și atenție.</p>
                <p>Ia o pauza si miroase florile.</p>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <button className="button-demo">obtine o consultanta gratuita</button>
                </Link>
            </div>
            <div className="col-2">
            <iframe className='iframe' width='570' height='320' src='https://www.youtube.com/embed/6f842H5n5-E?autoplay=1&mute=1&loop=1&controls=0' title='Youtube video player' loop={true} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop" allowFullScreen />
            </div>
        </div>
    </div>
  )
}

export default Demo