import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Sun, Moon, PenTool, Menu, X } from 'lucide-react';

const Navbar = () => {
  // Access global state for Dark Mode
  const { isDarkMode, toggleTheme } = useBlog();
  
  // Local state to manage Mobile Menu visibility (Open/Close)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- Logo Section --- */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DevBlog.
          </Link>

          {/* --- Desktop Navigation (Hidden on Mobile) --- */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/blogs" className="hover:text-blue-600 transition">All Blogs</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            
            {/* Write Button */}
            <Link to="/create" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <PenTool size={16} /> Write
            </Link>

            {/* Dark Mode Toggle Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* --- Mobile Menu Toggle Button (Visible only on Mobile) --- */}
          <div className="md:hidden flex items-center gap-4">
            {/* Dark Mode Toggle for Mobile */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Hamburger / Close Icon Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {/* Conditionally render this block only if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            
            <Link 
              to="/" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link 
              to="/blogs" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              All Blogs
            </Link>

            <Link 
              to="/about" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link 
              to="/create" 
              className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={closeMenu}
            >
              Write a Blog
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
