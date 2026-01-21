import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  const formattedTitle = categorySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="page-container">
      <h1>{formattedTitle}</h1>

      <p>
        Showing products for <strong>{formattedTitle}</strong>
      </p>

      {/* Filters + Product Grid */}
      <div className="empty-state">
        Products coming soon.
      </div>
    </div>
  );
};

export default CategoryPage;
