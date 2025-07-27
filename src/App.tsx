import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;