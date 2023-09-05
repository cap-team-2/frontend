// Products.jsx
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.VITE_APP_API_URL

export default function Products( ) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${API}/products`)
      .then((res) => {
        console.log(res)
        // setProducts()
      })
  }, []);



  return <div><h1>Products</h1></div>;
}