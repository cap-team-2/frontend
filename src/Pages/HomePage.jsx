// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';
import SearchResults from "../Components/SearchResults";

export default function HomePage({searchResults, setSearchResults, setFilter, filter, setFilteredProducts, filteredProducts}) {


    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center tablet:w-3/5">
          <FilterProductsBy setSearchResults={setSearchResults} setFilteredProducts={setFilteredProducts} filter={filter} setFilter={setFilter} />
        </div>
        <div className="">
          <SearchResults searchResults={searchResults} filteredProducts={filteredProducts}/>
        </div>
      </div>
    );
}