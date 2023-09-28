// ProductDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;

export default function ProductById() {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    // Make an api call to retrieve a product with the given id
    useEffect(() => {
        axios
            .get(`${API}/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
      <div className="h-full w-full mt-20 flex justify-center">
        <div className="h-full w-full flex flex-col p-4">
          <img
            src={product.image}
            alt={product.description}
            className="h-auto tablet:h-96 w-auto"
          />
          <div className="">
            <h2 className="text-2xl font-medium">{product.name}</h2>
            <div>
              <p
                className={`${
                  product.stock > 10
                    ? "text-green font-medium"
                    : product.stock > 0
                    ? "text-gold"
                    : "text-[red]"
                }`}
              >{`${
                product.stock > 10
                  ? "● In Stock"
                  : product.stock > 0
                  ? "● Only " + product.stock + " left"
                  : "● Out of Stock"
              }`}</p>
              <div className="flex">
                <button className="bg-gray-light">Qty: {quantity}</button>
                <button className="bg-green-light">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

// const capitalize = (str) => {
//   const stringArray = str.split(" ");
//   const capitalizedString = stringArray.map(
//     (string) => string[0].toUpperCase() + string.slice(1)
//   );

//   return capitalizedString.join(" ");
// };