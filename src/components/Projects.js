import React from 'react';
import projectsData from '../data/projects.json';
import Badge from './Badge';

const Projects = () => (
  <section className="projects-section">
    <div className="section-title">Proyectos</div>
    <div className="projects-list">
      {projectsData.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.title} className="project-img" />
          <div className="project-content">
            <div className="project-title highlight-title">{project.title}</div>
            <div className="tech-badges">
              {project.technologies.map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
            <div className="project-desc">{project.description}</div>
            <div className="project-links">
              <span className="repo-text">Ir al repo →</span>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;