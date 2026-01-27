import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";
import { blogData } from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <p style={{ padding: "2rem" }}>Blog not found</p>;
  }

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} />

      <div className="details-content">
        <span className="blog-meta">
          {blog.category} • {blog.date}
        </span>

        <h1>{blog.title}</h1>
        <p className="blog-author">By {blog.author}</p>

        <p className="blog-text">{blog.content}</p>

        
      </div>
    </div>
  );
};

export default BlogDetails;
