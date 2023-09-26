// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";
import SearchBar from "../Components/SearchBar";

export default function HomePage({ searchResults, setSearchResults, setFilter, filter, filteredProducts, sessionID }) {

    return (
      <div className="h-full w-full flex flex-col tablet:pt-24">
        <div className="flex flex-col fixed top-20 tablet:top-16 w-full bg-white z-40 tablet:pt-2">
        {/* Search Bar */}
          <SearchBar />
          <div className="flex overflow-x-auto scroll-smooth tablet:justify-center shadow-md tablet:pt-2">
          {/* Filter Buttons */}
            <FilterProductsBy   setFilter={setFilter} setSearchResults={setSearchResults} filter={filter} />
          </div>
        </div>
        <div className="mt-56 tablet:mt-32">
        {/* Products */}
          <SearchResults sessionID={sessionID} searchResults={searchResults} filteredProducts={filteredProducts} />
        </div>
      </div>
  );
}

