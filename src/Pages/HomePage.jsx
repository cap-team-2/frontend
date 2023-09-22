// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";


export default function HomePage({searchResults}) {


    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center">
          <FilterProductsBy />
        </div>
        <div>
          <SearchResults searchResults={searchResults} />
        </div>
      </div>
    );
}