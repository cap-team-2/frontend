// Products.jsx
import { useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL

export default function Products( ) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${API}/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);



  return <div><h1>Products</h1></div>;
}