// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";

export default function HomePage({searchResults}) {
    return (
        <div className="h-full w-full">
            <FilterProductsBy />
            <h1>Home</h1>
            {searchResults.map((results) => {
                return (
                    <div>
                        <h1>{results.name}</h1>
                        {/* <img src={results.image} alt={results.description} /> */}
                    </div>
                )
            })}

        </div>
    )
}