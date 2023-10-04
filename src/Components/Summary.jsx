import React, { useEffect, useState } from 'react'

export default function Summary({cartProducts}) {
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
    
  return (
    <div className="h-full w-full flex flex-row tablet:flex-col justify-between">
      <div className="grid grid-cols-2 my-10 text-sm font-medium gap-y-4">
        <p className="">Cart total:</p>
        <p className="text-right font-semibold">${total}</p>
        <p className="">Tax:</p>
        <p className="text-right font-semibold">${(total / 8.875).toFixed(2)}</p>
        <p className="border-t pt-3">Subtotal:</p>
        <p className="text-right border-t pt-2 font-bold text-lg">
          $
          {(
            parseFloat(total.toFixed(2)) +
            parseFloat((total / 8.875).toFixed(2))
          ).toFixed(2)}
        </p>
      </div>
      <button className="bg-green rounded bg-opacity-90 hover:bg-opacity-100 text-sm laptop:text-base font-semibold text-white h-10 w-full ">
        Proceed to Checkout
      </button>
    </div>
  );
}

