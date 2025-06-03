import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './assets/style.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;