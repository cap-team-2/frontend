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
        <div className="h-auto w-full px-10 tablet:pt-16 grid tablet:grid-cols-3 mobile:py-16 tablet:px-20 xl:px-60">
            <div className="border mt-16 rounded-3xl border-gray shadow-md ">
                <div className="mt-1 col-span-2">
                    <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
                </div>
                <div className="mt-1 mobile:col-span-2 tablet:col-span-1">
                    <Summary cartProducts={cartProducts}/>
                </div>
            </div>
        </div>
    )
}