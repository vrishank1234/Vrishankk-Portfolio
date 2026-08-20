import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import Lenis from '@studio-freight/lenis';
import { useScroll } from 'framer-motion';

import Hero from './pages/Hero'
import GradualBlur from './animations/GradualBlur';
import Skills from './pages/Skills.jsx'
import About from './pages/About.jsx';
import TextScroll from './pages/TextScroll.jsx'
import Projects from './pages/Projects.jsx'
import SideCard from './components/SideCard.jsx';
// import Navbar from './components/Navbar.jsx';
import bgVideo from './assets/abstract-white-background-4k-motion-graphics-background-loop-white-video-loop-1080-ytshorts.savetube.me_.mp4';
import Career from './pages/Career.jsx';

const App = () => {
  const sideCardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sideCardContainer,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // smoothness (lower = smoother)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* <Navbar /> */}
      
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#eaeaea67',
      }}>
        
        <div ref={sideCardContainer} style={{ position: 'relative', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <Hero scrollYProgress={scrollYProgress} />
            <Skills />
            <About />
          </div>

          {/* Sticky SideCard Container */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: -250, 
            pointerEvents: 'none',
            zIndex: 10
          }}>
            <div style={{ 
              position: 'sticky', 
              top: '0vh', 
              height: '85vh', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ width: '420px', height: '580px' }}>
                <SideCard scrollYProgress={scrollYProgress} />
              </div>
            </div>
          </div>
        </div>

        <TextScroll />
        <Projects />
        <Career />
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={1}
        divCount={3}
        curve="bezier"
        exponential
        opacity={0.75}
      />
      
    </div>
  )
}

export default App