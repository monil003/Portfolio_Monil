import React from 'react';
import './Skills.css';
import { CheckCircle2 } from 'lucide-react';

const Skills = ({ skills }) => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">_skills</span>
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-container">
          {Object.entries(skills).map(([category, items], index) => (
            <div className="skill-category glass-panel hover-lift" key={index}>
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {items.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
