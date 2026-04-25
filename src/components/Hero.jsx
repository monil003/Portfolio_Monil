import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ personal }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Scattered radial distribution using alternating radii for a "circuit" look
  const skills = [
    { name: 'AWS', img: '/images/aws.png', angle: 0, radius: 260 },
    { name: 'SuiteScript', img: '/images/suitescript-icon.png', angle: -35, radius: 170, cover: true },
    { name: 'Node.js', img: 'https://cdn.simpleicons.org/nodedotjs/339933', angle: -70, radius: 280 },
    { name: 'GitHub', img: 'https://cdn.simpleicons.org/github/181717', angle: -105, radius: 180 },
    { name: 'SQL', img: 'https://cdn.simpleicons.org/postgresql/4169E1', angle: -145, radius: 260 },
    { name: 'Python', img: 'https://cdn.simpleicons.org/python/3776AB', angle: -180, radius: 170 },
    { name: 'MongoDB', img: 'https://cdn.simpleicons.org/mongodb/47A248', angle: -215, radius: 280 },
    { name: 'React', img: 'https://cdn.simpleicons.org/react/61DAFB', angle: -250, radius: 190 },
    { name: 'Chrome Ext', img: 'https://cdn.simpleicons.org/googlechrome/4285F4', angle: -285, radius: 270 },
    { name: 'AI Automations', img: '/images/AI_Image.jpeg', angle: -325, radius: 180, cover: true },
  ];

  return (
    <section className="hero-section section" id="home">
      <div className="bg-glow"></div>
      <div className="bg-glow-right"></div>
      
      {/* Background cubes for isometric feel */}
      <div className="bg-cube" style={{ top: '20%', left: '10%' }}></div>
      <div className="bg-cube" style={{ bottom: '30%', right: '15%', width: '60px', height: '60px' }}></div>
      <div className="bg-cube" style={{ top: '60%', left: '40%', width: '30px', height: '30px', opacity: 0.5 }}></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="greeting">Hi there, I'm</p>
          <motion.h1 
            className="name gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          >
            {personal.name}
          </motion.h1>
          <motion.h2 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {personal.title}
          </motion.h2>
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personal.summary}
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn primary" 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="nuclear-container">
            {/* The Central Isometric Core - NetSuite Logo with Filter Fix */}
            <motion.div 
              className="nuclear-core"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <div className="core-logo-wrapper">
                <img 
                  src="/images/netsuite_logo.jpg" 
                  alt="Oracle NetSuite" 
                  className="core-logo"
                  onError={(e) => { e.target.src = 'https://logo.clearbit.com/netsuite.com'; }}
                />
              </div>
              <div className="core-inner"></div>
            </motion.div>

            {/* Scattered Radially Distributed Connecting Lines and 3D Cards */}
            <div className="tech-stack-floating">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-wrapper"
                  style={{ transform: `rotate(${skill.angle}deg)` }}
                >
                  <div 
                    className="connection-line"
                    style={{ width: `${skill.radius}px` }}
                  ></div>
                  
                  <div 
                    className="float-item-container"
                    style={{ left: `${skill.radius}px` }}
                  >
                    <motion.div 
                      className="float-item" 
                      style={{ transform: `rotate(${-skill.angle}deg) rotateY(-20deg) rotateX(10deg)` }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4 + (index * 0.5), 
                        ease: "easeInOut",
                        delay: index * 0.2 
                      }}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skill-icon-wrapper" style={skill.cover ? { padding: 0 } : {}}>
                        <img 
                          src={skill.img} 
                          alt={skill.name} 
                          className="skill-icon-img"
                          style={skill.cover ? { objectFit: 'cover', transform: 'scale(1.2)' } : {}}
                          onError={(e) => { e.target.src = 'https://cdn.simpleicons.org/code/3B82F6'; }}
                        />
                      </div>
                      <AnimatePresence>
                        {hoveredSkill === index && (
                          <motion.div 
                            className="skill-tooltip"
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -55, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          >
                            {skill.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
