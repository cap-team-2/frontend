// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

// PAGES
import Browse from './Pages/Browse'
import CartPage from './Pages/CartPage.jsx'
import FarmersMarkets from './Pages/FarmersMarkets'
import LandingPage from './Pages/LandingPage'
import ProductDetails from './Components/ProductDetails'
import Footer from './Components/Footer.jsx'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Market from './Pages/Market'
import Nav from './Components/Nav'
import Register from './Pages/Register'
import Sellers from './Pages/Sellers'
import SellersById from './Pages/SellersById'

const API = import.meta.env.VITE_APP_API_URL

export default function App() {
  const [searchResults, setSearchResults] = useState(null)
  const [cartProducts, setCartProducts] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  
  //create state variable for the current cart, object with sessionId, product: quantity
  const [searchForText, setSearchForText] = useState('Products')

  // replace with the signed in user or a guest uuid
  // const userId = "9e6ef4fb-5574-4968-912a-ea28257d708e";


  return (
    <main className="h-full w-full font-font grid grid-cols-1 grid-rows-[auto_auto_auto]">
      <Router>
        <Nav setSearchResults={setSearchResults} cartQuantity={cartQuantity} />
        <div className="h-full w-auto">
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
                  session={session}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  cartQuantity={cartQuantity}
                  setCartQuantity={setCartQuantity}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              }
            />
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
                  session={session}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  )
}
