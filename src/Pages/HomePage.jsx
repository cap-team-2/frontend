// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';

export default function HomePage({searchResults}) {
    const 

    return (
        <div className="h-full w-full">
            <FilterProductsBy />
            <h1>Home</h1>
            {console.log(searchResults.length)}
            {searchResults.length ? searchResults.map((results) => {
                return (
                    <div key={results.id}>
                        <h2>{results.name}</h2>
                        {/* <img src={results.image} alt={results.description} /> */}
                    </div>
                )
            }): <h2>Results Not Found</h2> }

        </div>
    )
}