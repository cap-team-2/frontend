// cart component 

import { keyframes } from "@emotion/react";
import axios from "axios"
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_APP_API_URL;

export default function Cart({cartProducts, setCartProducts}) {
    const [ quantity, setQuantity ] = useState(1)
    // const [ updateCart, setUpdatedCart ] = useState({

    // })
    // console.log(session.id)
    // console.log(cartProducts)

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
        <p className="text-2xl font-bold">My Cart</p>
        {cartProducts ? 
            cartProducts.map((productAdded, index) => {
                return (
                    <div key={productAdded.id + index} className="mobile:grid-cols-1 tablet:grid-cols-1 py-2 grid laptop:grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <img className="" src={productAdded.image} alt={productAdded.name}/>
                        </div>
                        <div className="grid grid-cols-2 col-span-2">
                            <div>
                                <p> Name: {productAdded.name}</p>
                                <p> Description: {productAdded.description}</p>
                                <p> Cost: ${productAdded.cost}</p>
                                <p> Weight: {productAdded.weight} {productAdded.unit_measurement}</p>
                            </div>
                            <div className="grid grid-cols-3 justify-self-center">
                            <button className="text-right"
                            onClick={()=>updateQuantity( productAdded, productAdded.quantity - 1)}>{"<"}</button>
                                <form className="flex items-center">
                                    <input
                                    className="placeholder-black w-full text-center"
                                    onChange={(event)=>updateInput(event, productAdded.cart_id)}
                                    type="text"
                                    placeholder={productAdded.quantity}
                                    />                                    
                                </form>
                                <button className="text-left"
                                onClick={()=>updateQuantity( productAdded, parseInt(productAdded.quantity) + 1)}>{">"}</button>
                                <button onClick={()=>deleteProductFromCart(productAdded.cart_id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })
         : null}
    </div>
  )
}

/*
<div>
    <p class="text-4xl font-black leading-9 text-gray-800">Summary</p>
    <div class="flex items-center justify-between pt-16">
        <p class="text-base leading-none text-gray-800">Subtotal</p>
        <p class="text-base leading-none text-gray-800">$9,000</p>
    </div>
    <div class="flex items-center justify-between pt-5">
        <p class="text-base leading-none text-gray-800">Shipping</p>
        <p class="text-base leading-none text-gray-800">$30</p>
    </div>
    <div class="flex items-center justify-between pt-5">
        <p class="text-base leading-none text-gray-800">Tax</p>
        <p class="text-base leading-none text-gray-800">$35</p>
    </div>
</div>
<div>
    <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
        <p class="text-2xl leading-normal text-gray-800">Total</p>
        <p class="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
    </div>
</div>
*/