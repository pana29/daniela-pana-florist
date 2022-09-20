import React from 'react';
import { Link } from 'react-scroll';
import './About.css';
import daniela from './images/daniela2.JPG';
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img className="daniela-jpg" src={daniela} alt="alex" />
        <div className="col-2">
          <h2>Despre</h2>
          <span className="line"></span>
          <p>
            Floral designer care s-a desprins de sistem dupa 20 de ani de lucru
            in corporatii si a ales sa-si traiasca viata frumos, urmandu-si
            pasiunea pentru arta, flori si design.
          </p>
          <p>
            Cu totii ne dorim sa ne traim visul, sa facem profit din pasiunea pe
            care o avem si sa traim o viata plina. Fie ca visezi sa iti deschizi
            o florarie, sa lansezi noua ta agentie de organizare evenimente sau
            sa revigorezi si sa dai un aer fresh business-ului pe care il ai
            deja, calea spre success poate fi anevoiasa .
          </p>
          <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
          <button className="button">Contacteaza-ma</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
