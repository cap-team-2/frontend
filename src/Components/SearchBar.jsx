// SearchBar.jsx
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IoSearchCircleSharp } from "react-icons/io5";
const API = import.meta.env.VITE_APP_API_URL;

export default function SearchBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Update page view to show the products that match the search input **change this to show results in a dropdown and change the view of products only after submitting
  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
    search();
  }

  // Async function to call performSearch function
  const search = useCallback(async () => {
    await performSearch(searchQuery);
  }, [searchQuery]);

  // Call the search function
  useEffect(() => {
    search();
  }, [search]);

  // Api call to retrieve a specific product
  async function performSearch(searchQuery) {
    try {
      const response = await axios.get(`${API}/products/?q=${searchQuery}`);
      if (response.data) {
        setSearchResults(response.data);
      }
    } catch (error) {
      setSearchResults([]);
    }
  }

  // Submit search input and call search() function
  function handleSearchSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <>
      {/*search bar*/}
      <div className="my-2">
        <form id="search" onSubmit={handleSearchSubmit}>
          <div className="flex justify-center">
            <div className="relative w-10/12 tablet:w-8/12 flex items-center">
              <input
                onChange={handleSearchChange}
                type="text"
                className="p-2.5 h-10 w-full text-sm rounded-3xl border border-gray text-black shadow pl-4 caret-green-light  focus:outline-none focus:ring-1 focus:ring-green-light"
                placeholder="Search"
              />
              {/* Search button magnifying glass */}
              <IoSearchCircleSharp
                onClick={search}
                className="absolute right-0 text-5xl h-10 text-green-light rounded-r-3xl cursor-pointer tablet:hover:bg-gray-light border-l border-l-gray"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
