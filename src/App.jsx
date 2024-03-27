// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// PAGES 
import Browse from "./Pages/Browse";
import CartPage from "./Pages/CartPage.jsx";
import FarmersMarkets from "./Pages/FarmersMarkets";
import LandingPage from "./Pages/LandingPage";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer.jsx";
import FourOFour from "./Pages/FourOFour";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
// import List from "./Pages/List";
import Market from "./Pages/Market";
import Nav from "./Components/Nav";
import Register from "./Pages/Register";
import Sellers from "./Pages/Sellers";
import SellersById from "./Pages/SellersById";

const API = import.meta.env.VITE_APP_API_URL;

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  //create state variable for the current cart, object with sessionId, product: quantity
  const [searchForText, setSearchForText] = useState("Products");

  // replace with the signed in user or a guest uuid
  // const userId = "9e6ef4fb-5574-4968-912a-ea28257d708e";
  useEffect(() => {
    setSearchForText("Products");
    axios
      .get(`${API}/products`)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Update searchResults state to have all products App component is rendered
useEffect(() => {

    // Assign cartQuantity state to the amount of products in cart
  if (cartProducts.length > 0) {
    axios
    .get(`${API}/cart-products`)
    .then((res) => {
      // Calculate the new cartQuantity
      const newQuantity = res.data.reduce((acc, cartProduct) => acc + cartProduct.cartQuantity, 0);
      setCartQuantity(newQuantity);
    })
    .catch((error) => {
      return error
    });
  }
}, []);

  return (
    <main className="h-full w-full font-font grid grid-cols-1 grid-rows-[auto_auto_auto]">
      <Router>
        <Nav setSearchResults={setSearchResults} cartQuantity={cartQuantity} />
        <div className='h-full w-auto'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={
                <HomePage
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  searchForText={searchForText}
                  setSearchForText={setSearchForText}
                  cartQuantity={cartQuantity}
                  setCartQuantity={setCartQuantity}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductDetails cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
            <Route
              path="/sellers"
              element={
                <Sellers
                  searchForText={searchForText}
                  setSearchForText={setSearchForText}
                />
              }
            />
            <Route path="/sellers/:id" element={<SellersById />} />
            <Route
              path="/market"
              element={
                <Market
                  searchForText={searchForText}
                  setSearchForText={setSearchForText}
                />
              }
            />
            <Route path="/browse" element={<Browse />} />
            <Route path="/farmers-markets" element={<FarmersMarkets />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  cartQuantity={cartQuantity}
                  setCartQuantity={setCartQuantity}
                />
              }
            />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}




