import React from 'react';
import './ContactMe.css';
import 'animate.css';
import lokation from '../images/lokation.png';
import kall from '../images/kall.png';
import mail from '../images/mail.png';
import networkwithpins from '../images/skillsPagebackground.gif';
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
    alert('Your Data was successfully sent!!');

  }

return (
	<>
    <div className="Backgroundscreensaver" style={{ backgroundImage: `url(${networkwithpins})`,backgroundSize:'cover'}}>
    <section>
        <div className="container">
            <div class="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <ul class="info">
                        <li>
                            <span><img src={lokation} alt="" /></span>
                            <span>
                                10 Amstel Road<br />
                                Maitlant, Cape Town<br />
                                7405
                            </span>
                           
                        </li>
                        <li>
                            <span><img src={mail} alt="" /></span>
                            <span>karabo.masha@<br />younglings.africa</span>
                        </li>
                        <li>
                            <span><img src={kall} alt="" /></span>
                            <span>081-785-5654</span>
                        </li>
                    </ul>
                </div>
                <ul class="socialIcon">
                    <li><a href="#"><img src="img/1.png" alt="" /></a></li>
                    <li><a href="#"><img src="img/2.png" alt="" /></a></li>
                    <li><a href="#"><img src="img/3.png" alt="" /></a></li>
                    <li><a href="#"><img src="img/4.png" alt="" /></a></li>
                    <li><a href="#"><img src="img/5.png" alt="" /></a></li>
                </ul>
            </div>

            <div class="contactForm">
                <h2>Send a Message</h2>

                <form onSubmit={handleSubmit} >
                <div class="formBox">
                    <div class="inputBox w50">
                        <input type="text" name="" id="" required 
                        value={name}
                        onChange={(event)=>{
                          setName(event.target.value)
                        }} />
                        <span>Name</span>
                    </div>


                    <div class="inputBox w50">
                        <input type="email" name="" id="" required 
                         value={email}
                         onChange={(event)=>{
                           setEmail(event.target.value)
                         }} />
                        <span>Email</span>
                    </div>


                    <div class="inputBox w100">
                        <textarea name="" id="" required 
                         value={message} 
                         onChange={(event)=>{
                           setMessage(event.target.value)
                         }}/>
                        <span>Write Your Message Here.</span>
                    </div>

                    <div class="inputBox w100">
                        <button disabled={!isCaptchaSuccessful} onClick={handleSubmit}>Send</button>
                    </div>
                    <div className='recaptch'>
                    <ReCAPTCHA
                    sitekey="6LeW-dInAAAAAH-rTg6sbtctOjjhvaMfr294T8mI" onChange={onChange} />
                    </div>
                </div>
                </form>
            </div>
        </div>
        
    </section>
      </div>
  </>
);
};

export default Contact;
