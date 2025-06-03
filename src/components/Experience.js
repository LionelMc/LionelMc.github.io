import React from 'react';
import Badge from './Badge';
import experience from '../data/experience';

const Experience = () => (
  <section className="exp-section">
    <div className="section-title">Experiencia</div>
    {experience.map((exp, i) => (
      <div className="exp-row" key={i}>
        <div className="exp-header-row">
          <div>
            <div className="exp-title highlight-title"><b>{exp.title}</b></div>
            <div className="exp-company">{exp.company}</div>
          </div>
          <div className="exp-meta">
            <div className="exp-period">{exp.period}</div>
            <div className="exp-location">{exp.location}</div>
          </div>
        </div>
        <div className="exp-desc">{exp.description}</div>
        <div className="tech-badges">
          {exp.technologies.map((tech, j) => (
            <Badge key={j}>{tech}</Badge>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Experience;