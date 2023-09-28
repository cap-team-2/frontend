// Cart.jsx
import { useEffect, useState } from "react"
import Cart from "../Components/Cart.jsx"
import Summary from "../Components/Summary.jsx"
import axios from "axios"
const API = import.meta.env.VITE_APP_API_URL;

export default function CartPage({session}) {

    const [ cartProducts, setCartProducts ] = useState([])
    // gets all items in the cart
    useEffect(() => {
        axios.get(`${API}/cart-joins/${session.id || 1}`)
        .then((res) => {
            setCartProducts(res.data);
        })
    }, [])

    return (
        <div className="h-full w-full flex flex-col pt-[136px] tablet:pt-24 display: grid grid-cols-2">
            <div className="mt-5">
                <Cart cartProducts={cartProducts} />
            </div>
            <div className="mt-5 w-96 ">
                <Summary cartProducts={cartProducts}/>
            </div>
        </div>
    )
}