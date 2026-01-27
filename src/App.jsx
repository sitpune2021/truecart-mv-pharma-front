import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/comman/Navbar/Navbar";
import Footer from "./Components/comman/Footer/Footer";
import ScrollToTop from "./Components/comman/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import Medicines from "./Pages/Medicines/Medicines";
import Offerings from "./Pages/Offerings/Offerings";
import Stores from "./Pages/Stores/Stores";

import CategoryListing from "./Pages/CategoryListing/CategoryListing";

import NotFound from "./Pages/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";

import AboutUs from "./Pages/FooterPages/AboutUs";
import ContactUs from "./Pages/FooterPages/ContactUs";
import PrivacyPolicy from "./Pages/FooterPages/PrivacyPolicy";
import TermsConditions from "./Pages/FooterPages/TermsConditions";
import ReturnRefund from "./Pages/FooterPages/ReturnRefund";
import ShippingPolicy from "./Pages/FooterPages/ShippingPolicy";
import PaymentPolicy from "./Pages/FooterPages/PaymentPolicy";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= STATIC PAGES ================= */}
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/blogs" element={<Blog />} />


        {/* ================= PRODUCT ================= */}
        <Route path="/product/:slug" element={<ProductDetails />} />

        {/* ================= BLOG detials ================= */}
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* ================= CATEGORY ================= */}
        <Route
          path="/category/:categoryName"
          element={<CategoryListing />}
        />

        {/* ================= SUB CATEGORY ================= */}
        <Route
          path="/category/:categoryName/:subCategory"
          element={<CategoryListing />}
        />

        {/* ================= FOOTER PAGES ================= */}
<Route path="/about-us" element={<AboutUs />} />
<Route path="/contact-us" element={<ContactUs />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
<Route path="/return-refund" element={<ReturnRefund />} />
<Route path="/shipping-policy" element={<ShippingPolicy />} />
<Route path="/payment-policy" element={<PaymentPolicy />} />


        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
