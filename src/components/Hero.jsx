import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = ({ personal }) => {
  const skills = [
    { name: 'NetSuite', top: '5%', left: '-10%', delay: 0 },
    { name: 'AI Automations', top: '40%', right: '-15%', delay: 1 },
    { name: 'React', bottom: '5%', left: '15%', delay: 2 },
    { name: 'Node.js', top: '25%', left: '10%', delay: 0.5 },
    { name: 'Azure', bottom: '30%', right: '5%', delay: 1.5 },
    { name: 'Python', top: '60%', left: '-15%', delay: 0.8 },
    { name: 'SuiteScript', bottom: '50%', left: '40%', delay: 2.2 },
  ];

  return (
    <section className="hero-section section" id="home">
      <div className="bg-glow"></div>
      <div className="bg-glow-right"></div>
      
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
            {personal.summary.split('.')[0]}. {personal.summary.split('.')[1]}.
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
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/MONIL DUMASIA CV.docx" 
              download 
              className="btn secondary glass-panel"
            >
              Download CV <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="nuclear-container">
            {/* The Central Core */}
            <motion.div 
              className="nuclear-core"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className="core-inner"></div>
            </motion.div>

            {/* Connecting Lines and Skills */}
            <div className="tech-stack-floating">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-wrapper"
                  style={{ 
                    position: 'absolute',
                    top: skill.top,
                    left: skill.left,
                    right: skill.right,
                    bottom: skill.bottom,
                  }}
                >
                  {/* Connection Line */}
                  <div className="connection-line"></div>
                  
                  <motion.span 
                    className="float-item" 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + skill.delay, 
                      ease: "easeInOut",
                      delay: skill.delay 
                    }}
                  >
                    {skill.name}
                  </motion.span>
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
