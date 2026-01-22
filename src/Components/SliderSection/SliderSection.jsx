import React, { useRef, useState } from 'react'
import ProductCard from './Product/ProudctCard'
import { Link } from 'react-router-dom'
import './SliderSection.css'

/**
 * Reusable SliderSection Component
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "New Arrivals", "Trending")
 * @param {Array} props.products - Array of product objects to display
 * @param {string} props.viewAllLink - Link for "View All" button (optional)
 * @param {boolean} props.loading - Loading state for API integration (optional)
 * @param {string} props.error - Error message for API integration (optional)
 */
function SliderSection({
    title = "Products",
    products = [],
    viewAllLink = "/products",
    loading = false,
    error = null
}) {
    const scrollRef = useRef(null);
    const [cartQty, setCartQty] = useState({});

    const scrollLeft = () => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
        }
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

    // Loading state
    if (loading) {
        return (
            <section className="trending-section">
                <div className="trending-header">
                    <h2>{title}</h2>
                </div>
                <div className="slider-loading">Loading...</div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="trending-section">
                <div className="trending-header">
                    <h2>{title}</h2>
                </div>
                <div className="slider-error">{error}</div>
            </section>
        );
    }

    // No products
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <section className="trending-section">
            <div className="trending-header">
                <h2>{title}</h2>
                {viewAllLink && (
                    <Link to={viewAllLink} className="view-all">View All ›</Link>
                )}
            </div>

            <div className="trending-wrapper">
                {/* LEFT */}
                <button className="scroll-btn left" onClick={scrollLeft}>
                    ‹
                </button>
                <ProductCard
                    scrollRef={scrollRef}
                    products={products}
                    cartQty={cartQty}
                    handleAdd={handleAdd}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                />
                {/* RIGHT */}
                <button className="scroll-btn right" onClick={scrollRight}>
                    ›
                </button>
            </div>
        </section>
    )
}

export default SliderSection