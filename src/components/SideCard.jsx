import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useSpring } from "framer-motion";
import myImage from '../assets/second.jpeg';
import backImage from '../assets/first.jpeg';

const SideCard = ({ scrollYProgress }) => {
  // Scales from 0.75 when scroll starts to 1.0 in the middle, then back to 0.9 or stays 1.0
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.65, 0.55, 0.65]);

const xRaw = useTransform(
  scrollYProgress,
  [0, 0, 0.1, 1],   // 👈 movement ends at 40%
  [0, 0, 450, 450]    // 👈 stays at 120 after that
);
const x = useSpring(xRaw, {
  stiffness: 80,   // lower = smoother
  damping: 20,     // higher = less bounce
});
const rotateYRaw = useTransform(
  scrollYProgress,
  [0.1, 0.2],   // 👈 flip starts AFTER movement stops
  [0, 180]      // 👈 full flip
);

const rotateY = useSpring(rotateYRaw, {
  stiffness: 80,
  damping: 20
});

  return (
    <motion.div style={{
      scale,
      x,
      rotateY,
      width: '100%',
      height: '100%',
      borderRadius: '40px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transformStyle: 'preserve-3d',
      position: 'relative'
    }}>
      {/* Front Face */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '40px'
      }} />

      {/* Back Face */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotateY(180deg)',
        borderRadius: '40px'
      }} />
    </motion.div>
  );
};

export default SideCard;
