// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';
import SearchResults from "../Components/SearchResults";

export default function HomePage({searchResults, setSearchResults}) {


    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center tablet:w-3/5">
          <FilterProductsBy setSearchResults={setSearchResults} />
        </div>
        <div className="">
          <SearchResults searchResults={searchResults} />
        </div>
      </div>
    );
}