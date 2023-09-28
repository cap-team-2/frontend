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
    console.log(getTotal(), total)
  return (
    <div>
        Summary
        {cartProducts ? 
            cartProducts.map((cartProduct) => {
                return (
                    <div key={cartProduct.id}>
                        <p>{cartProduct.cost}</p>
                    </div>
                )
            })
        : null}
        <p>Total: ${total}</p>
    </div>
  )
}

