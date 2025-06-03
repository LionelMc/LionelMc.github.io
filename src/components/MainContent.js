import React from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const MainContent = () => (
  <main className="main-content">
    <Projects />
    <Experience />
    <Education />
  </main>
);

export default MainContent;