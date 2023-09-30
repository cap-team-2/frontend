// cart component 

import axios from "axios"
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_APP_API_URL;

export default function Cart({cartProducts, setCartProducts}) {
    // console.log(session.id)
    // console.log(cartProducts)

    function deleteProductFromCart (id) {
        axios.delete(`${API}/cart-products/${id}`)
        .then(() => {
            // Update the cartProducts state with the removed product
            setCartProducts((prevCartProducts) =>
              prevCartProducts.filter((product) => product.cart_id !== id)
            );
          })
          .catch((error) => {
            console.error(error);
          });
    }

  return (
    <div>
        <p>My Cart</p>
        {cartProducts ?
            cartProducts.map((productAdded, index) => {
                return (
                    <div key={productAdded.id + index} className="rounded-none border-black">
                        <img src={productAdded.image} alt={productAdded.name}/>
                        <p> Name: {productAdded.name}</p>
                        <p> Description: {productAdded.description}</p>
                        <p> Cost: {productAdded.cost}</p>
                        <p> Quantity: {productAdded.quantity}</p>
                        <p> Weight: {productAdded.weight} {productAdded.unit_measurement}</p>
                        {/* <p> {productAdded}</p> */}
                        <button onClick={()=> deleteProductFromCart(productAdded.cart_id)}>X</button>
                    </div>
                )
            })
         : null}
    </div>
  )
}