import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../data/products";
import { CATEGORY_FILTERS } from "../../data/categoryFilters";
import { CATEGORY_FILTER_CONFIG } from "../../data/categoryFilterConfig";
import "./CategoryListing.css";

const CategoryListing = () => {
  const { categoryName, subCategory } = useParams();

  /* ================= STATE ================= */
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  /* ================= RESET FILTERS ================= */
  useEffect(() => {
    setSelectedBrands([]);
    setSelectedFlavours([]);
    setBrandSearch("");
  }, [categoryName, subCategory]);

  /* ================= CONFIG ================= */
  const config = CATEGORY_FILTER_CONFIG[categoryName] || {};
  const subCategories = config.subCategories || [];
  const flavours = config.flavours || [];
  const brands = CATEGORY_FILTERS[categoryName] || [];

  /* ================= FILTER PRODUCTS ================= */
  let filteredProducts = products.filter(
    (p) => p.category === categoryName
  );

  if (subCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subCategory === subCategory
    );
  }

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedBrands.includes(p.brand)
    );
  }

  if (selectedFlavours.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedFlavours.includes(p.flavour)
    );
  }

  if (sortBy === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  /* ================= HELPERS ================= */
  const activeSubCategory = subCategories.find(
    (s) => s.slug === subCategory
  );

  const filteredBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <section className="category-page">
      {/* ================= TOP BAR ================= */}
      <div className="category-top">
        <p className="breadcrumb">
          <Link to="/">Home</Link> {" > "}
          <Link to={`/category/${categoryName}`}>
            {categoryName.replace(/-/g, " ")}
          </Link>
          {activeSubCategory && (
            <>
              {" > "}
              <span>{activeSubCategory.label}</span>
            </>
          )}
        </p>

        <select
          className="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="category-layout">
        {/* ================= LEFT FILTERS ================= */}
        <aside className="filters">
          <h4>Filters</h4>

          {/* SUB CATEGORIES */}
          <div className="filter-box">
            <h5>Category</h5>
            {subCategories.map((sub) => (
              <Link
                key={sub.slug}
                to={`/category/${categoryName}/${sub.slug}`}
                className={`subcategory ${sub.slug === subCategory ? "active" : ""
                  }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>

          {/* BRANDS */}
          <div className="filter-box">
            <h5>Brands</h5>
            <input
              type="text"
              placeholder="Search brands"
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
            />

            {filteredBrands.map((brand) => (
              <label key={brand} className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() =>
                    setSelectedBrands((prev) =>
                      prev.includes(brand)
                        ? prev.filter((b) => b !== brand)
                        : [...prev, brand]
                    )
                  }
                />
                {brand}
              </label>
            ))}
          </div>

          {/* FLAVOURS */}
          {flavours.length > 0 && (
            <div className="filter-box">
              <h5>Flavours</h5>
              {flavours.map((flavour) => (
                <label key={flavour} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFlavours.includes(flavour)}
                    onChange={() =>
                      setSelectedFlavours((prev) =>
                        prev.includes(flavour)
                          ? prev.filter((f) => f !== flavour)
                          : [...prev, flavour]
                      )
                    }
                  />
                  {flavour}
                </label>
              ))}
            </div>
          )}
        </aside>

        {/* ================= PRODUCTS ================= */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((item) => (
              <Link
                key={item.slug}
                to={`/product/${item.slug}`}
                className="product-card"
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p className="price">₹{item.price}</p>
                <button>Add to cart</button>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryListing;
