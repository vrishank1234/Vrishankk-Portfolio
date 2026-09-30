import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './stackingCards.css';

const cards = [
  {
    id: 1,
    label: "Core Strength",
    title: "01.Full Stack Development",
    description: "I build end-to-end web applications using the MERN stack — from database design to polished frontend interfaces. Every app is built for performance, security, and scale.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful API Development", "JWT Authentication"],
    color: "#ffffff"
  },
  {
    id: 2,
    label: "Emerging Speciality",
    title: "02. AI-Powered Applications",
    description: "I integrate AI models and tools into real products — from deepfake detection pipelines to LLM-powered workflows. I build AI features that actually work in production.",
    skills: ["Python", "Ollama (local LLMs)", "HTML, JS, CSS interfaces", "Design Systems", "AI/ML pipelines"],
    color: "#ffffff"
  },
  {
    id: 3,
    label: "Reliability Focused",
    title: "03. Backend & API Engineering",
    description: "I design and build reliable backends — RESTful APIs, authentication systems, access control, and data management layers that keep applications secure and running smoothly.",
    skills: ["Node.js, Express.js", "Python", "JWT & Session Auth", "Access Control Systems","Database Design"],
    color: "#ffffff"
  },
  {
    id: 4,
    label: "Security First",
    title: "04. Cloud Services & Auth",
    description: "I implement cloud-connected features and robust authentication systems that protect user data and scale with demand.",
    skills: ["Cloud Services integration", "Secure data handling","Critical Thinking","Team Collaboration"],
    color: "#ffffff"
  },
  {
    id: 5,
    label: "Cybersecurity Skills",
    title: "05.Cybersecurity & Analysis",
    description: "I have a strong foundation in cybersecurity — including defensive strategies, security analysis, and secure development practices that protect applications from real-world threats.",
    skills: ["Secure Development","Vulnerability Assessment","Threat Analysis","Incident Response","Ethical Hacking","Security Tools & Frameworks"],
    color: "#ffffff"
  }
];

const Card = ({ card, i, progress, range, targetScale }) => {
  const container = useRef(null);
  
  // Transform scale and opacity for a better stacking effect
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Alternate tilt direction based on index
  const tiltDirection = i % 2 === 0 ? -2 : 2;
  const rotate = useTransform(progress, range, [0, tiltDirection]);
  
  return (
    <div ref={container} className="card-container">
      <motion.div 
        style={{ 
          scale, 
          rotate,
          backgroundColor: card.color || '#ffffff', 
          top: `calc(${i * 45}px)`,
          zIndex: i + 1
        }} 
        className="card"
      >
        <span className="card-label">{card.label}</span>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.description}</p>
        <ul className="card-skills">
          {card.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // On mobile: render as a simple flat list (no sticky stacking)
  if (isMobile) {
    return (
      <div className="stacking-cards-mobile">
        {cards.map((card) => (
          <div key={card.id} className="card card--mobile">
            <span className="card-label">{card.label}</span>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <ul className="card-skills">
              {card.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className="stacking-cards-wrapper">
      {cards.map((card, i) => {
        const targetScale = 1 - ( (cards.length - i) * 0.03);
        return (
          <Card 
            key={card.id} 
            card={card} 
            i={i} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
