import React from 'react';
import './ContactMe.css';
import 'animate.css';
import loc from '../images/location.png';
import Phn from '../images/phone.png';
import contactGif from '../images/contact.gif';
import { useState } from 'react';
import {db} from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import ReCAPTCHA from "react-google-recaptcha";



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //google Captcha codes
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)

  function onChange(value) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }
  // the above codes ends here


  const handleSubmit = async (e) =>{
    e.preventDefault()

   await addDoc(collection(db, 'data'),{
      name,
      email,
      message
    })

    setName('');
    setEmail('');
    setMessage('');

  }

return (
	<>

	<h1 className="Contact-heading">Contact Me.</h1>
  <div class="container animate__animated animate__zoomIn">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <img src={loc} alt="" width={20} className="loc"/>
          <div class="topic">Address</div>
          <div class="text-one">lower long street</div>
          <div class="text-two">Cape Town</div>
        </div>
        <div class="phone details">
          <img src={Phn} alt="" width={20} className="Phn"/>
          <div class="topic">Phone</div>
          <div class="text-one">07156736082</div>
          <div class="text-two">0817866564</div>
        </div>
        <div class="email details">
          <img src={email} alt="" width={20} className="email" /> 
          <div class="topic">Email</div>
          <div class="text-two">mashakarabo10@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send Me a message</div>
        <p>Dont hesitate to contact me.</p>





      
      <form onSubmit={handleSubmit} >
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name="from_name" 
          value={name}
          onChange={(event)=>{
            setName(event.target.value)
          }} />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name="user_email"
          value={email}
          onChange={(event)=>{
            setEmail(event.target.value)
          }}  />
        </div>
        <div class="input-box message-box">
          <input type="textarea" placeholder="Enter your message" name="message"
          value={message} 
          onChange={(event)=>{
            setMessage(event.target.value)
          }} />
        </div>

        
        <button disabled={!isCaptchaSuccessful} onClick={handleSubmit}>Send</button>
        <ReCAPTCHA
          sitekey="6LeW-dInAAAAAH-rTg6sbtctOjjhvaMfr294T8mI" onChange={onChange} id="Nocap"/>

      </form>
    </div>
    </div>
  </div>
  <img src={contactGif} alt="" id="contact-gif-move"/>

  </>
);
};

export default Contact;
