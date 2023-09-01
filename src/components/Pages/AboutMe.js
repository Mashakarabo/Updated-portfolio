import React from "react";
import backgrounddots from "../images/gdots.gif";
import newaboutmepic from "../images/mYabouTpiC.png"
import AboutScreenSaverBackground from '../images/backgroundscreensaverSecond.gif';
import './AboutMe.css';
import 'animate.css';

export const AboutMe = () => {


return (
	<>
    <div className="Background-screen-saver" style={{ backgroundImage: `url(${AboutScreenSaverBackground})`,backgroundRepeat: 'no-repeat'}}>
		
	<div className="AboutMe-content">
		
		<div className="bio animate__animated animate__fadeInDown">
		
			<p>
			    <h1 id="aboutmeheading">About Me.</h1>
			    As a Software developer, i have gained comprehensive knoweledge of 
			    several programming languages like HTML,CSS,JavaScript,Bootstrap,PHP,
			    Python and Java.Through my experience, i have become skilled in designing
			    and developing front-end and back-end functionality for web applications. 
			    My expertise in these technologies has allowed me to create sophisticated user 
			    interfaces, intergrate databases, and streamline server-side coding to develop
			    robust and unique web applications.Overall, my experience and skills 
			    enables me to efficiently deliver innovative IT solutions to meet the
			    evolving demands of client.
			</p>
		</div>

		<div className="About-picture animate__animated animate__fadeInDown">
			<img src={newaboutmepic} alt="" id="shanepix" />
			<img src={backgrounddots} alt="" id="bgdots" />		
		</div>
		
	
	</div>
	<div className="numbersDisplay">
        <div className="Experince">
            <h1>
                    1+<br/>
                    <span>
                        Experince
                    </span>
            </h1>
        </div>
        <div className="Live-Projects">
            <h1>
                2+<br/>
                <span>
                    Live Projects
                </span>
            </h1>
        </div>
        <div className="WorkedON">
            <h1>
                16+<br/>
                <span>
                    worked on
                </span>
            </h1>
        </div>
    </div>

    </div>
	</>
);
};


