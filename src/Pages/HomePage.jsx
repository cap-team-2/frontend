// Home.jsx
import Home from "../Components/Home.jsx"

export default function HomePage({products}) {
    return (
        <div>
            <Home products={products}/>
        </div>
        <SearchResults setSearchResults={setSearchResults} />
      </div>
    );
}