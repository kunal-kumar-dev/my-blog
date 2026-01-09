import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { ArrowLeft, Trash2, Edit } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, deleteBlog } = useBlog();

  const blog = blogs.find(b => b.id === id);

  if (!blog) return <div className="text-center py-20">Blog not found!</div>;

  const handleDelete = () => {
    deleteBlog(id);
    navigate('/blogs');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition">
        <ArrowLeft size={18} /> Back
      </button>

      <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">{blog.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
        </div>
        
        {/* Actions for Edit/Delete */}
        <div className="flex gap-2">
          <Link to={`/edit/${id}`} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition">
            <Edit size={20} />
          </Link>
          <button onClick={handleDelete} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-100 hover:text-red-600 transition">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <article className="prose dark:prose-invert lg:prose-xl max-w-none">
        <p className="whitespace-pre-wrap">{blog.content}</p>
      </article>
    </div>
  );
};
export default BlogDetails;