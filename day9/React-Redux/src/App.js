// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetail";

function App() {
  return (
    <>
      <Header />
      {/* <ProductListing /> */}
      <Routes>
        <Route path="/" exact element={<ProductListing/>} />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
