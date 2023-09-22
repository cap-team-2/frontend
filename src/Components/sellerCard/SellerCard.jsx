import React from "react";

import "./SellerCard.css";

const SellerCard = ({ seller }) => {
    return (
        <div className="seller-card-front">
            <div className="seller-card__image">
                <div className="seller-card__name">
                    <p>Name: {seller.first_name} {seller.last_name}</p>

                </div>
                <div className="seller-card__bottom-half">
                    <p><strong>Email:</strong>{seller.email}</p>
                    <p><strong>Address:</strong> {seller.address_1} </p>

                    <p>   <strong>City:</strong> {seller.city} </p>
                    <p> <strong>Zip Code:</strong> {seller.zipcode} </p>
                </div>
            </div>
        </div>
    );
};

export default SellerCard;
