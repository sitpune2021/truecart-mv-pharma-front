import "./Medicines.css";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useState, useMemo } from "react";

const Medicines = () => {
  // qty state (same logic as Trending)
  const [cartQty, setCartQty] = useState({});

  // get only medicine products
  const medicines = useMemo(() => {
    return products.filter(
      (item) => item.category === "medicine"
    );
  }, []);

  const handleAdd = (id) => {
    setCartQty((prev) => ({ ...prev, [id]: 1 }));
  };

  const increaseQty = (id) => {
    setCartQty((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQty = (id) => {
    setCartQty((prev) => {
      const newQty = prev[id] - 1;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <section className="all-medicines-page">
      {/* HEADER */}
      <div className="trending-header">
        <h2>All Medicines</h2>
      </div>

      {/* GRID instead of scroll */}
      <div className="medicine-grid">
        {medicines.map((item) => {
          const qty = cartQty[item.id] || 0;

          return (
            <Link
              to={`/product/${item.slug}`}
              key={item.id}
              className="trending-link"
            >
              <div className="trending-card">
                {/* ❤️ Wishlist */}
                <button
                  className="wishlist-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  ♥
                </button>

                {/* CONTENT */}
                <div className="card-content">
                  <div className="trending-img">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="trending-body">
                    <h4 className="product-title">{item.name}</h4>
                    <p className="brand">By {item.brand}</p>

                    <div className="price-row">
                      <span className="price">₹ {item.price}</span>
                    </div>
                  </div>
                </div>

                {/* ADD → QTY */}
                {qty === 0 ? (
                  <button
                    className="add-cart"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAdd(item.id);
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <div
                    className="qty-selector"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>

                    <span className="qty-value">{qty}</span>

                    <button
                      className="qty-btn"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Medicines;
