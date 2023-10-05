// ProductDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CgCloseR, CgMathPlus, CgMathMinus } from "react-icons/cg";
import { updateQuantity } from "./CartFunctions";
import { optional } from "joi";

const API = import.meta.env.VITE_APP_API_URL;

export default function ProductById() {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState([]);
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
      <div className="h-full w-full flex justify-center">
        {Object.keys(product).length !== 0 ? (
          <div className="h-screen w-full flex flex-col justify-between px-4 pb-20 pt-24 gap-6 tablet:flex-row tablet:items-start tablet:pt-40 tablet:justify-center  tablet:h-fit">
            {/* Image div */}
            <div className="p-4 flex flex-col items-center gap-4 flex-shrink-0">
              <img
                src={product.image}
                alt={product.description}
                className="h-auto w-auto tablet:h-96 shadow-2xl rounded-xl"
              />
              <div className="flex gap-4 ">
                <p className="text-green">●</p>
                <p className="text-gray">●</p>
                <p className="text-gray">●</p>
                <p className="text-gray">●</p>
              </div>
            </div>
            {/* Name, stock, and description */}
            <div className="flex flex-col gap-4  tablet:pt-4 tablet:gap-20 h-full w-full tablet:max-w-md">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">
                  {capitalize(product.name)}
                </h2>
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
                <div className="mt-4 flex flex-col">
                  <h3 className="font-medium text-base">Description</h3>
                  <p className="text-[gray] text-sm">{product.description}</p>
                </div>
              </div>

              {/* Price and Quantity */}
              <div className="flex flex-col gap-4 border-t border-gray pt-4">
                <div className="flex  justify-between">
                  <p className="text-2xl font-semibold relative">
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
                </div>
                {/* Add to cart button */}
                <div className="flex justify-between tablet:justify-start gap-20">
                  {/* Update Quantity Buttons and Display */}
                  <div className="flex flex-col ml-4 justify-between">
                    <CgCloseR
                      className="text-red self-end cursor-pointer"
                      onClick={() =>
                        deleteProductFromCart(
                          product.cart_id,
                          setQuantity,
                          setCartProducts
                        )
                      }
                    />
                    <div className="flex border items-center w-20 justify-evenly rounded border-gray shadow">
                      <CgMathMinus
                        className="text-base cursor-pointer"
                        onClick={() => {
                          if (product.quantity > 1)
                            updateQuantity(
                              product,
                              product.quantity - 1,
                              setQuantity,
                              setCartProducts
                            );
                        }}
                      />
                      <p className="cursor-default">{product.quantity}</p>
                      <CgMathPlus
                        className="text-base cursor-pointer"
                        onClick={() =>
                          updateQuantity(
                            product,
                            parseInt(product.quantity) + 1,
                            setQuantity,
                            setCartProducts
                          )
                        }
                      />
                    </div>
                  </div>
                  <button className="bg-gray-light text-sm h-8 w-20 rounded">
                    Qty: {product.quantity}
                  </button>
                  <button className="bg-green rounded bg-opacity-90 hover:bg-opacity-100 text-xs laptop:text-sm font-semibold text-white h-8 w-40">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-2xl mt-40 text-center">
            Loading<span className="animate-ping ">...</span>
          </p>
        )}
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