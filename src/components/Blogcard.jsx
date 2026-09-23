export default function BlogCard({ blog, deleteBlog, editBlog }) {
  return (
    <article className="mx-auto max-w-sm">
      
      {/* Image container */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={blog.imageURL}
          alt={blog.title}
          className="h-64 w-full object-cover"
        />
      </div>

      {/* Information card */}
      <div className="relative z-10 mx-4 -mt-8 rounded-2xl bg-white p-5 shadow-lg">
        
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          {blog.title}
        </h2>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {blog.summary}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-medium text-gray-500">
            Rating
          </span>

          <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-bold text-yellow-600">
            ⭐ {blog.rating}/5
          </span>
        </div>

        <button
          onClick={() => deleteBlog(blog.id)}
          className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
        >
          Delete
        </button>

        <button onClick={()=>editBlog(blog)} className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">Edit</button>
      </div>
    </article>
  );
}