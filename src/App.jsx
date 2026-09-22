import { useEffect, useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

export default function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");

    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));

    console.log("effect started");
    
  }, [blogs]);

  function addBlog(title, summary, rating, imageURL) {
    const newBlog = {
      id: Date.now(),
      title,
      summary,
      rating,
      imageURL,
    };

    setBlogs((prev) => [...prev, newBlog]);
  }

  function deleteBlog(id) {
    setBlogs((prev) => {
      return prev.filter((blog) => {
        return blog.id !== id;
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mb-10">
        <BlogForm addBlog={addBlog} />
      </div>

      <BlogList blogs={blogs} deleteBlog={deleteBlog} />

    
    </div>
  );
}
