import React from "react";
import "./Pro.css";
import "animate.css";
import ShanePic from "../images/karabo.png";
import whatsappme from "../images/replaceWhatsapp.png";
import linkedinme from "../images/replaceLi.png";
import githupme from "../images/replaceGH.png";
import followme from "../images/followMe.gif";
import ScreenSaver from "../images/backgroundscreensaver.gif";
import "animate.css";

const Pro = () => {
  const onButtonClick = () => {
    fetch("karabo Masha resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "karabo Masha resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div
        className="BackgroundSrcn"
        style={{
          backgroundImage: `url(${ScreenSaver})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="switch-to-home ">
          <div className="first-switch">
            <a href="https://api.whatsapp.com/send/?phone=27817855654&text&type=phone_number&app_absent=0">
              <img src={whatsappme} alt="" id="myicon" />
            </a>
            <a href="https://github.com/Mashakarabo">
              <img src={githupme} alt="" id="myicon" />
            </a>
            <a href="https://www.linkedin.com/in/karabo-masha-aa91b4196/">
              <img src={linkedinme} alt="" id="myicon" />
            </a>
            <img src={followme} alt="" id="followMoo" />
          </div>
          <div className="second-switch animate__animated animate__fadeInRight">
            <div className="pic">
              <img src={ShanePic} alt="" id="shanepic" />
            </div>
            <div className="Content">
              <p>
                Meticulous web developer with over year of front end experience
                and passion for responsive website design. I have hands-on
                experience in HTML, CSS, and JavaScript, And proficiency in
                modern front-end frameworks such as React, jQuery, i also have
                expreince in creating back-end for applications using Node,js
                Python, PhP, Django
              </p>
            </div>
          </div>

          <div className="hidden-content">
            <a href="0817855654">
              <img src={whatsappme} alt="" id="myicon" />
            </a>
            <a href="https://github.com/Mashakarabo">
              <img src={githupme} alt="" id="myicon" />
            </a>
            <a href="https://www.linkedin.com/in/karabo-masha-aa91b4196/">
              <img src={linkedinme} alt="" id="myicon" />
            </a>
          </div>
        </div>
        <div className="names">
          <h1>Junior Software Developer</h1>
        </div>
        <div className="clickables-one">
          <input
            type="button"
            value="Download Cv"
            onClick={onButtonClick}
            id="btninput"
          />
        </div>

        <div className="clickables-two">
          <a href="/contact">
            <input type="button" value="Get In Touch" id="btninput" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Pro;
