import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPage from './pages/blog';
import AboutPage from './pages/about';
import ProjectsPage from './pages/Projects';

function App() {
    return (
    <Router>
      <Navbar /> {/* Your Navbar component */}
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App
