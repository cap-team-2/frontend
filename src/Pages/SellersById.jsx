// SellersById.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import SellerCard from "./sellerCard/sellerCard";

const API = import.meta.env.VITE_APP_API_URL;

export default function SellersById() {
    const [seller, setSeller] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${API}/sellers/${id}`)
            .then((res) => {
                setSeller(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log("here", seller)
    return (
        <div>
            {seller[0] ? <div className="front">
                <h1>Seller Details</h1>
                <p>Name: {seller[0].first_name} {seller[0].last_name}</p>
                <p>Email: {seller[0].email}</p>
                <p>Phone: {seller[0].phone}</p>

                <div className="back">
                    <p>Address: {seller[0].address_1}</p>
                    <p>City: {seller[0].city}</p>
                    <p>Zipcode: {seller[0].zipcode}</p>
                </div>
            </div> : null}
        </div>
    );
}

