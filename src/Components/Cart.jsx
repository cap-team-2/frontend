// cart component 

import { keyframes } from "@emotion/react";
import axios from "axios"
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_APP_API_URL;

export default function Cart({cartProducts, setCartProducts}) {
    const [ quantity, setQuantity ] = useState(0)
    // const [ updateCart, setUpdatedCart ] = useState({

    // })
    // console.log(session.id)
    // console.log(cartProducts)
    function itemClick () {
        console.log()
    } 

    function updateInput (event, cart_id) {
        console.log(event.target.value)
        axios.put(`${API}/cart-products/${cart_id}`, { quantity: event.target.value })
        .then(() => {
            // Update the cartProducts state with the new quantity
            setCartProducts((prevCartProducts) =>
              prevCartProducts.map((product) =>
                product.cart_id === cart_id
                  ? { ...product, quantity: event.target.value }
                  : product
              )
            );
          })
          .catch((error) => {
            console.error(error);
          });   
    }

    function updateQuantity (cartProduct, newQuantity) {
        axios.put(`${API}/cart-products/${cartProduct.cart_id}`, { quantity: newQuantity })
        .then(() => {
          // Update the cartProducts state with the new quantity
          setCartProducts((prevCartProducts) =>
            prevCartProducts.map((product) =>
              product.cart_id === cartProduct.cart_id
                ? { ...product, quantity: newQuantity }
                : product
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });    
    }

    function deleteProductFromCart (id) {
        axios.delete(`${API}/cart-products/${id}`)
        .then(() => {
            setCartProducts((prevCartProducts) =>
              prevCartProducts.filter((product) => product.cart_id !== id)
            );
          })
          .catch((error) => {
            console.error(error);
          });
    }

  return (
    <div className="w-full tablet:pl-10 pl-4 pr-10 py-8 overflow-y-auto overflow-x-hidden mobile:h-full tablet:h-screen scroll-smooth">
      <p className="text-2xl font-bold border-b border-gray pb-5">
        My Cart ({quantity} items)
      </p>
      {cartProducts
        ? cartProducts.map((productAdded, index) => {
            return (
              <div
                key={productAdded.id + index}
                className="mobile:grid-cols-1 tablet:grid-cols-1 py-5 grid laptop:grid-cols-3 gap-4 border-b border-gray"
              >
                <div className="col-span-1">
                  <img
                    className=""
                    src={productAdded.image}
                    alt={productAdded.name}
                  />
                </div>
                <div className="grid grid-cols-2 col-span-2">
                  <div className="text-xl font-medium">
                    <p>{productAdded.name}</p>
                    <p>${productAdded.cost}</p>
                    <p
                      className="mobile:pt-2 tablet:pt-10 underline"
                      onClick={() => itemClick()}
                    >
                      View Details
                    </p>
                  </div>
                  <div className="grid grid-cols-3 justify-self-center">
                    <button
                      className="text-right"
                      onClick={() =>
                        updateQuantity(productAdded, productAdded.quantity - 1)
                      }
                    >
                      {"<"}
                    </button>
                    <form className="flex items-center">
                      <input
                        className="placeholder-black w-full text-center"
                        onChange={(event) =>
                          updateInput(event, productAdded.cart_id)
                        }
                        type="text"
                        placeholder={productAdded.quantity}
                      />
                    </form>
                    <button
                      className="text-left"
                      onClick={() =>
                        updateQuantity(
                          productAdded,
                          parseInt(productAdded.quantity) + 1
                        )
                      }
                    >
                      {">"}
                    </button>
                    <button
                      onClick={() =>
                        deleteProductFromCart(productAdded.cart_id)
                      }
                      className="col-start-2 text-red"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {quantity === 0 && (
        <p className="text-2xl font-bold pt-10 ">Your Cart is empty</p>
      )}
    </div>
  );
}