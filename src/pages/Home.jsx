import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { blogs } = useBlog();
  const latestBlogs = blogs.slice(0, 3); // Get first 3 items

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-blue-600">DevBlog.</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing thoughts on code, lifestyle, and the future of tech. 
          A minimalist space for developers.
        </p>
      </div>

      {/* Latest Blogs */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link to="/blogs" className="text-blue-600 hover:underline">View All &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;