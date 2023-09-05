// Vendors.jsx

import { useState, useEffect } from "react";
// import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL

//well be used to retrieve all vendor data 
export default function Vendors() {
  const [vendors, setVendors] = useState([])

  // useEffect(() => {
  //   axios.get(`${API}/vendors`)
  //     .then((res) => {
  //       console.log(res.data)
      
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, []);



  return <div><h1>Vendors</h1></div>;
}