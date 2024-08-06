/* eslint-disable react/prop-types */
// SearchBar.jsx
import { useState } from 'react'
//black import axios from "axios";
import { IoSearchCircleSharp } from 'react-icons/io5'

export default function SearchBar({ performSearch, searchForText }) {
  const [searchQuery, setSearchQuery] = useState('')

  // Update page view to show the products that match the search input **change this to show results in a dropdown and change the view of products only after submitting
  function handleSearchChange(event) {
    setSearchQuery(event.target.value)
  }

  // Submit search input and call search() function
  function handleSearchSubmit(event) {
    event.preventDefault()
    if (searchQuery) {
      performSearch(searchQuery)
    }
    setSearchQuery('')
  }

  return (
    <>
      {/*search bar*/}
      <div className="my-4">
        <form onSubmit={handleSearchSubmit} id="search">
          <div className="flex justify-center">
            <div className="relative w-10/12 tablet:w-8/12 flex items-center">
              <input
                onChange={handleSearchChange}
                value={searchQuery}
                type="text"
                className="p-2.5 h-10 w-full text-sm rounded-3xl border border-gray text-black shadow pl-4 caret-green  focus:outline-none focus:ring-1 focus:ring-green"
                placeholder={`Search for ${searchForText}`}
              />
              {/* Search button magnifying glass */}
              <IoSearchCircleSharp
                onClick={handleSearchSubmit}
                className="absolute right-0 text-5xl h-10 text-green rounded-r-3xl cursor-pointer tablet:hover:bg-gray-light border border-gray"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
