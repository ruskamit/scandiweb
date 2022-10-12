import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm />
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default AddProduct;
