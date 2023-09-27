// Home.jsx
import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";

export default function HomePage({ searchResults, setSearchResults, setFilter, filter, sessionID }) {

    return (
      <div className="h-full w-full flex flex-col pt-[136px] tablet:pt-24">
        <div className="flex overflow-x-auto overflow-y-clip tablet:justify-center border-y border-gray h-[70px] fixed w-full pt-2 bg-white drop-shadow-md">
          <FilterProductsBy  setFilter={setFilter} setSearchResults={setSearchResults} filter={filter} />
        </div>
        <div className="mt-32">
          <SearchResults sessionID={sessionID} searchResults={searchResults} />
        </div>
      </div>
  );
}