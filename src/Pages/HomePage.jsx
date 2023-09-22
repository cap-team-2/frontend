// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";


export default function HomePage({searchResults, setSearchResults, setFilter, filter, setFilteredProducts, filteredProducts}) {


    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center">
          <FilterProductsBy set />
        </div>
        <div className="">
          <SearchResults searchResults={searchResults} filteredProducts={filteredProducts}/>

        </div>
      </div>
    );
}