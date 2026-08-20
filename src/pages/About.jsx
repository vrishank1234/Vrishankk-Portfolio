import React from 'react'
import './about.css'
import Button from '../components/Button'

const About = () => {
  return (
    <div className='about'>
        <div className='about-content'>
          <div className="about-text">
            <h5>/ About Me</h5>
            <h3><span>Builder</span> at the Core</h3>
            <p className='deisgn'>Developer. Builder. Problem-solver.</p>
            <p>I'm a full-stack MERN developer with a focus on building secure, scalable, and AI-powered<br></br> 
            applications — backed by real professional experience and a product-first mindset.<br></br> 
            I've shipped features in production, collaborated in engineering teams, and built projects <br></br>
            that tackle real problems.<br></br>
            <br></br>
            Currently pursuing my B.Tech in Computer Science, I balance academics with<br></br>
            hands-on work — hackathons, freelance builds, and real-world development. I move fast, <br></br>
            think in systems, and care deeply about what I ship.
            </p> 
            <p>My impact is incomparable.</p>
         </div>
          <Button href="/resume.pdf" download={false} />
        </div>
    </div>
    
  )
}

export default About
