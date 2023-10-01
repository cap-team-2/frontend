// Market.jsx
import MarketComponent from "../Components/MarketComponent"


export default function Market({ searchForText, setSearchForText }) {
  return (
    <div className="h-full w-full xl:px-32">
      <MarketComponent  searchForText={searchForText} setSearchForText={setSearchForText} />
    </div>
  );
}
