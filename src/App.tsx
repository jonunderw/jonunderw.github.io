import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import Navbar from './components/Navbar';
import BlogPage from './pages/Blog';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';

function App() {
    return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App