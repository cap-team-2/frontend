/* eslint-disable react/prop-types */
// SearchResultsProduct.jsx
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { capitalize } from '../../utils/capitalizeUtil'

const API = import.meta.env.VITE_APP_API_URL

export default function SearchResultsProduct({
  results,
  addToCart,
  cartQuantity,
  setCartQuantity,
}) {
  const [productQuantity, setProductQuantity] = useState(0)
  const prodQuantity = useRef(0)
  const costPerUnitWeight = (results.cost / results.weight).toFixed(2)
  const navigate = useNavigate()


  // Calls the addToCart function, updates the quantity for the product that calls it, updates the cart if the quantity is 1 or greater
  const handleAddToCart = (product, operator = 'plus') => {
    if (productQuantity >= 1) {
      if (operator === 'minus') {
        setCartQuantity(cartQuantity - 1)
        setProductQuantity(productQuantity - 1)
      } else {
        setProductQuantity(productQuantity + 1)
        setCartQuantity(cartQuantity + 1)
      }


      axios
        .get(`${API}/cart-products`)
        .then((res) => {
          const currentProduct = res.data.find(
            (data) => data.product_id === product.id
          )
          updateQuantity(currentProduct, operator)
        })
        .catch((error) => {
          return error
        })
    } else {
      addToCart(product)
      setProductQuantity(productQuantity + 1)
    }
  }

  // Makes a put request to update the quantity of the product
  const updateQuantity = (product, operator = 'plus') => {
    if (operator === 'minus') {
      axios.put(`${API}/cart-products/${product.cart_id}`, {
        quantity: product.quantity - 1,
      })
    } else {
      axios.put(`${API}/cart-products/${product.cart_id}`, {
        quantity: product.quantity + 1,
      })
    }
  }

  return (
    <div
      id="product-container"
      className="grid grid-rows-1 h-auto w-[250px] shrink-0 shadow-xl rounded-xl relative"
    >
      <div className="relative">
        <a
          onClick={() =>
            navigate(`/products/${results.id}`, {
              state: { productQuantity },
            })
          }
        >
          <img
            src={results.image}
            alt={results.description}
            className="h-[200px] w-full shrink-0 grow-0 self-center rounded-t-xl hover:cursor-pointer shadow object-cover peer"
          />
        </a>
        {/* Product Image and quantity */}
        {/* Update Quantity  */}
        {productQuantity > 0 && (
          <div className="flex bg-topaz h-8 w-20 items-center justify-center gap-2 rounded-full absolute bottom-2 right-2">
            <CgMathMinus
              className="text-lg text-green cursor-pointer hover:scale-110"
              onClick={() => handleAddToCart(results, 'minus')}
            />
            <p className=" text-green ">{productQuantity}</p>
            <CgMathPlus
              className="text-lg text-green cursor-pointer hover:scale-110"
              onClick={() => handleAddToCart(results)}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-end gap-4 shrink-0 w-full p-2 mt-4">
        {/* Product Name */}
        <p className="text-lg font-medium peer-hover:underline peer-hover:underline-offset-8 decoration-green hover:transition ease-in-out delay-150">
          {capitalize(results.name)}
        </p>
        {/* Price */}
        <p className="text-2xl font-semibold relative -z-0">
          <span className="text-3xl">${`${results.cost.split('.')[0]}`}</span>
          <span className="text-xs absolute top-1 ">
            {results.cost.split('.')[1]}
          </span>
          <span className="pl-4 text-[gray] text-sm font-normal">
            ({costPerUnitWeight}/{results.unit_measurement})
          </span>
        </p>
        {/* Add to cart button */}
        <button
          className=" text-xs tablet:text-sm text-white font-semibold bg-green rounded flex items-center justify-evenly h-8 w-full  bg-opacity-90 hover:bg-opacity-100"
          onClick={() => handleAddToCart(results)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
