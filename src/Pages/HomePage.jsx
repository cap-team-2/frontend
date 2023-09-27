// Home.jsx

import { useEffect } from "react";
import axios from "axios";
import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";
import SearchBar from "../Components/SearchBar";
const API = import.meta.env.VITE_APP_API_URL;


export default function HomePage({ searchResults, setSearchResults, setFilter, filter, filteredProducts, sessionID, searchQuery, setSearchQuery}) {
  // Make an API call for all products when returning to the homepage to update the searchResults state
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="h-full w-full flex flex-col tablet:pt-24">
      <div className="flex flex-col fixed top-20 tablet:top-16 w-full bg-white z-40 tablet:pt-2">
        {/* Search Bar */}
        <SearchBar setSearchResults={setSearchResults} />
        <div className="flex overflow-x-auto scroll-smooth tablet:justify-center shadow-md tablet:pt-2">
          {/* Filter Buttons */}
          <FilterProductsBy
            setFilter={setFilter}
            setSearchResults={setSearchResults}
            filter={filter}
          />
        </div>
      </div>
      <div className="mt-56 tablet:mt-32">
        {/* Products */}
        <SearchResults
          sessionID={sessionID}
          searchResults={searchResults}
          filteredProducts={filteredProducts}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
}

