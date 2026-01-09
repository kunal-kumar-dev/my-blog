import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Sun, Moon, PenTool } from 'lucide-react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useBlog();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DevBlog.
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/blogs" className="hover:text-blue-600 transition">All Blogs</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            
            <Link to="/create" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <PenTool size={16} /> Write
            </Link>

            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;