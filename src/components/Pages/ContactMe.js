import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import "animate.css";
import lokation from "../images/lokation.png";
import kall from "../images/kall.png";
import mail from "../images/mail.png";
import networkwithpins from "../images/skillsPagebackground.gif";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  

  //google Captcha codes
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false);

  function onChange(value) {
    setIsCaptchaSuccess(true);
    console.log("captcha value: ", value);
  }
  // the above codes ends here

  //handle function to send data to the firebase database
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "data"), {
      name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");
    alert('data successfully sent!!!');

    //The above code ends here

    // sending email to gmail using email.js

    emailjs
      .sendForm(
        "service_d5do3yi",
        "template_lmz8rci",
        form.current,
        "hLIwSynG0OWWal0qB"
      )
      .then(
        (result) => {
          console.log("email send!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    //The above codes ends here
  };

  return (
    <>
      <div
        className="Backgroundscreensaver"
        style={{
          backgroundImage: `url(${networkwithpins})`,
          backgroundSize: "cover",
        }}
      >
        <section>
          <div className="container">
            <div class="contactInfo animate__animated  animate__slideInLeft">
              <div>
                <h2>Contact Info</h2>
                <ul class="info">
                  <li>
                    <span>
                      <img src={lokation} alt="" />
                    </span>
                    <span>
                      South africa
                      <br />
                      Cape Town
                      <br />
                      7405
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={mail} alt="" />
                    </span>
                    <span>
                      karabo.masha@
                      <br />
                      younglings.africa
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={kall} alt="" />
                    </span>
                    <span>081-785-5654</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="contactForm animate__animated animate__slideInUp">
              <h2>Send a Message</h2>

              <form ref={form}>
                <div class="formBox">
                  <div class="inputBox w50">
                    <input
                      type="text"
                      name="from_name"
                      id=""
                      required
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />

                    <span>Name</span>
                  </div>

                  <div class="inputBox w50">
                    <input
                      type="email"
                      name="from_name"
                      id=""
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />

                    <span>Email</span>
                  </div>

                  <div class="inputBox w100">
                    <textarea
                      name="message"
                      id=""
                      required
                      value={message}
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                    />

                    <span>Write Your Message Here.</span>
                  </div>

                  <div class="inputBox w100">
                    <button
                      disabled={!isCaptchaSuccessful}
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                  <div className="recaptch">
                    <ReCAPTCHA
                      sitekey="6LfG1RwoAAAAABTCllcTsMcjETIAzzg2H49eVpG0 "
                      onChange={onChange}
                    />
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
