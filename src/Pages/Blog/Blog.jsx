import React, { useState } from "react";
import "./Blog.css";
import { blogData } from "./blogData";
import { Link } from "react-router-dom";

const categories = ["All", "Health", "Medicine", "Fitness"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter(
          (blog) => blog.category === activeCategory
        );

  return (
    <div className="blog-page">
      <h2 className="blog-title">Health & Wellness Blogs</h2>

      {/* Categories */}
      <div className="blog-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span className="blog-meta">
                {blog.category} • {blog.date}
              </span>

              <h3>{blog.title}</h3>
              <p>{blog.description}</p>

              <Link
                to={`/blog/${blog.id}`}
                className="blog-btn"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
