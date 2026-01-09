import { createContext, useState, useEffect, useContext } from 'react';
import { getBlogs, saveBlogs } from '../utils/localStorage';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load data when the app starts
  useEffect(() => {
    setBlogs(getBlogs());
    
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Sync with LocalStorage whenever blogs change
  useEffect(() => {
    saveBlogs(blogs);
  }, [blogs]);

  // CRUD Operations
  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]); // Add to top
  };

  const updateBlog = (id, updatedData) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...blog, ...updatedData } : blog));
  };

  const deleteBlog = (id) => {
    if(window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {children}
        </div>
      </div>
    </BlogContext.Provider>
  );
};

// Custom Hook for easier usage
export const useBlog = () => useContext(BlogContext);