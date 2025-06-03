import React from 'react';
import education from '../data/education';

const Education = () => (
  <section className="edu-section">
    <h3 className="section-title">Educación</h3>
    {education.map((edu, i) => (
      <div className="edu-row" key={i}>
        <div className="edu-title-row">
          <div>
            <span className="edu-title highlight-title"><b>{edu.degree}</b></span>
            <span className="edu-institution"> – {edu.institution}</span>
          </div>
          <span className="edu-period">{edu.period}</span>
        </div>
        <div className="edu-desc">
          {Array.isArray(edu.description)
            ? edu.description.map((line, idx) => <div key={idx}>{line}</div>)
            : edu.description}
        </div>
      </div>
    ))}
  </section>
);

export default Education;