import "../Trending/Trending.css";   // ✅ reuse same CSS
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useRef, useState } from "react";

/* ✅ Choose NEW ARRIVAL product IDs */
const NEW_ARRIVAL_IDS = [5, 8, 9, 12, 13, 18, 19, 20];

/* ✅ Filter products */
const newArrivalProducts = products.filter((item) =>
  NEW_ARRIVAL_IDS.includes(item.id)
);

const NewArrival = () => {
  const scrollRef = useRef(null);

  /* ✅ quantity per product */
  const [cartQty, setCartQty] = useState({});

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

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
    <section className="trending-section">
      <div className="trending-header">
        <h2>New Arrivals</h2>
        <span className="view-all">View All ›</span>
      </div>

      <div className="trending-wrapper">
        {/* LEFT */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          ‹
        </button>

        {/* PRODUCTS */}
        <div className="trending-row" ref={scrollRef}>
          {newArrivalProducts.map((item) => {
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

        {/* RIGHT */}
        <button className="scroll-btn right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
