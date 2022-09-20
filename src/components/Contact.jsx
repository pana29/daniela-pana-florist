import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_euq6uqd', 'template_9r0mqtn', form.current, '6ch3zO7uTSgruNbM0')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div name='contact' className="contact">
        <form className='form' ref={form}>
            <div className='form-info'>
                <p className='info-p'>Contact</p>
                <span className="line"></span>
                <p className='info-sub'>Nu ezitati sa ma contactati trimitand formularul de mai jos si va voi contacta cat mai curand posibil.</p>
            </div>
            <div className="all-in-one">
              <div className="toate">
                <div className="div-name-input">
            <input type="text" placeholder='Nume si Prenume' name='name' className='input-name' name='user_name'/>
            </div>
            <div className="div-email-input">
            <input type="email" placeholder='Adresa Email' name='email' className='input-email' name='user_email'/>
            </div>
            <div className="div-msg-input">
            <textarea name="message" rows="7" className='message' placeholder='Mesajul Tau' name='message'></textarea>
            </div>
            <button className='btn-form' value='send' type="submit" onSubmit={sendEmail}>Trimite</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Contact