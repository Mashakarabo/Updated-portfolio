import React from "react";
import './Skills.css';
import 'animate.css';
import Design from '../images/design.png';
import Development from '../images/development.png';
import Responsive from '../images/responsive.png';
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


	<div className="new-skills-design">
		<div className="set1">
			
			<img src={Design} alt="" width={50}/>
			
			<h2>Design and Development</h2>
			<p>Clean, Modern designs + optimized for performace, search engines</p>
		</div>
		<div className="set2"><img src={Development} alt="" width={50}/>
		<h2>Latest Technology</h2>
		<p>Combined all the technologies to a progressive website</p>
		</div>
		
		<div className="set3">
			<img src={Responsive} alt="" width={50} />
			<h2>Always Responsive</h2>
			<p>A responsive design makes your accessible to all users, regardless of thier device</p>
		</div>
	</div>


	<div className="contact">
		
	<div className="Html   animate__animated animate__fadeInTopLeft"><img src={Html} alt="" /></div>
	<div className="Css    animate__animated animate__fadeInTopLeft"><img src={Css} alt="" /></div>
	<div className="Js     animate__animated animate__fadeInTopRight"><img src={js} alt="" /></div>
	<div className="React  animate__animated animate__fadeInTopRight"><img src={react} alt="" /></div>
	<div className="Bstrp  animate__animated animate__fadeInTopLeft"><img src={bstrp} alt="" /></div>
	<div className="Api    animate__animated animate__fadeInTopLeft"><img src={Api} alt="" /></div>
	<div className="Mysql  animate__animated animate__fadeInTopRight"><img src={mysql} alt="" /></div>
	<div className="Python animate__animated animate__fadeInTopRight"><img src={python} alt="" /></div>
	<div className="Java   animate__animated animate__fadeInTopLeft"><img src={java} alt="" /></div>
	<div className="Aws    animate__animated animate__fadeInTopLeft"><img src={Aws} alt="" /></div>
	<div className="Vsc    animate__animated animate__fadeInTopRight"><img src={vsc} alt="" /></div>
	<div className="Git    animate__animated animate__fadeInTopRight"><img src={git} alt="" /></div>
	<div className="Github animate__animated animate__fadeInTopLeft"><img src={github} alt="" /></div>
	<div className="Node   animate__animated animate__fadeInTopLeft"><img src={node} alt="" /></div>
	<div className="Figma  animate__animated animate__fadeInTopRight"><img src={figma} alt="" /></div>
	</div>
	

	</>
);
};




