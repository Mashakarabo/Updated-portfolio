import React from "react";
import './Skills.css';
import 'animate.css';
import Html from '../images/html.png';
import Css from '../images/css.png';
import js from '../images/javascripticon.png';
import react from '../images/reactJS.png';
import bstrp from '../images/bstrap.png';
import mysql from '../images/mySQLicon.png';
import python from '../images/pythonicon.png';
import git from '../images/git.png';
import node from '../images/node.png';
import figma from '../images/figma.png';

import skillsPagebackground from '../images/skillsPagebackground.gif';

export const Skills = () => {
return (
	<>
        <div className="Background-screen-saver" style={{ backgroundImage: `url(${skillsPagebackground})`,backgroundRepeat: 'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
	

	 <div class="skills-section">
    <div class="skills-header">
     <h1 id="skillsheading" style={{color:"red"}}>My Skills </h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight" >
        <img src={Html} alt=""class="skills-icons"/> 
        </div>
         <h3>HTML 5</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={Css} alt=""class="skills-icons"/> 
        </div>
         <h3>Css</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={js}  alt=""class="skills-icons"/> 
        </div>
         <h3>JavaScript</h3>
        </div>
       
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={react}  alt=""class="skills-icons"/> 
        </div>
         <h3>React.js</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={bstrp}  alt=""class="skills-icons"/> 
        </div>
         <h3>Bootstrap</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={node} alt=""class="skills-icons"/> 
        </div>
         <h3>Node.js</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={mysql}  alt=""class="skills-icons"/> 
        </div>
         <h3>MySql</h3>
        </div>
       
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={python}   alt=""class="skills-icons"/> 
        </div>
         <h3>Python</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={git}   alt=""class="skills-icons"/> 
        </div>
         <h3>GIT</h3>
        </div>
        
       </div>
	   <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img animate__animated animate__rotateInDownRight">
        <img src={figma}   alt=""class="skills-icons"/> 
        </div>
         <h3>Figma</h3>
        </div>
        
       </div>
	</div>
	</div>

       </div>
	</>
);
};




