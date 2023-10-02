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
    <div className="w-full tablet:pl-10 pl-4 pr-10 py-8">
        <p className="text-2xl font-bold mb-5">Summary</p>
        {cartProducts ? 
            cartProducts.map((cartProduct) => {
                return (
                    <div key={cartProduct.id} className="my-2 grid grid-cols-2">
                        <p>${cartProduct.cost}</p>
                        <p className="text-right">X {cartProduct.quantity}</p>
                    </div>
                )
            })
        : null}
        <div className="grid grid-cols-2 mt-16">
            <p className="">Subtotal:</p>
            <p className="text-right">${total}</p>
            <p className="">Tax:</p>
            <p className="text-right">${(total / 8.875).toFixed(2)}</p>
            <p className='border-t mt-4'>Total:</p>
            <p className="text-right border-t mt-4">${(parseFloat((total).toFixed(2)) + parseFloat((total / 8.875).toFixed(2))).toFixed(2)}</p>
        </div>
        <button className="text-green-light">Checkout</button>
    </div>
  )
}

