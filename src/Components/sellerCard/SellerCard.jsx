// SellerCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./SellerCard.css";

// eslint-disable-next-line react/prop-types
export default function SellerCard({ seller }) {
    return (
      <div className="h-full min-w-[250px] w-10 tablet:w-72">
        <div className="border rounded-xl border-gray shadow-2xl p-4 h-full w-full flex flex-col justify-between">
          {/* Image */}
            <Link to={`/sellers/${seller.id}`} className="h-auto w-full mb-4">
                <img
                src={seller.image}
                alt={`Image of ${seller.first_name}`}
                className=" h-52 w-full rounded-lg "
                />
            </Link>

            <Link
                to={`/sellers/${seller.id}`}
                className="text-xl font-medium mb-1"
                >
                {seller.first_name} {seller.last_name}
            </Link>
            <p className="text-sm mb-4">{seller.email}</p>
            <p className="text-xs">
                {seller.address_1}, {seller.city}, {seller.zipcode}
            </p>
            {/* Visit profile button */}
            <Link
                to={`/sellers/${seller.id}`}
                className="bg-green bg-opacity-90 hover:bg-opacity-100 text-white font-semibold h-8 w-full text-center flex items-center justify-center rounded text-sm mt-14"
            >
                Visit Profile
            </Link>
        </div>
      </div>
    );
}



