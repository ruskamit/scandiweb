import React from "react";
import { useState } from "react";
import TypeSwitcher from "./TypeSwitcher";
import "./aBitOfStylingSoItAintUgly.css";

const ProductForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-product">
        <label>
          SKU:
          <input
            id="sku"
            type="text"
            required
            placeholder="Type the SKU"
            onChange={handleChange}
            name="sku"
          />
        </label>

        <label>
          Name:
          <input
            id="name"
            type="text"
            required
            placeholder="Type product name"
            onChange={handleChange}
            name="product name"
          />
        </label>

        <label>
          Price ($):
          <input
            id="price"
            type="number"
            required
            placeholder="insert price"
            onChange={handleChange}
            name="product price"
          />
        </label>

        <TypeSwitcher />

        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
