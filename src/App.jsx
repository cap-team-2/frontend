// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

// PAGES
import Browse from "./Pages/Browse";
// import CartPage from "./Pages/CartPage";
import FarmersMarkets from "./Pages/FarmersMarkets";
import LandingPage from "./Pages/LandingPage";
import Products from "./Pages/Products";
import ProductById from "./Components/ProductDetails";
import FourOFour from "./Pages/FourOFour";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import List from "./Pages/List";
import Market from "./Pages/Market";
import Nav from "./Components/Nav";
import Register from "./Pages/Register";
import Sellers from "./Pages/Sellers";
import SellersById from "./Pages/SellersById"
const API = import.meta.env.VITE_APP_API_URL;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState("Home");
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [session, setSession] = useState(
    {
      user_id: '9e6ef4fb-5574-4968-912a-ea28257d708e',
      total: '0.00',
      created_at: 'today'
    }
  );

  // replace with the signed in user or a guest uuid
  const userId = "9e6ef4fb-5574-4968-912a-ea28257d708e"

  // Update searchResults state to have all products App component is rendered
    useEffect(() => {
      // if (axios.get(`${API}/shopping-session`)) {
      // } 


  // used to create a new shopping session
      axios.put(`${API}/shopping-session/1`, session )

      axios.get(`${API}/shopping-session/1`)
      .then((res) => {
        setSession(res.data);
      })
      .catch((error) => {
        console.log(error);
      })

    }, []);

  return (
    <main className="h-full w-full font-font">
      <Router>
        <Nav
          setSearchResults={setSearchResults}
        // setFilteredProducts={setFilteredProducts}
        // filter={filter}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={<HomePage 
              searchResults={searchResults} 
              setSearchResults={setSearchResults} 
              setFilteredProducts={setFilteredProducts} 
              filteredProducts={filteredProducts}
              filter={filter}
              setFilter={setFilter}
            // session={session}
            />}
          />
          <Route path="/login" element={<Login />} />
           <Route path="/list" element={<List />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductById />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellers/:id" element={<SellersById />} />
          <Route path="/market" element={<Market searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/farmers-markets" element={<FarmersMarkets />} />
          {/* <Route path="/cart" element={<CartPage session={session} />} /> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
