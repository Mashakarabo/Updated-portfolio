import React from "react";
import './Skills.css';
import 'animate.css';



import Html from '../images/html.png';
import Css from '../images/css.png';
import js from '../images/javascripticon.png';
import react from '../images/reactJS.png';
import bstrp from '../images/bstrap.png';
import Api from '../images/api (2).png';
import mysql from '../images/mySQLicon.png';
import python from '../images/pythonicon.png';
import java from '../images/javaicon.png';
import Aws from '../images/awsIcon.png';
import vsc from '../images/vscode.png';
import git from '../images/git.png';
import github from '../images/GithUP.png';
import node from '../images/node.png';
import figma from '../images/figma.png';
import skillspicload from '../images/skillsload.gif';

export const Skills = () => {
return (
	<>
	<h1 className="MySkillsContent">My Skills</h1>
	<img src={skillspicload} alt="" id="skillsloadpic"/>
	<div className="contact">

	<div className="Html animate__animated animate__zoomInUp"><img src={Html} alt="" /></div>
	<div className="Css animate__animated animate__zoomInUp"><img src={Css} alt="" /></div>
	<div className="Js animate__animated animate__zoomInUp"><img src={js} alt="" /></div>
	<div className="React animate__animated animate__zoomInUp"><img src={react} alt="" /></div>
	<div className="Bstrp animate__animated animate__zoomInUp"><img src={bstrp} alt="" /></div>
	<div className="Api animate__animated animate__zoomInUp"><img src={Api} alt="" /></div>
	<div className="Mysql animate__animated animate__zoomInUp"><img src={mysql} alt="" /></div>
	<div className="Python animate__animated animate__zoomInUp"><img src={python} alt="" /></div>
	<div className="Java animate__animated animate__zoomInUp"><img src={java} alt="" /></div>
	<div className="Aws animate__animated animate__zoomInUp"><img src={Aws} alt="" /></div>
	<div className="Vsc animate__animated animate__zoomInUp"><img src={vsc} alt="" /></div>
	<div className="Git animate__animated animate__zoomInUp"><img src={git} alt="" /></div>
	<div className="Github animate__animated animate__zoomInUp"><img src={github} alt="" /></div>
	<div className="Node animate__animated animate__zoomInUp"><img src={node} alt="" /></div>
	<div className="Figma animate__animated animate__zoomInUp"><img src={figma} alt="" /></div>
	</div>

	</>
);
};




