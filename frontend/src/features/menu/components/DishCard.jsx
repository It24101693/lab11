import React from "react";
import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px", background: "#f9f9f9" }}>
      <h3>{dish.name}</h3>
      <p>Rs. {dish.price.toFixed(2)}</p>
      <small style={{ color: "#666" }}>Category: {dish.category}</small>
      <br />
      {!dish.available && <span style={{ color: "red", fontWeight: "bold" }}>Sold out</span>}
      <br />
      <Link to={`/dish/${dish.id}`} style={{ display: "inline-block", marginTop: "8px" }}>View Details</Link>
    </div>
  );
}

export default DishCard;