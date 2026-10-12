import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import MenuList from "../components/MenuList";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  if (isLoading) return <p>Loading menu...</p>;
  if (error) return <p style={{ color: "red" }}>Could not load menu: {error}</p>;

  const filteredDishes = (dishes || []).filter((dish) =>
    dish.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div>
      <h2>CampusEats Menu</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
        style={{ padding: "8px", width: "100%", maxWidth: "300px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <MenuList dishes={filteredDishes} />
    </div>
  );
}

export default MenuPage;