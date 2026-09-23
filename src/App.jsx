import { useEffect, useState } from "react";
import BlogForm from "./components/Blogform";
import BlogList from "./components/BlogList";

export default function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");

    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  const [editingBlog, setEditingBlog] = useState(null);

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

  function editBlog(blog) {
    setEditingBlog(blog);
  }

  function updateBlog(id, title, summary, rating, imageURL) {
    setBlogs(
      blogs.map((blog) => {
        if (blog.id === id) {
          return {
            ...blog,
            title,
            summary,
            rating,
            imageURL,
          };
        }

        return blog;
      }),
    );

    setEditingBlog();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mb-10">
        <BlogForm addBlog={addBlog} editingBlog={editingBlog} updateBlog={updateBlog}/>
      </div>

      <BlogList blogs={blogs} deleteBlog={deleteBlog} editBlog={editBlog} />
    </div>
  );
}
