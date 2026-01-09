// Initial dummy data so the site isn't empty when you first load it
const INITIAL_DATA = [
  {
    id: "1",
    title: "The Future of React in 2026",
    excerpt: "Why React is still the king of frontend libraries...",
    content: "React has evolved significantly. With React 19 and beyond...",
    category: "Tech",
    author: "Alex Dev",
    date: "2025-10-24",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: "2",
    title: "Minimalism in Lifestyle",
    excerpt: "How decluttering your space declutters your mind.",
    content: "Minimalism isn't just about having less stuff...",
    category: "Lifestyle",
    author: "Sarah J",
    date: "2025-11-02",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80"
  }
];

// Get blogs from storage
export const getBlogs = () => {
  const blogs = localStorage.getItem("blogData");
  if (!blogs) {
    // If empty, set initial data and return it
    localStorage.setItem("blogData", JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  return JSON.parse(blogs);
};

// Save blogs to storage
export const saveBlogs = (blogs) => {
  localStorage.setItem("blogData", JSON.stringify(blogs));
};

// Calculate Read Time (Bonus Feature)
export const calculateReadTime = (text) => {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return `${time} min read`;
};