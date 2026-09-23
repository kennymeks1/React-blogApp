import BlogCard from "./Blogcard";


export default function BlogList({ blogs, deleteBlog, editBlog }) {
  console.log(blogs);

  if(blogs.length === 0){
    return(
      <div className="mx-auto max-w-2xl px-4 pb-10">
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center shadow-sm">
          <div className="mb-4 text-4xl">📝

          </div>

          <h2 className="mb-2 text-xl font-bold text-gray-800">No blogs yet</h2>

          <p className="text-gray-500"> Your blog posts will appear here once you create your first blog.</p>

        </div>

      </div>
      
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} deleteBlog={deleteBlog} editBlog={editBlog}/>
      ))}
    </div>
  );
}
