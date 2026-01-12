# 🚀 DevBlog – React Blogging Platform

DevBlog is a modern, frontend-focused blogging application built using **React.js** and **Tailwind CSS**.
It demonstrates real-world React concepts such as routing, global state management, form handling, and CRUD operations using browser storage.

🌐 **Live Demo:** https://my-blog-new.netlify.app/  
👨‍💻 **Developer:** Kunal Kumar  
📚 **Project Type:** Personal / Academic React Project

---

## 🎯 Project Objective

To build a personal blog platform that allows users to:

- Read and explore blog posts
- View detailed blog content
- Create, edit, and delete blog posts
- Search and filter blogs
- Practice real-world React development concepts

---

## ✨ Features

### 🎨 UI & UX
- Clean, minimal, and responsive design
- Dark mode and light mode toggle
- Tailwind CSS based styling
- Reusable React components

### 📝 Blog Functionality
- Create blog posts with title, image, category, content, and author
- View all blogs in card format
- Read individual blog details
- Edit and delete existing blogs with confirmation
- Read-time estimation for posts

### 🔍 Search & Persistence
- Search blogs by title
- Filter blogs by category
- Blog data persisted using browser `localStorage`

---

## 🧠 Architecture Overview

- Single Page Application (SPA) using React Router DOM
- Global state managed using React Context API
- Frontend-only CRUD operations
- Blog data stored and retrieved from localStorage
- Same form reused for both create and edit functionality

---

## 🛠️ Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- React Context API
- Lucide React Icons
- Browser localStorage

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/kunal-kumar-dev/my-blog.git
cd my-blog
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open in browser:  
http://localhost:5173

---

## 📌 Deployment

This project is deployed on **Netlify**.

🔗 Live URL: https://my-blog-new.netlify.app/

To deploy yourself:
1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

---

## 📂 Project Structure

```bash
src/
├── components/
├── context/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
```

---

## 📌 Learning Outcomes

- React component-based architecture
- Context API for state management
- CRUD operations without backend
- Routing and dynamic routes
- Tailwind CSS for responsive UI
- localStorage-based persistence

---

## 🔮 Future Improvements

- Backend API integration
- Authentication & user accounts
- Pagination and tags
- Accessibility enhancements
- Markdown support for blogs

---

## 📄 License

MIT License
