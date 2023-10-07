import React, { useEffect, useState } from 'react'
// import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
// import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm.jsx';
// const API = import.meta.env.VITE_APP_API_URL;


function Stripe() {
  const [ thanks, setThanks ] = useState(false);
  // const [ stripePromise, setStripePromise ] = useState(null);
  // const [ clientSecret, setClientSecret ] = useState("");
  // useEffect(() => {
  //   axios.get(`${API}/config`)
  //   .then((res) => {
  //     const { publishableKey } = res.data
  //     setStripePromise(loadStripe(publishableKey))
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.post(`${API}/config/create-payment-intent`)
  //   .then((res) => {
  //     const { clientSecret } = res.data
  //     setClientSecret(clientSecret)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }, [])

  return (
    <div>
      {thanks ? 
      <p>Thank You For Your Purchase</p> :
      <CheckoutForm setThanks={setThanks}/>}
      {/* {stripePromise && (
        <Elements stripe={stripePromise} >
          <CheckoutForm/>
        </Elements>
      )} */}
    </div>
  )
}

export default Stripe