import axios from 'axios'
import { useEffect, useState } from 'react'
const API = import.meta.env.VITE_APP_API_URL;

export default function Cart({sessionID}) {
    const [ cartProducts, setCartProducts ] = useState([])

    // gets all items in the cart
    useEffect(() => {
        axios.get(`${API}/cart-products`)
        .then((res) => {
            setCartProducts(res.data);
        })
    }, [])

    console.log(sessionID, cartProducts)

  return (
    <div>
        <p>My Cart</p>
        {cartProducts ?
            cartProducts.map((productAdded) => {
                return (
                    <p>{productAdded.product_id}</p>
                )
            })
         : null}
    </div>
  )
}