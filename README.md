# 🚀 DevBlog – React Blogging Platform

DevBlog is a modern blogging application built using **React.js** and **Tailwind CSS**.  
The project focuses on clean UI, proper component structure, and practical frontend development concepts.

> **Developer:** Kunal Kumar

---

------------------------------------------------------------------------

## 🌐 Live Demo

🔗 https://my-blog-new.netlify.app/

------------------------------------------------------------------------

## ✨ Features

### 🎨 UI & Design
- Clean and minimal user interface
- Dark mode and light mode support
- Fully responsive across devices

### 🛠️ Blog Functionality
- Create blog posts with title, image, content, and category
- View all blogs in a structured layout
- Read individual blog details
- Edit existing blog posts
- Delete blog posts with confirmation

### 🔍 Search & Storage
- Search blogs by title
- Filter blogs by category
- Blog data is persisted using `localStorage`

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Icons:** Lucide React

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/kunal-kumar-dev/my-blog.git
cd my-blog
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

The application will start at:  
`http://localhost:5173`

---

## 📂 Project Structure

```bash
my-blog/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── BlogCard.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── BlogContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Blogs.jsx
│   │   ├── CreateBlog.jsx
│   │   └── Home.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 📌 Learning Outcomes

Through this project, I practiced:
- Building reusable React components
- Managing global state using Context API
- Implementing CRUD operations on the frontend
- Structuring a real-world React project
- Using Tailwind CSS for responsive layouts
- Working with browser storage (`localStorage`)

---

## 🤝 Contributing

Contributions are welcome.

---

## 📄 License

This project is licensed under the MIT License.

---
