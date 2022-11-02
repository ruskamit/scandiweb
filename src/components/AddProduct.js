import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  return (
    <div>
      <nav className="container">
        <h1>Add Product</h1>
        <button className="btn">
          <Link to="/" className="link">
            Cancel
          </Link>
        </button>
      </nav>
      <ProductForm />
    </div>
  );
};

export default AddProduct;
