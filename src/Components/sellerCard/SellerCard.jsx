import React from "react";

import "./SellerCard.css";

const SellerCard = ({ seller }) => {
    return (
        <div className="seller-card-front">
            <div className="seller-card__image">
                <div className="seller-card__name">
                    <p>Name: {seller.first_name} {seller.last_name}</p>
                </div>
                <div className="seller-card__email">{seller.email}</div>
            </div>
            <div className="market-card__bottom-half">
                <div>
                    <strong>Address:</strong> {seller.address_1}
                </div>
                <div>
                    <strong>City:</strong> {seller.city}
                </div>
                <div>
                    <strong>Zip Code:</strong> {seller.zipcode}
                </div>
                <div>
                    <strong>Type:</strong> {seller.type.seller}
                </div>
            </div>
        </div>
    );
};

export default SellerCard;
