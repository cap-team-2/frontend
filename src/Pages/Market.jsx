// Market.jsx
import MarketComponent from "../Components/MarketComponent"


export default function Market({ searchResults, setSearchResults }) {
  return (
    <div className="h-full w-full xl:px-32">
      <MarketComponent searchResults={searchResults} setSearchResults={setSearchResults} />
    </div>
  );
}
