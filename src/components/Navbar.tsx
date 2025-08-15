import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gradient-to-br from-[#10172a]/95 via-[#1e293b]/95 to-[#0a0f1c]/95 backdrop-blur-md border-b border-cyan-900/40 shadow-lg p-3 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo - Far Left */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo size={40} className="mr-2" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-cyan-200 border-cyan-700 hover:text-white hover:border-cyan-400 transition-colors bg-[#10172a]/80"
          >
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            <Link
              to="/blogs"
              className="block mt-4 lg:inline-block lg:mt-0 text-cyan-200 hover:text-white mr-0 lg:mr-4 mb-2 lg:mb-0 px-4 py-2 lg:px-0 lg:py-0 rounded lg:rounded-none hover:bg-cyan-900/30 lg:hover:bg-transparent transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl hidden sm:block">Blogs</span>
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-cyan-200 hover:text-white mr-0 lg:mr-4 mb-2 lg:mb-0 px-4 py-2 lg:px-0 lg:py-0 rounded lg:rounded-none hover:bg-cyan-900/30 lg:hover:bg-transparent transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl hidden sm:block">About</span>
            </Link>
            <Link
              to="/projects"
              className="block mt-4 lg:inline-block lg:mt-0 text-cyan-200 hover:text-white mr-0 px-4 py-2 lg:px-0 lg:py-0 rounded lg:rounded-none hover:bg-cyan-900/30 lg:hover:bg-transparent transition-colors font-semibold tracking-wide"
              onClick={closeMenu}
            >
              <span className="text-xl hidden sm:block">Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;