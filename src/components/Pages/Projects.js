import React from "react";
import './Projects.css';
import 'animate.css';
import Gymwebsite from '../images/GymWebsite.png';
import BankWebsite from '../images/Bank website.png';
import Ehailling from '../images/E-halling.png';
import load from '../images/projectsLoad.gif';


const Projects = () => {
return (
	<>
	<h1 class="Projects-haeding">My Latest Projects</h1>
	<img src={load} alt="" id="Loadpic"/>
	<div class="team animate__animated animate__bounceInUp">
		
	<div class="card">
	   <div class="side side1">
		  <div class="img-info">
			 <img src={Gymwebsite} alt=""/>
			 <h3>GymWebsite</h3>
		  </div>
	   </div>
	   <div class="side side2">
		  <div class="img-info">
			
			 <p>This is a gym website that showcases the types of workouts you should do and
				types of food you should eat.</p>
			 <a href="https://mashakarabo.github.io/Gymapplication/">View site</a>
		  </div>
	   </div>
	</div>
	
	<div class="card">
	   <div class="side side1">
		  <div class="img-info">
			 <img src={Ehailling} alt=""/>
			 <h3>E-Hailling website</h3>
		  </div>
	   </div>
	   <div class="side side2">
		  <div class="img-info">
			
			 <p>This is a luxury shuttle website created for Cape Town Luxury shuttles business, people are 
				able to book thier luxury transportation.</p>
			 <a href="https://64ae6da95c5ca804f4b80c61--heartfelt-truffle-3febd8.netlify.app/">View site</a>
		  </div>
	   </div>
	   <hr/>
	</div>
	<div class="card">
	   <div class="side side1">
		  <div class="img-info">
			 <img src={BankWebsite} alt=""/>
			 <h3>Bank Website</h3>
		  </div>
	   </div>
	   <div class="side side2">
		  <div class="img-info">
			 <p>This is a simple Bank Website that provides the exposure to the bank to people all over the 
				world.</p>
			 <a href="https://64ae91082562b81be790ec19--clever-mermaid-534bac.netlify.app/">View site</a>
		  </div>
	   </div>
	</div>
	<hr/>
 </div>

 
	
 </>

	
);
};

export default Projects;