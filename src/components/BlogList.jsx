import BlogCard from "./Blogcard";



export default function BlogList({ blogs, deleteBlog }) {
  console.log(blogs);

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        
        <BlogCard key={blog.id} blog={blog} deleteBlog={deleteBlog}/>
        
      ))}

    </div>
  );
}
