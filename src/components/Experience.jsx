import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="section-label">_experience</span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-content glass-panel hover-lift">
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company} <span>• {exp.location}</span></h4>
                <ul className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
