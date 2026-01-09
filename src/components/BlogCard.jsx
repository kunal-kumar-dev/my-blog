import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { calculateReadTime } from '../utils/localStorage';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          {blog.category}
        </span>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <User size={14} /> {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> {calculateReadTime(blog.content)}
          </div>
        </div>

        <Link to={`/blogs/${blog.id}`} className="mt-4 block text-center w-full py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm font-semibold transition">
          Read Article
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;