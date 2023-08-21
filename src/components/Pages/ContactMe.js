import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import 'animate.css';
import loc from '../images/location.png';
import Phn from '../images/phone.png';
import email from '../images/email.png';
import contactGif from '../images/contact.gif';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5do3yi', 'template_lmz8rci', form.current, 'idr1pnWvR6keVFSjt')
      .then((result) => {
          console.log('message send');
      }, (error) => {
          console.log(error.text);
      });
  };

return (
	<>


  
	
	<h1 className="Contact-heading">Contact Me.</h1>

	<div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <img src={loc} alt="" width={20} className="loc animate__animated animate__zoomInLeft"/>
          <div class="topic">Address</div>
          <div class="text-one">lower long street</div>
          <div class="text-two">Cape Town</div>
        </div>
        <div class="phone details">
          <img src={Phn} alt="" width={20} className="Phn animate__animated animate__zoomInLeft"/>
          <div class="topic">Phone</div>
          <div class="text-one">07156736082</div>
          <div class="text-two">0817866564</div>
        </div>
        <div class="email details">
          <img src={email} alt="" width={20} className="email animate__animated animate__zoomInLeft" /> 
          <div class="topic">Email</div>
          <div class="text-two">mashakarabo10@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send Me a message</div>
        <p>Dont hesitate to contact me.</p>


      <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name="from_name" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name="user_email" />
        </div>
        <div class="input-box message-box">
          <input type="textarea" placeholder="Enter your message" name="message" />
        </div>
        <div class="button">
          <input type="Submit" value="Send" />
        </div>
      </form>
    </div>
    </div>
  </div>
  <img src={contactGif} alt="" id="contact-gif-move"/>

  </>
);
};

export default Contact;
