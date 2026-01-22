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

        {/* ================= PRODUCT ================= */}
        <Route path="/product/:slug" element={<ProductDetails />} />




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

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
