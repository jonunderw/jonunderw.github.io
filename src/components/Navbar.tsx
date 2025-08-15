import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gradient-to-br from-[#10172a]/95 via-[#1e293b]/95 to-[#0a0f1c]/95 backdrop-blur-md border-b border-cyan-900/40 shadow-lg p-3 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo - Far Left */}
        <div className="flex items-center flex-shrink-0 text-cyan-200 hover:text-white hover:border-cyan-400 mr-6">
          <Link
            to="/"
            className="block text-cyan-200 hover:text-white px-4 py-2 rounded transition-colors font-semibold tracking-wide"
            onClick={closeMenu}
          >
            <span className="text-xl">Home</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex items-center px-3 py-2 border rounded text-cyan-200 border-cyan-700 hover:text-white hover:border-cyan-400 transition-colors bg-[#10172a]/80"
          >
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:flex flex-grow lg:items-center`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end w-full">
            <Link
              to="/blogs"
              className="block mt-2 lg:mt-0 text-cyan-200 hover:text-white px-4 py-2 rounded transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl">Blogs</span>
            </Link>
            <Link
              to="/about"
              className="block mt-2 lg:mt-0 text-cyan-200 hover:text-white px-4 py-2 rounded transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl">About</span>
            </Link>
            <Link
              to="/projects"
              className="block mt-2 lg:mt-0 text-cyan-200 hover:text-white px-4 py-2 rounded transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl">Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;