import React from 'react'
import './hero.css'
import SideCard from '../components/SideCard'
import bgVideo from '../assets/abstract-white-background-4k-motion-graphics-background-loop-white-video-loop-1080-ytshorts.savetube.me_.mp4'
import profileImg from '../assets/second.jpeg'

const Hero = ({ scrollYProgress }) => {
  return (
    <div className='hero-section'>
      {/* Background Video with Mask */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className='content'>
        <div className='name-container'>
          <div className='left-text'>
            <span className="hero-label top-left">Creative Leader</span>
            <p>VRISHANK</p>
          </div>
          
          <div className="center-card">
             {/* Placeholder for SideCard to keep layout */}
          </div>

          <div className='right-text'>
            <span className="hero-label top-right">Cybersecurity Engineer</span>
            <p>KIRPANE</p>
          </div>
        </div>

        {/* Mobile-only profile image */}
        <div className="hero-mobile-photo">
          <img src={profileImg} alt="Vrishank Kirpane" />
        </div>
      </div>
    </div>
  )
}

export default Hero
