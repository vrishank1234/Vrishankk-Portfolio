import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TextScroll.css';

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  const containerRef = useRef(null);
  const text = "2+ Years of Experience  /  5+ Projects Shipped  /  Hackathon Award Winner  / AI & ML Integration  /  Full-Stack End-to-End  /  Real-World Production Experience  ";

  useEffect(() => {
    const words = containerRef.current.querySelectorAll('.word');
    
    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-scroll-container">
      <h2 ref={containerRef} className="text-scroll-content">
        {text.split(' ').map((word, index) => (
          <p key={index} className="word">
            {word}{' '}
          </p>
        ))}
      </h2>
    </div>
  );
};

export default TextScroll;
