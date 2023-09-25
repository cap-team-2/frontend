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

  return (
    <div>

      {sellers ? sellers.map((seller) => {
        return (
          <div key={seller.id}>
            <SellerProfile seller={seller} />
          </div>
        )
      }) : <p>here</p>}
    </div>
  );
}
