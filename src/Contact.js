import React from 'react'
import emailjs from '@emailjs/browser';
import './components/myStyles.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from 'react';
import whatsApp from './images/whatsapp.png';
import twitter from './images/twitter.png';
import Navbar from './components/Navbar';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_uqjpgso', 'template_289o4y8', form.current, 'z5Y1_IATEo-V_ABhc')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    },
     (error) => {
        console.log(error.text);
    });
};
useEffect(() => {
  Aos.init({ duration: 2000 });
}, [])
return (
  <>
  <Navbar />
  <div className='form' id='message'>
  <div className='social'>
      <div>
        <img src={whatsApp} alt='' />
        <img src={twitter} alt='' />
      </div>
      <h4>Contact us via</h4>
    </div>
    
      <div className='f-middle'>
          
          <div data-aos="fade-up">
              <span>Send Me A Message</span>
          </div>
          
          <div data-aos="fade-up" className='f-form'>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Name' name="user_name" className='f-name'/>
              <input type="email" name="user_email" placeholder='Email' className='f-email' />
              <textarea name="message" placeholder='Message'/>
              <input type="submit" value="Send" className='send'/>
              <p>{done && "Thanking For Contacting Me, i will get back to you soon..."}</p>
              </form>
          </div>
      </div>

  </div>
  </>
)
}

export default Contact