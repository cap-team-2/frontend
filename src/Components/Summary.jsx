import React, { useEffect, useState } from 'react'

export default function Summary({cartProducts, setCheckout, checkout}) {
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        setTotal(getTotal())
    }, [cartProducts])

    function getTotal () {
        if (cartProducts) {
           const sum = cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.cost * cartProduct.quantity),
            0
            );
            return parseFloat(sum.toFixed(2));
        } else {
            return 0;
        }
    }

    function activateCheckout () {
        setCheckout(!checkout);
    }
    console.log(checkout)
  return (
    <div className="h-full w-full flex flex-col tablet:justify-start">
      <div className="my-10 text-sm font-medium gap-y-4 flex flex-col">
        <div className='flex justify-between'>
          <p className="">Cart total:</p>
          <p className="text-right font-semibold">${total}</p>
        </div>
        <div className='flex justify-between'>
          <p className="">Tax:</p>
          <p className="text-right font-semibold">${(total / 8.875).toFixed(2)}</p>
        </div>
        <div className='flex justify-between border-t'>
          <p className="pt-3">Subtotal:</p>
          <p className="text-right pt-2 font-bold text-lg">
            $
            {(
              parseFloat(total.toFixed(2)) +
              parseFloat((total / 8.875).toFixed(2))
            ).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="bg-green rounded bg-opacity-90 hover:bg-opacity-100 text-sm laptop:text-base font-semibold text-white h-10 w-full"
      onClick={()=>activateCheckout()}>
        Proceed to Checkout
      </button>
    </div>
  );
}

