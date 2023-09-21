// Vendors.jsx

import { useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL

//well be used to retrieve all vendor data 
export default function Sellers() {
  const [seller, setSeller] = useState([])

  useEffect(() => {
    axios.get(`${API}/sellers`)
      .then((res) => {
        console.log(res.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, []);



  return <div><h1>Sellers</h1></div>;
}