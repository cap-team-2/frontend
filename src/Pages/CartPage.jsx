// Cart.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cart from "../Components/Cart.jsx";
import Summary from "../Components/Summary.jsx";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
const API = import.meta.env.VITE_APP_API_URL;

export default function CartPage({ session, cartProducts, setCartProducts, quantity, setQuantity }) {
    const navigate = useNavigate();
   
    // gets all items in the cart
    useEffect(() => {
        axios.get(`${API}/cart-joins/${session.id || 1}`)
        .then((res) => {
            setCartProducts(res.data);
        })
    }, [])

    return (
        <div className="h-auto w-full p-6 mt-20 flex flex-col tablet:px-32 laptop:px-60 xl:px-96">
            <BiArrowBack className="mb-6 text-lg tablet:text-black hover:text-green cursor-pointer" onClick={() => navigate(-1)}/>
            <div className="flex flex-col tablet:flex-row h-full tablet:border tablet:p-10 tablet:h-[600px] rounded-2xl border-gray shadow-lg gap-10">
                <div className="h-full w-full mb-8">
                    <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} quantity={quantity} setQuantity={setQuantity} />
                </div>
                <div className="h-full w-full desktop:w-[400px] xl:w-[600px]">
                    <Summary cartProducts={cartProducts}/>
                </div>
            </div>
        </div>
    )
}