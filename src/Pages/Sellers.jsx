// Sellers.jsx
import { useState, useEffect } from "react";
import axios from "axios";
// import SellersById from "../Components/SellersById";
import SellerCard from "../Components/sellerCard/sellerCard";
import SellerProfile from "../Components/SellerProfile";
const API = import.meta.env.VITE_APP_API_URL;

export default function Sellers() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/sellers`)
      .then((res) => {
        setSellers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("hi", sellers)
  return (
    <div>

      {sellers ? sellers.map((seller) => {
        return (
          <div key={seller.id}>
            <div className="front">
              {/* <h1>Seller Details</h1> */}
              {/* <p>Name: {seller.first_name} {seller.last_name}</p>
              <p>Email: {seller.email}</p>
              <p>Phone: {seller.phone}</p> */}

              <div className="back">
                {/* <p>Address: {seller.address_1}</p>
                <p>City: {seller.city}</p>
                <p>Zipcode: {seller.zipcode}</p>
                <p>Type: {seller.type && seller.type.seller}</p> */}
              </div>
            </div>
            {/* <SellersById key={seller.id} seller={seller} /> */}
            {/* <SellerCard key={seller.id} seller={seller} /> */}
            <SellerProfile key={seller.id} seller={seller} />
          </div>
        )
      }) : <p>here</p>}
    </div>
  );
}
