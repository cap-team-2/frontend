// Sellers.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import SellerCard from "../Components/sellerCard/sellerCard";
import SearchBar from "../Components/SearchBar.jsx";
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
    <div className="mt-28 flex flex-col">
      <SearchBar />
      <div className="flex flex-col tablet:grid tablet:grid-cols-2 gap-y-16">

        {sellers ? sellers.map((seller) => {
          return (
            <div key={seller.id} className="">
              <SellerCard seller={seller} />
            </div>
          )
        }) : <p>here</p>}
      </div>

    </div>
  );
}
