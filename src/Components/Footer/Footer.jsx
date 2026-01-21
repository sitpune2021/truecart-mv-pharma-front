import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (



    <footer className="footer">

      <section className="footer-stats">
        <p className="stats-heading">
          India's most trusted generic medicine pharmacy.
        </p>

        <div className="stats-row">
          <div className="stat-item">
            <h3>10 Lakh+</h3>
            <p>Happy customers</p>
          </div>

          <div className="stat-item">
            <h3>35000+</h3>
            <p>Pin-codes Covered</p>
          </div>

          <div className="stat-item">
            <h3>75 Lakh+</h3>
            <p>Orders Delivered</p>
          </div>
        </div>
      </section>
      {/* ================= TOP LINKS ================= */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>About TrueCart Pharmacy</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Franchise</li>
            <li>Blog</li>
            <li>Download App</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Order Medicines</li>
            <li>Lab tests</li>
            <li>Generic Medicines</li>
            <li>Compare Medicines</li>
            <li>Drug Comparison Tool</li>
            <li>Locate Nearest Store</li>
            <li>Stores Page</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Browse by</h4>
          <ul>
            <li>Browse All Medicines</li>
            <li>Browse All Molecules</li>
            <li>Medical Store Near You</li>
            <li>Pharmacy Near You</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of services</li>
            <li>Return & Refund Policy</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-social">
          <h4>Follow Us On</h4>
          <div className="social-icons">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-app">
          <h4>Download the app for free</h4>
          <div className="app-buttons">
            <img src={assets.google_play} alt="Google Play" />
            <img src={assets.app_store} alt="App Store" />
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ================= COPYRIGHT ================= */}
      <p className="footer-copy">
        ©2025 TrueCart Pharmacy. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
