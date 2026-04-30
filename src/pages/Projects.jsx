import React from 'react'
import './projects.css'

import project1 from '../assets/cashflow.png'
import project2 from '../assets/teamForge.png'
import project3 from '../assets/NikPromo2-v1.mp4'
import project4 from '../assets/2.jpeg'

const Projects = () => {
  return (
    <div className="projects">
      <div className='projects-content'>
        <div className="projects-text">
          <h5>/ Portfolio Projects</h5>
          <h3>Selected <span>Works Samples</span></h3>
          <p>A focused set of projects that reflect how I think, build, and solve problems across the stack.</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-media-wrapper">
              <img src={project1} alt="Project 1" className="project-media" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-media-wrapper">
              <img src={project2} alt="Project 1" className="project-media" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-media-wrapper">
              <video src={project3} autoPlay loop muted playsInline className="project-media" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-media-wrapper">
              <img src={project4} alt="Project 4" className="project-media" />
            </div>
          </div>
        </div>
      </div>

    </div>

    
    
  )
}

export default Projects
