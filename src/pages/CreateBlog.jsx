import { useState } from 'react';
import { useBlog } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Tech',
    image: '',
    author: 'Admin'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new blog object
    const newBlog = {
      ...formData,
      id: Date.now().toString(), // Simple unique ID
      date: new Date().toLocaleDateString()
    };

    addBlog(newBlog);
    navigate('/blogs');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Create New Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input 
            required
            type="text" 
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            value={formData.title}
            onChange={e => setFormData({...formData, title: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input 
            type="url" 
            placeholder="https://..."
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            value={formData.image}
            onChange={e => setFormData({...formData, image: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select 
              className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
            >
              <option>Tech</option>
              <option>Lifestyle</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Author</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              value={formData.author}
              onChange={e => setFormData({...formData, author: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Short Description</label>
          <input 
            required
            maxLength={100}
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            value={formData.excerpt}
            onChange={e => setFormData({...formData, excerpt: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea 
            required
            rows="10"
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            value={formData.content}
            onChange={e => setFormData({...formData, content: e.target.value})}
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Publish Post
        </button>
      </form>
    </div>
  );
};
export default CreateBlog;