import React from "react";
import { useState } from "react";
import TypeSwitcher from "./TypeSwitcher";

const ProductForm = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //temporary
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="sku">SKU: </label>
          <input
            id="sku"
            type="text"
            required
            placeholder="Type the SKU"
            onChange={handleChange}
            name="sku"
          />
        </div>
        <div>
          <label for="name">Name: </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Type product name"
            onChange={handleChange}
            name="product name"
          />
        </div>
        <div>
          <label for="price">Price ($): </label>
          <input
            id="price"
            type="number"
            required
            placeholder="insert price"
            onChange={handleChange}
            name="product price"
          />
        </div>
        <TypeSwitcher />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
