import { useEffect, useState } from "react";

export default function BlogForm({ addBlog, editingBlog, updateBlog }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSummary, setBlogSummary] = useState("");
  const [blogRating, setBlogRating] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setBlogTitle(editingBlog.title);
      setBlogSummary(editingBlog.summary);
      setBlogRating(editingBlog.rating);
      setImageUrl(editingBlog.imageURL);
    }
  }, [editingBlog]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editingBlog) {
      updateBlog(editingBlog.id, blogTitle, blogSummary, blogRating, imageUrl);
    } else {
      addBlog(blogTitle, blogSummary, blogRating, imageUrl);
    }

    setBlogTitle("");
    setBlogSummary("");
    setBlogRating(0);
    setImageUrl("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg"
      >
        <h1 className="mb-2 text-3xl font-bold text-gray-800">{editingBlog ? "Edit Blog" : "Add a Blog"}</h1>

        <p className="mb-6 text-gray-500">
          Share your thoughts and experiences.
        </p>

        {/* Title */}

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Blog Title
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Enter blog title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Blog Summary
          </label>

          <textarea
            name=""
            id=""
            placeholder="Write a short summary"
            value={blogSummary}
            onChange={(e) => setBlogSummary(e.target.value)}
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="mb-2 flex justify-between font-medium text-gray-700">
            <span>Rating</span>
            <span className="text-blue-600">{blogRating}/5</span>
          </label>

          <input
            type="range"
            name=""
            id=""
            min={0}
            max={5}
            placeholder="Rating"
            value={blogRating}
            onChange={(e) => setBlogRating(e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium text-gray-700"></label>

          <input
            type="url"
            name=""
            id=""
            placeholder="imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          {editingBlog ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
}
