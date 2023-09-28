// SellerCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./SellerCard.css";

// eslint-disable-next-line react/prop-types
export default function SellerCard({ seller }) {
    return (
        <div className="h-full w-full px-8 mt-8">
            <div className="border rounded-xl border-gray shadow-2xl p-4 h-full w-full flex flex-col justify-between">
                <div className="p-4">
                    <img src={seller.image} alt={`Image of ${seller.first_name}`} className=" h-52 rounded-lg" />
                </div>
                <Link to={`/sellers/${seller.id}`} className="text-xl font-medium">{seller.first_name} {seller.last_name}</Link>
                <p className="text-sm mb-2">{seller.email}</p>
                <p className="text-xs">{seller.address_1}, {seller.city}, {seller.zipcode}</p>
                <Link to={`/sellers/${seller.id}`} className="bg-green-light text-white font-semibold h-8 w-full text-center flex items-center justify-center rounded text-sm mt-14" > Visit Profile</Link>


            </div>  {/* <div className="seller-card-front">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={seller.image} alt="seller-pic" style={{ maxWidth: "400px", maxHeight: "400px" }} />
                            <div className="flip-card-front__name">
                                <p>{seller.first_name} {seller.last_name}</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p><strong>Email:</strong> {seller.email}</p>
                            <p><strong>Address:</strong> {seller.address_1} </p>
                            <p>   <strong>City:</strong> {seller.city} </p>
                            <p> <strong>Zip Code:</strong> {seller.zipcode} </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    )
}



