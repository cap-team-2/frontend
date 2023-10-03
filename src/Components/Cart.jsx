// cart component 

import { keyframes } from "@emotion/react";
import axios from "axios"
import { useEffect, useState } from "react";
import { CgCloseR } from "react-icons/cg";
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
          // Update the cart quantity
          setQuantity(newQuantity)

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
            setQuantity(0)
            setCartProducts((prevCartProducts) =>
              prevCartProducts.filter((product) => product.cart_id !== id)
            );
          })
          .catch((error) => {
            console.error(error);
          });
    }

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden mobile:h-full tablet:h-screen scroll-smooth">
      <p className="text-xl font-bold border-b border-gray pb-2 mb-4">
        My Cart ({quantity} item{`${quantity > 1 ? 's' : ''}`})
      </p>
      {cartProducts
        ? cartProducts.map((productAdded, index) => {
            return (
              <div
                key={productAdded.id + index}
                className="flex justify-evenly w-full shadow-lg border border-gray-light p-2 rounded-lg"
              >
                {/* Product Image */}
                <img
                  className="h-20 w-20 rounded shadow-lg mr-4"
                  src={productAdded.image}
                  alt={productAdded.name}
                />
                {/* Product Name and Price */}
                <div className="flex">
                  <div className="font-medium">
                    <p className="font-semibold">
                      {capitalize(productAdded.name)}
                    </p>
                    <p className="text-sm font-semibold text-green">
                      ${productAdded.cost}
                    </p>
                  </div>
                  {/* Update Quantity Buttons and Display */}
                  <div className="flex flex-col border">
                    <CgCloseR
                      className="text-red"
                      onClick={() =>
                        deleteProductFromCart(productAdded.cart_id)
                      }
                    />
                    <div className="flex">
                      <button
                        className="text-right"
                        onClick={() =>
                          updateQuantity(
                            productAdded,
                            productAdded.quantity - 1
                          )
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {quantity === 0 && (
        <p className="text-xl font-bold pt-10 text-center">Your Cart is empty</p>
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