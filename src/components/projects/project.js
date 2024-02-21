import React from 'react'
import './project.css'
import githublogo  from '../../assets/githublogo.png'
import boometic from '../../assets/boometic.png'
import tarscars from '../../assets/tarscars.png'
function Project(){
  return (
    <div className='Projects' id='Projects'>
        <h1 className='projTitle'>Some of My Work / Projects</h1>
        <span className='projtitledesc'>Discover a curated collection of my diverse and innovative web development projects. Ranging from dynamic websites to interactive applications, each project embodies my dedication to crafting meaningful online experiences.</span>
        <div className="projectslist">
            <div className="projectlistitem">
                <img src={boometic} alt="" className="projectlistitemimg" />
                <h4 className="projhead">Fitness training website</h4>
                <span className='projectdescription'>A website connecting fitness trainers and clients is crafted with HTML, CSS, and JavaScript for the frontend, and backed by MySQL and Django for a robust database and backend system.</span>
                <a href='https://github.com/abhishekn30029/fitness-web' target='_blank' rel="noopener noreferrer"><button href="" className="gitlink" ><img src={githublogo} alt="github logo" className="guthublink" />Github</button></a>
            </div>
            <div className="projectlistitem">
                <img src={tarscars} alt="" className="projectlistitemimg" />
                <h4 className="projhead">Car service center web templete</h4>
                <span className='projectdescription'> A responsive web template for a car service center, crafted with HTML, CSS, and JavaScript. It ensures a visually appealing and user-friendly experience for clients.</span>
                <a href='https://github.com/abhishekn30029/template-for-tars-cars-cars-service-website' target='_blank' rel="noopener noreferrer" ><button href="" className="gitlink"><img src={githublogo} alt="github logo" className="guthublink" />Github</button></a>
            </div>
            <div className="projectlistitem">
                <img src={boometic} alt="" className="projectlistitemimg" />
                <h4 className="projhead">Marketing service providing website</h4>
                <span className='projectdescription'> A website developed using React.js ,HTML,CSS for structure and styling Frontend, and Email.js for managing contact forms without the necessity of a complex backend or database</span>
                <a href='https://github.com/abhishekn30029/BoomEtic' target='_blank' rel="noopener noreferrer"><button href="" className="gitlink" ><img src={githublogo} alt="github logo" className="guthublink" />Github</button></a>
            </div>
        </div>
      
    </div>
  )
}

export default Project;
