import React, { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(values) {
    const errs = {};
    if (values.name.trim().length < 2) errs.name = "Name too short";
    if (!/^[^@\s]+@[^\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Enter a valid email";
    if (Number(values.qty) < 1) errs.qty = "Qty must be ≥ 1";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return <p style={{ color: "green", fontWeight: "bold" }}>Thanks, {form.name}! Order received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <h2>Place Order</h2>
      <div>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <span style={{ color: "red", display: "block" }}>{errors.name}</span>}
      </div>

      <div>
        <label>Email: </label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span style={{ color: "red", display: "block" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Quantity: </label>
        <input name="qty" type="number" value={form.qty} onChange={handleChange} />
        {errors.qty && <span style={{ color: "red", display: "block" }}>{errors.qty}</span>}
      </div>

      <button type="submit" style={{ padding: "8px", cursor: "pointer" }}>Place order</button>
    </form>
  );
}

export default OrderPage;