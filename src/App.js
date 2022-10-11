import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />}></Route>
      <Route path="/add-product" element={<AddProduct />}></Route>
    </Routes>
  );
}

export default App;
