import { useRef, useState } from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";


/* ✅ Recommended product IDs */
const RECOMMENDED_IDS = [3, 4, 7, 10, 14, 17, 22, 25];

/* ✅ Filter from central products.js */
const recommendedProducts = products.filter((item) =>
  RECOMMENDED_IDS.includes(item.id)
);

const Recommended = () => {
  const scrollRef = useRef(null);

  // ✅ quantity state per product (same as Trending)
  const [cartQty, setCartQty] = useState({});

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  // ✅ add product
  const handleAdd = (id) => {
    setCartQty((prev) => ({ ...prev, [id]: 1 }));
  };

  // ✅ increase qty
  const increaseQty = (id) => {
    setCartQty((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // ✅ decrease qty
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
    <section className="trending-section">
      <div className="trending-header">
        <h2>Recommended</h2>
        <span className="view-all">View All ›</span>
      </div>

      <div className="trending-wrapper">
        {/* LEFT */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          ‹
        </button>

        {/* PRODUCTS */}
        <div className="trending-row" ref={scrollRef}>
          {recommendedProducts.map((item) => {
            const qty = cartQty[item.id] || 0;

            return (
              <Link
                to={`/product/${item.slug}`}
                key={item.id}
                className="trending-link"
              >
                <div className="trending-card">
                  {/* ❤️ WISHLIST */}
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
                        {item.mrp && (
                          <span className="mrp">₹ {item.mrp}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ADD → QUANTITY */}
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

        {/* RIGHT */}
        <button className="scroll-btn right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Recommended;
