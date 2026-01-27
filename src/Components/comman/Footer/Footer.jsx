import "./Footer.css";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

import { FaUsers, FaMapMarkerAlt, FaBoxOpen, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaStore } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ================= STATS SECTION ================= */}
      <section className="footer-stats">
        <div className="footer-stats-container">
          <h2 className="stats-heading">
            India's Most Trusted Generic Medicine Pharmacy
          </h2>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>10 Lakh+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>35000+</h3>
              <p>Pin-codes Covered</p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaBoxOpen />
              </div>
              <h3>75 Lakh+</h3>
              <p>Orders Delivered</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaStore />
              </div>
              <h3>2300+</h3>
              <p>Medical Stores</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="footer-main">
        <div className="footer-container">
          {/* ================= BRAND & DESCRIPTION ================= */}
          <div className="footer-brand">
            <div className="footer-logo">
              <h2>TrueCart Pharmacy</h2>
            </div>
            <p className="footer-description">
              Your trusted healthcare partner delivering quality medicines and healthcare products at your doorstep. Fast, safe, and reliable service across India.
            </p>
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* ================= FOOTER LINKS ================= */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>

                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/franchise">Franchise</Link>
                </li>



              </ul>

            </div>

            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/medicines">Order Medicines</Link></li>

                <li><a href="#">Lab Tests</a></li>
                <li><a href="#">Generic Medicines</a></li>
                <li><a href="#">Health Packages</a></li>
                <li><a href="#">Drug Comparison</a></li>
                <li><a href="#">Upload Prescription</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/medicines">Browse All Medicines</Link></li>
                <li><a href="#">Browse All Molecules</a></li>
                <li><Link to="/stores">Find Store Near You</Link></li>
                <li><Link to="/stores">Pharmacy Near You</Link></li>
                <li><Link to="/blogs">Health Articles</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Policies</h4>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/return-refund">Return & Refund</Link>
                </li>
                <li>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                </li>
                <li>
                  <Link to="/payment-policy">Payment Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= APP DOWNLOAD SECTION ================= */}
      <div className="footer-app-section">
        <div className="footer-container">
          <div className="app-download-content">
            <div className="app-download-text">
              <h3>Download TrueCart App</h3>
              <p>Get instant access to medicines, health products & exclusive offers</p>
            </div>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src={assets.play_store} alt="Get it on Google Play" />
              </a>
              <a href="#" className="app-button">
                <img src={assets.app_store} alt="Download on App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copy">
              © 2025 TrueCart Pharmacy. All Rights Reserved
            </p>
            <div className="footer-payment">
              <small>We Accept:</small>
              <div className="payment-icons">
                <img src={assets.online_payment} alt="Payment Methods" className="payment-methods-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
