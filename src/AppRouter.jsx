import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product, NavBar, ProductItem } from "./components";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/:id" element={<ProductItem />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
