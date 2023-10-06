// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./Providers/UserProvider";
import axios from "axios";

// PAGES 
import Browse from "./Pages/Browse";
import CartPage from "./Pages/CartPage";
import FarmersMarkets from "./Pages/FarmersMarkets";
import LandingPage from "./Pages/LandingPage";
import ProductById from "./Components/ProductDetails";
import Footer from "./Components/Footer.jsx";
import FourOFour from "./Pages/FourOFour";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Market from "./Pages/Market";
import Nav from "./Components/Nav";
import Register from "./Pages/Register";
import Sellers from "./Pages/Sellers";
import SellersById from "./Pages/SellersById";



const API = import.meta.env.VITE_APP_API_URL;

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [filter, setFilter] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchForText, setSearchForText] = useState("Products");
  const [session, setSession] = useState({
    user_id: "9e6ef4fb-5574-4968-912a-ea28257d708e",
    total: "0.00",
    created_at: "today",
  });

  // replace with the signed in user or a guest uuid
  const userId = "9e6ef4fb-5574-4968-912a-ea28257d708e";

  // Update searchResults state to have all products App component is rendered
useEffect(() => {
    // used to create a new shopping session
    axios.put(`${API}/shopping-session/1`, session);

    axios
    .get(`${API}/shopping-session/1`)
    .then((res) => {
      setSession(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

    // Assign quantity state to the amount of products in cart
  if (!cartProducts.length > 0) {
    axios
    .get(`${API}/cart-products`)
    .then((res) => {
      // Calculate the new quantity
      const newQuantity = res.data.reduce((acc, cartProduct) => acc + cartProduct.quantity, 0);
      setQuantity(newQuantity);
    })
    .catch((error) => {
      return error
    });
  }
}, []);

  return (
    <main className="h-screen w-full font-font flex flex-col">
      <Router>
        <Nav setSearchResults={setSearchResults} quantity={quantity} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={
              <HomePage
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setFilteredProducts={setFilteredProducts}
                filteredProducts={filteredProducts}
                filter={filter}
                setFilter={setFilter}
                session={session}
                setSession={setSession}
                searchForText={searchForText}
                setSearchForText={setSearchForText}
                quantity={quantity}
                setQuantity={setQuantity}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<ProductById  session={session}/>} />
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
                session={session}
                setSession={setSession}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}