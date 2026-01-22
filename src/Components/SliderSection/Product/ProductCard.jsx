import { Link } from "react-router-dom";

/**
 * Reusable ProductCard Component
 * @param {Object} props
 * @param {React.RefObject} props.scrollRef - Reference for scroll container
 * @param {Array} props.products - Array of product objects to display
 * @param {Object} props.cartQty - Object containing cart quantities by product id
 * @param {Function} props.handleAdd - Function to add product to cart
 * @param {Function} props.increaseQty - Function to increase product quantity
 * @param {Function} props.decreaseQty - Function to decrease product quantity
 */
function ProductCard({ 
    scrollRef, 
    products = [], 
    cartQty = {}, 
    handleAdd, 
    increaseQty, 
    decreaseQty 
}) {
    return (
        <>
            {/* PRODUCTS */}
            <div className="trending-row" ref={scrollRef}>
                {products.map((item) => {
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
        </>
    )
}

export default ProductCard