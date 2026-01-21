import React from "react";
import { Link } from "react-router-dom";

const offerings = [
  {
    title: "Wellness Products",
    slug: "wellness",
  },
  {
    title: "Personal Care",
    slug: "personal-care",
  },
  {
    title: "Health Supplements",
    slug: "supplements",
  },
];

const Offerings = () => {
  return (
    <div className="page-container">
      <h1>Truecart Offerings</h1>

      <div className="offerings-grid">
        {offerings.map((item) => (
          <Link
            key={item.slug}
            to={`/${item.slug}`}
            className="offering-card"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
