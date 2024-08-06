/* eslint-disable react/prop-types */
// Cart.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Cart from '../Components/cart/Cart.jsx'
import Summary from '../Components/Summary.jsx'
import Stripe from '../Components/Stripe.jsx'
import axios from 'axios'
import { BiArrowBack } from 'react-icons/bi'
const API = import.meta.env.VITE_APP_API_URL

export default function CartPage({ cartProducts, setCartProducts, cartQuantity, setCartQuantity }) {
    const [ checkout, setCheckout ] = useState(false);
    const navigate = useNavigate();

    // gets all items in the cart
    useEffect(() => {
      if(session) {
         axios
           .get(`${API}/cart-joins/${session.id || 1}`)
           .then((res) => {
             setCartProducts(res.data);
           })
           .catch((error) => {
             console.log(error);
           });
      }
       
    }, [])
    // useEffect(() => {
    //   if(session) {
    //      axios
    //        .get(`${API}/cart-joins/${session.id || 1}`)
    //        .then((res) => {
    //          setCartProducts(res.data);
    //        })
    //        .catch((error) => {
    //          console.log(error);
    //        });
    //   }

    // }, [])

    return ( 
      <div className="h-auto w-full px-6 pt-4 tablet:pt-4  pb-20 mt-20 tablet:mt-24 flex flex-col  tablet:px-20 items-center relative">
        <div className="flex flex-col tablet:flex-row h-full tablet:h-[600px] w-full rounded-2xl border-gray tablet:gap-10 tablet:justify-center">
        <BiArrowBack
          className="mb-6 text-6xl tablet:text-2xl tablet:text-black hover:text-green cursor-pointer tablet:absolute top-0 tablet:left-10 xl:left-56"
          onClick={() => navigate(-1)}
        />
          <div className="h-full w-full min-w-fit max-w-xl mb-8 border rounded-2xl pt-10 pb-4 px-4 border-gray-light shadow-lg">
           {checkout ? 
           <Stripe/>
           :
           <Cart
           cartProducts={cartProducts}
           setCartProducts={setCartProducts}
           cartQuantity={cartQuantity}
           setCartQuantity={setCartQuantity}
         />
            }
          </div>
          <div className="h-fit w-full desktop:w-[400px] xl:w-[400px] border rounded-2xl pb-4 px-4 border-gray-light shadow-lg max-w-xs">
            <Summary cartProducts={cartProducts} setCheckout={setCheckout} checkout={checkout}/>
          </div>
        </div>
      </div>
    </div>
  )
}
