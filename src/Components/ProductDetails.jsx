// ProductDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;

export default function ProductById() {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const costPerUnitWeight = (product.cost / product.weight).toFixed(2);

    // Make an api call to retrieve a product with the given id
    useEffect(() => {
        axios
            .get(`${API}/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    

    return (
        
      <div className="h-full w-full">
        {Object.keys(product).length !== 0 ? ( 
        <div className="h-screen w-full flex flex-col justify-between px-4 pb-8 pt-24 gap-8 ">
          <div className="p-4">
            <img
              src={product.image}
              alt={product.description}
              className="h-auto tablet:h-96 shadow-2xl rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">{capitalize(product.name)}</h2>
            <div className="flex flex-col">
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
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="font-medium text-base">Description</h3>
                <p className="text-[gray] text-sm">{product.description}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-2xl font-semibold relative -z-0">
                  <span className="text-3xl">
                    ${`${product.cost.split(".")[0]}`}
                  </span>
                  <span className="text-xs absolute top-1 ">
                    {product.cost.split(".")[1]}
                  </span>
                  <span className="pl-4 text-[gray] text-sm font-normal">
                    ({costPerUnitWeight}/{product.unit_measurement})
                  </span>
                </p>
                <button className="bg-gray-light">Qty: {quantity}</button>
                <button className="bg-green-light">Add to cart</button>
              </div>
            </div>
          </div>
        </div>) : (<p className="text-lg mt-40">Loading...</p>)}
       
      </div>
    );
}

const capitalize = (str) => {
    const stringArray = str.split(" ");
    const capitalizedString = stringArray.map(
        (string) => string[0].toUpperCase() + string.slice(1)
    );

    return capitalizedString.join(" ");
};