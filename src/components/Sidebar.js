import React from 'react';
import About from './About';
import profile from '../data/profile';
import Badge from './Badge';
import Button from './Button';

// Sidebar: Muestra la información personal, enlaces y habilidades
const Sidebar = () => (
  <aside className="sidebar">
    {/* Imagen de perfil */}
    <img src={profile.img} alt="Profile" className="profile-img" />
    <h2>{profile.name}</h2>
    {/* Título profesional */}
    <div className="profile-title">
      <span style={{fontWeight: "bold"}}>Data:</span> Analytics | Engineer | Scientist
    </div>
    {/* Ubicación */}
    <div className="profile-location">{profile.location}</div>
    {/* Enlaces a redes sociales */}
    <div className="profile-links">
      {profile.links.map((l, i) => (
        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
          <i className={l.icon}></i>
        </a>
      ))}
    </div>
    {/* Botones de CV */}
    <div className="section-spacing" style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Icono para previsualizar el CV */}
      <a
        href="https://drive.google.com/file/d/14lZ1NApCVjp9jg1Xkbx3U2n2p4l-N4pV/preview"
        className="cv-preview"
        target="_blank"
        rel="noopener noreferrer"
        title="Previsualizar CV"
      >
        <i className="fas fa-eye cv-preview-icon"></i>
      </a>
      {/* Botón para solicitar el CV completo */}
      <div className="cv-request-tooltip">
        <Button>
          <i className="fas fa-file-download"></i> Solicita CV completo
        </Button>
        <span className="cv-tooltip-text">
          “Escríbeme por LinkedIn o email y te enviaré mi CV completo personalizado al rol que buscas.”
        </span>
      </div>
    </div>
    {/* Sección Acerca de */}
    <About />
    {/* Sección de habilidades */}
    <div className="profile-section skills-section">
      <h3 className="section-title">Habilidades</h3>
      <div className="skills-list">
        {profile.skills.map((skill, i) => (
          <Badge key={i}>{skill}</Badge>
        ))}
      </div>
    </div>
    {/* Sección Ruta de Aprendizaje */}
    <div className="profile-section">
      <h3 className="section-title">Ruta de Aprendizaje</h3>
      <h4>Educación Continua</h4>
      <ul className="learning-path-list">
        <li>Análisis de Datos y BI</li>
        <li>Visualización de Datos con Python</li>
        <li>Ingeniería de Datos con Databricks</li>
        <li>Programación Funcional con Scala</li>
        <li>AWS Cloud Practitioner (CLF-C02)</li>
        <li>Azure AI Engineer</li>
        <li>Especialización en SQL Server</li>
        <li>Especialización en Python</li>
        <li>Análisis Estadístico con R</li>
        <li>Proyectos con Metodologías Ágiles</li>
      </ul>
      <h4>Credenciales Digitales</h4>
      <ul className="credentials-list">
        <li><a href="https://www.credly.com/badges/124eba60-27d5-4a29-9e20-30a62578fde0/public_url" target="_blank" rel="noopener noreferrer">DP-900: Azure Data Fundamentals</a></li>
        <li><a href="https://credentials.databricks.com/b8bfcf23-1d0a-4648-abe9-ec64d89ec6d3#acc.tXvMBpiK" target="_blank" rel="noopener noreferrer">Databricks Fundamentals</a></li>
        <li><a href="https://www.credly.com/badges/05732a50-084a-44ee-8d97-c4e48775a275/public_url" target="_blank" rel="noopener noreferrer">Python Essentials 1</a></li>
        <li><a href="https://www.credly.com/badges/a1121a7b-2322-4874-b9db-2c5c4a2ff661/public_url" target="_blank" rel="noopener noreferrer">Scrum Foundation</a></li>
        <li><a href="https://www.credly.com/badges/334734eb-6b37-4f21-b0ed-50f0542cd511/public_url" target="_blank" rel="noopener noreferrer">Explorations into Mindfulness</a></li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;
