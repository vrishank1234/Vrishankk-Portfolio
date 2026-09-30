import React from 'react'
import './skills.css'
import StackingCards from '../components/StackingCards'

function Skills() {
  return (
    <div className='skills'>
        <div className="fusion-content">
            <div className='fusion-text'>
            <h5>/ Services, Skills, Abilities</h5>
            <h3>What I do <span>best?</span></h3>
            <p>I build full-stack applications, integrate AI, implement secure authentication, design systems, and ship 
                <br></br>real products — from idea to deployment.</p>
            <StackingCards />
            </div>
        </div>
    </div>
  )
}

export default Skills

// I build full-stack applications, integrate AI, design systems, and ship real products — from idea to deployment.