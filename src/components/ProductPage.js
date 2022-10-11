import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <button>
        <Link to="/add-product">ADD</Link>
      </button>
    </div>
  );
};

export default ProductPage;
