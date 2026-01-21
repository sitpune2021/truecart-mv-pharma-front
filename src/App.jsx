import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Medicines from "./Pages/Medicines/Medicines";
import Offerings from "./Pages/Offerings/Offerings";
import Stores from "./Pages/Stores/Stores";

import CategoryListing from "./Pages/CategoryListing/CategoryListing";
import ProductDetails from "./Pages/Product/ProductDetails";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
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
