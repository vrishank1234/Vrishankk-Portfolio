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
            applications, with cybersecurity at the core — backed by real professional experience and a product-first mindset.<br></br> 
            I've shipped features in production, collaborated in engineering teams, and built projects <br></br>
            that tackle real problems, with secure authentication, API protection, and data safety built in.<br></br>
            <br></br>
            Currently pursuing my B.Tech in Computer Science, I balance academics with<br></br>
            hands-on work — hackathons, freelance builds, cybersecurity practice, and real-world development. I move fast, <br></br>
            think in systems, and think like an attacker so that what I ship stays secure.
            My impact speaks for itself.
            </p> 
         </div>
          <Button href="/Vrishank_Cyber_Resume.pdf" download={false} />
        </div>
    </div>
    
  )
}

export default About
