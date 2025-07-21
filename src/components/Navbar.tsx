import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo - Far Left */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="h-10 w-10 rounded-full mr-2"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            <Link
              to="/blogs"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;