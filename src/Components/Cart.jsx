// cart component 

import axios from "axios"
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_APP_API_URL;

export default function Cart({cartProducts, setCartProducts}) {
    // const [ updateCart, setUpdatedCart ] = useState({

    // })
    // console.log(session.id)
    // console.log(cartProducts)

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
                        <p> Weight: {productAdded.weight} {productAdded.unit_measurement}</p>
                        <button onClick={()=>updateQuantity(productAdded, productAdded.quantity - 1)}>{"<"}</button>
                        <p> Quantity: {productAdded.quantity}</p>
                        <button onClick={()=>updateQuantity(productAdded, productAdded.quantity + 1)}>{">"}</button>
                        <br></br>
                        <button onClick={()=> deleteProductFromCart(productAdded.cart_id)}>X</button>
                    </div>
                )
            })
         : null}
    </div>
  )
}