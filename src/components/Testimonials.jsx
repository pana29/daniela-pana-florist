import React from 'react'
import './Testimonials.css'
import user1 from './images/user1.png'
import user2 from './images/user2.png'
import user3 from './images/user3.png'

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
        <div className="container">
            <h2>Review</h2>
            <span className='line'></span>
            <div className="content">
                <div className="card">
                    <img src={user1} alt='user1'/>
                    <p>Cand faci lucrurile cu pasiune, dedicare si seriozitate, nu au cum sa iasa altfel decat foarte bine! Doamna florist este minunata, atenta la detalii si cerintele clientului, iar produsele finale sunt absolut superbe! Recomand cu drag!</p>
                    <p><span>Ioana</span></p>
                </div>
                <div className="card">
                    <img src={user2} alt='user2'/>
                    <p>Super de ajutor, am avut nevoie de un buchet mai special si dupa cateva intrebari scurte am primit un buchet ce arata exceptional, buchet facut pe loc. Recomand cu drag!</p>
                    <p><span>Alexandra</span></p>
                </div>
                <div className="card">
                    <img src={user3} alt='user3'/>
                    <p>Foarte mulțumit. Am primit consultanță și rezultatul a fost chiar mai bun decât as fi crezut. Soția a fost foarte încântată de buchet!</p>
                    <p><span>Claudiu</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials