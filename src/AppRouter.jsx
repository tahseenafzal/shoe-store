import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product, NavBar, ProductItem, NotFound } from "./components";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
