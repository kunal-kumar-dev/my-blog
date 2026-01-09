import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import About from './pages/About';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/edit/:id" element={<CreateBlog />} /> {/* Reusing component if logic allows, or make new one */}
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          {/* Add Footer here */}
          <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-sm text-gray-500">
            © 2026 Kunal Kumar. Built with React & Tailwind.
          </footer>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;