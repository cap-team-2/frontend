// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";

export default function HomePage({ searchResults, setSearchResults, setFilter, filter, setFilteredProducts, filteredProducts, sessionID }) {

    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center">
          <FilterProductsBy  setFilter={setFilter} setSearchResults={setSearchResults} filter={filter} />
        </div>
        <div className="">
          <SearchResults sessionID={sessionID} searchResults={searchResults} filteredProducts={filteredProducts} />
        </div>
      </div>
  );
}