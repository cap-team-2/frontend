import React from "react";

import "./SellerCard.css";

const SellerCard = ({ seller }) => {
    return (
        <div className="flex flex-col">
            <div className="seller-card-front">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p>Name: {seller.first_name} {seller.last_name}</p>

                        </div>
                        <div className="flip-card-back">
                            <p><strong>Email:</strong> {seller.email}</p>
                            <p><strong>Address:</strong> {seller.address_1} </p>

                            <p>   <strong>City:</strong> {seller.city} </p>
                            <p> <strong>Zip Code:</strong> {seller.zipcode} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SellerCard;
