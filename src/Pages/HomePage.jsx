/* eslint-disable react/prop-types */
// Home.jsx

import { useState, useEffect, useRef } from 'react'
import { scrollToTop } from '../utils/scrollUtil'
import axios from 'axios'
import FilterProductsBy from '../Components/filter/FilterProductsBy'
import SearchResults from '../Components/search/SearchResults'
import SearchBar from '../Components/search/SearchBar'
const API = import.meta.env.VITE_APP_API_URL

export default function HomePage({
  searchResults,
  setSearchResults,
  searchForText,
  cartQuantity,
  setCartQuantity,
  cartProducts,
  setCartProducts,
}) {
  const [invalidQuery, setInvalidQuery] = useState(null)
  const filter = useRef('Home')

  // Make an API call for all products when returning to the homepage to update the searchResults state
  useEffect(() => {
    filterProducts(filter.current)
  }, [])

  // Api call to retrieve a specific product
  function performSearch(query) {
    setInvalidQuery(null)

    try {
      axios.get(`${API}/products/?q=${query}`).then((res) => {
        if (!res.data.length) {
          setSearchResults(null)
          setInvalidQuery(query)
        } else {
          setSearchResults(res.data)
        }
      })
    } catch (error) {
      setSearchResults(null)
    }

    scrollToTop()
  }

  // Update the filter state to switch between the different filters for each product category
  function filterProducts(category) {
    setInvalidQuery(null)
    if (category !== filter) {
      filter.current = `${category}`
      axios
        .get(
          `${API}/products?${category === 'Home' ? '' : `category=${category}`}`
        )
        .then((res) => {
          setSearchResults(null)
          setSearchResults(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    scrollToTop()
  }

  return (
    <div
      id="home"
      className="h-full min-h-full w-full flex flex-col pt-24 pb-4"
    >
      <div
        id="search-bar-container"
        className="flex flex-col fixed top-16 tablet:top-16 w-full bg-white z-40 pt-2"
      >
        {/* Search Bar */}
        <SearchBar
          setSearchResults={setSearchResults}
          performSearch={performSearch}
          searchForText={searchForText}
        />
        <div
          id="filter-buttons-container"
          className="flex overflow-x-auto scroll-smooth tablet:justify-center shadow-md"
        >
          {/* Filter Buttons */}
          <FilterProductsBy
            setSearchResults={setSearchResults}
            filterProducts={filterProducts}
            filter={filter}
          />
        </div>
      </div>
      <div
        id="search-results-container"
        className="grid justify-center mt-32 px-8"
      >
        {/* Products */}
        <SearchResults
          searchResults={searchResults}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          invalidQuery={invalidQuery}
        />
      </div>
    </div>
  )
}
