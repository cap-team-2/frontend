/* eslint-disable react/prop-types */
// SearchResults.jsx

import axios from 'axios'
import { useEffect, useState, Suspense, lazy } from 'react'
import Loading from '../Loading'
//import SearchResultsProduct from './SearchResultsProduct'
const SearchResultsProduct = lazy(() => import('./SearchResultsProduct'))
const API = import.meta.env.VITE_APP_API_URL

export default function SearchResults({
  searchResults,
  cartQuantity,
  setCartQuantity,
  searchQuery,
}) {
  const [isLoading, setIsLoading] = useState(true)

  // Function to add a product to the cart
  function addToCart(product) {
    setCartQuantity(cartQuantity + 1)
  }

  if (searchQuery) {
    return (
      <h2 className="text-xl h-full font-medium col-span-full text-center mt-10">
        Sorry, we could not find any results for {searchQuery}
      </h2>
    )
  }

  return (
    <div
      id="products-container"
      //className="flex flex-wrap justify-start gap-8 w-fit"
      className={productsContainer}
    >
      {searchResults ? (
        searchResults.map((results) => {
          return (
            <Suspense key={results.id} fallback={<Loading />}>
              <SearchResultsProduct
                results={results}
                addToCart={addToCart}
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
              />
            </Suspense>
          )
        })
      ) : (
        <Loading />
      )}
    </div>
  )
}

// Tailwind Styles
const mobile = 'mobile:grid-cols-2'
const tablet = 'tablet:grid-cols-3'
const laptop = 'laptop:grid-cols-4'
const productsContainer = `grid grid-cols-1 justify-center w-full gap-8 py-4 ${mobile} ${tablet} ${laptop}`
