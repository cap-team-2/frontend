// Market.jsx
import MarketComponent from "../Components/MarketComponent"


export default function Market({ searchForText, setSearchForText }) {
  return (
    <div className="h-auto w-full  laptop:px-14 desktop:px-20 xl:px-32 pb-4">
      <MarketComponent  searchForText={searchForText} setSearchForText={setSearchForText} />
    </div>
  );
}
