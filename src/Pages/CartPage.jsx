// Cart.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cart from "../Components/Cart.jsx";
import Summary from "../Components/Summary.jsx";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
const API = import.meta.env.VITE_APP_API_URL;

export default function CartPage({session}) {
    const navigate = useNavigate();
    const [ cartProducts, setCartProducts ] = useState([])
    // gets all items in the cart
    useEffect(() => {
        axios.get(`${API}/cart-joins/${session.id || 1}`)
        .then((res) => {
            setCartProducts(res.data);
        })
    }, [])

    return (
        <div className="h-auto w-full p-6 mt-20 ">
            <BiArrowBack className="mb-6 text-lg tablet:text-black hover:text-green cursor-pointer" onClick={() => navigate(-1)}/>
            <div className="mb-8">
                <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
            </div>
            <div className="w-full">
                <Summary cartProducts={cartProducts}/>
            </div>
        </div>
    )
}