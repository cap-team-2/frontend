// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";
<<<<<<< HEAD

export default function HomePage({ searchResults, setSearchResults, setFilter, filter, setFilteredProducts, filteredProducts, sessionID }) {

    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center">
          <FilterProductsBy  setFilter={setFilter} setSearchResults={setSearchResults} filter={filter} />
        </div>
        <div className="">
          <SearchResults sessionID={sessionID} searchResults={searchResults} filteredProducts={filteredProducts} />
        </div>
=======
import { useEffect } from "react";

export default function HomePage({searchResults, setSearchResults, setFilter, filter, setFilteredProducts, filteredProducts}) {

       

  return (
    <div className="h-full w-full flex flex-col ">
      <div className="self-center">
        <FilterProductsBy setSearchResults={setSearchResults} filter={filter} setFilter={setFilter} />
>>>>>>> main
      </div>
      <div className="">
        <SearchResults searchResults={searchResults} filteredProducts={filteredProducts}/>

      </div>
    </div>
  );
}