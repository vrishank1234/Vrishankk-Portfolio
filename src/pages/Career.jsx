import React from 'react'
import './career.css'

const Career = () => {
  return (
    <div className="career">
      <div className="career-container">
        <div className="career-text">
          <h5>/ Career</h5>
          <h3>Work<span> Experience</span></h3>
        </div>
        <div className="career-heading">
          <p>My impact over the years.</p>
        </div>

        <div className="experience-list">
          <div className="experience-item">
            <div className="exp-info">
              <h4>Software Developer</h4>
              <p>Let's Upgrade</p>
            </div>
            <div className="exp-date">July 2025 – Current</div>
          </div>

          <div className="experience-item">
            <div className="exp-info">
              <h4>Freelance Developer / Builder</h4>
              <p>Self-Employed</p>
            </div>
            <div className="exp-date">2023 – Present</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career

