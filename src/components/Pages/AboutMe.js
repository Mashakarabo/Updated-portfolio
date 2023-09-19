import React from "react";
import backgrounddots from "../images/gdots.gif";
import newaboutmepic from "../images/mYabouTpiC.png";
import AboutScreenSaverBackground from "../images/backgroundscreensaverSecond.gif";
import "./AboutMe.css";
import "animate.css";

export const AboutMe = () => {
  return (
    <>
      <div
        className="Background-screen-saver"
        style={{
          backgroundImage: `url(${AboutScreenSaverBackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="AboutMe-content">
          <div className="bio animate__animated animate__fadeInDown">
            <p>
              <h1 id="aboutmeheading">About Me.</h1>
              As a Software Developer, I have cultivated an extensive
              proficiency in various programming languages, including HTML, CSS,
              JavaScript, Bootstrap, PHP, Python, and Java. Over the course of
              my career, I have honed my abilities in crafting both front-end
              and back-end features for web applications. My adeptness with
              these technologies has empowered me to craft intricate user
              interfaces, seamlessly integrate databases, and optimize
              server-side code, resulting in the creation of robust and
              distinctive web applications. Collectively, my experience and
              skill set enable me to efficiently deliver innovative IT solutions
              that align with the ever-changing requirements of clients..
            </p>
          </div>
          <div className="Numbershidden-content animate__animated animate__slideInLeft">
            <p id="numbercounter">
              <em style={{ fontSize: "20px", color: "teal" }}>Experience</em>
            </p>
            <p id="secondcounter">
              <em style={{ fontSize: "15px", color: "teal" }}>Live Projects</em>
            </p>
            <p id="thirdcounter">
              <em style={{ fontSize: "10px", color: "teal" }}>worked On</em>
            </p>
          </div>

          <div className="About-picture animate__animated animate__fadeInDown">
            <img src={newaboutmepic} alt="" id="shanepix" />
            <img src={backgrounddots} alt="" id="bgdots" />
          </div>
        </div>
        <div className="numbersDisplay animate__animated animate__slideInLeft">
          <div className="Experince">
            <h1>
              1+
              <br />
              <span>Experince</span>
            </h1>
          </div>
          <div className="Live-Projects animate__animated animate__slideInLeft">
            <h1>
              5+
              <br />
              <span>Live Projects</span>
            </h1>
          </div>
          <div className="WorkedON animate__animated animate__slideInLeft">
            <h1>
              20+
              <br />
              <span>worked on</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
