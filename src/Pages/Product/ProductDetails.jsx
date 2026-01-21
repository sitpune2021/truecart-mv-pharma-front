import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import { useState } from "react";
import "./ProductDetails.css";
import Trending from "../../Components/Trending/Trending";



const ProductDetails = () => {
  /* ================= PARAMS ================= */
  const { slug } = useParams();

  /* ================= STATE ================= */
  const [qty, setQty] = useState(1);

  /* ================= NORMALIZE FUNCTION ================= */
  const normalize = (str) =>
    str.toLowerCase().replace(/_/g, "-").trim();

  /* ================= FIND PRODUCT ================= */
  const product = products.find(
    (item) => normalize(item.slug) === normalize(slug)
  );

  /* ================= SAFETY ================= */
  if (!product) {
    console.error("Product not found for slug:", slug);
    return (
      <h2 style={{ padding: "40px", textAlign: "center" }}>
        Product not found
      </h2>
    );
  }

  /* ================= DISCOUNT ================= */
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(
        ((product.mrp - product.price) / product.mrp) * 100
      )
      : 0;

  return (
    <section className="product-page">
      {/* ================= BREADCRUMB ================= */}
      <p className="breadcrumb">
        <Link to="/">Home</Link> {" > "}
        <Link to={`/category/${product.category}`}>
          {product.category.replace(/-/g, " ")}
        </Link>

        {product.subCategory && (
          <>
            {" > "}
            <Link
              to={`/category/${product.category}/${product.subCategory}`}
            >
              {product.subCategory.replace(/-/g, " ")}
            </Link>
          </>
        )}

        {" > "}
        <span className="breadcrumb-current">{product.name}</span>
      </p>

      {/* ================= MAIN ================= */}
      <div className="product-wrapper">
        {/* ================= LEFT ================= */}
        <div className="product-left">
          <div className="image-box">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="product-right">
          {/* ================= DISCOUNT BADGE ================= */}
          {discount > 0 && (
            <div className="discount-badge">
              {discount}% Off
            </div>
          )}

          <h1 className="title">{product.name}</h1>

          <p className="brand-info">
            marketed by <strong>{product.brand}</strong>
            {product.weight && ` • ${product.weight}`}
            {product.status && (
              <span className="stock-info"> • {product.status}</span>
            )}
          </p>

          {/* ================= PRICE ================= */}
          <div className="price-section">
            <span className="current-price">₹{product.price}</span>

            {product.mrp && product.mrp > product.price && (
              <>
                <span className="original-price">
                  M.R.P.: <span className="strike">₹{product.mrp}</span>
                </span>
                <span className="discount-percent">
                  {discount}% Off
                </span>
              </>
            )}
          </div>

          <p className="tax-info">Inclusive of all taxes</p>

          {/* ================= DELIVERY INFO ================= */}
          <div className="delivery-section">
            <span className="delivery-icon">🚚</span>
            <span className="delivery-time">Delivery within 2 hrs</span>
          </div>

          {/* ================= QUANTITY ================= */}
          <div className="quantity-section">
            <span className="quantity-label">Quantity</span>

            <div className="quantity-controls">
              <button
                className="quantity-btn minus"
                onClick={() => qty > 1 && setQty(qty - 1)}
                disabled={qty === 1}
              >
                −
              </button>

              <div className="quantity-value">{qty}</div>

              <button
                className="quantity-btn plus"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* ================= ADD TO CART ================= */}
          <button className="add-to-cart">
            <span className="cart-icon">🛒</span>
            Add to Cart
          </button>

          {/* ================= PRODUCT DESCRIPTION ================= */}
          {product.description && (
            <div className="description-section">
              <h3 className="description-title">Product description</h3>
              <p className="description-text">{product.description}</p>
              <button className="read-more">Read More</button>
            </div>
          )}
        </div>
      </div>


      {/* ===== RELATED PRODUCTS ===== */}
      <Trending
        category={product.category}
        excludeId={product.id}
      />
    </section>
  );
};

export default ProductDetails;