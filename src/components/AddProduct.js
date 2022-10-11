import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <h1>Add Product</h1>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default AddProduct;
