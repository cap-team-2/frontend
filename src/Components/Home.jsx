import { useState } from 'react'

export default function Home({ products }) {
    // const {products, setProducts} = useState([]);

  return (
    <div>
        {products ? 
        products.map((product) => {return(
            <h1 key={product.id}>{product.name}</h1>
        )})
        :"not here"}
    </div>
  )
}