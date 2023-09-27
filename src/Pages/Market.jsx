// Market.jsx
import MarketComponent from "../Components/MarketComponent"


export default function Market({ searchResults, setSearchResults }) {
  return (
    <div className="h-full w-full">
      <MarketComponent searchResults={searchResults} setSearchResults={setSearchResults} />
    </div>
  );
}
