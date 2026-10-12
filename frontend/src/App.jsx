import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={{ marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Menu</NavLink> | 
        <NavLink to="/order" style={{ marginLeft: "15px", textDecoration: "none", fontWeight: "bold" }}>Place Order</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 - Page not found</p>} />
      </Routes>
    </div>
  );
}