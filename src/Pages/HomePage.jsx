// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';

export default function HomePage({searchResults}) {


    return (
      <div className="h-full w-full">
        <FilterProductsBy />
        <div className="grid justify-center gap-12 mt-6">
          {searchResults ? (
            searchResults.map((results) => {
              return (
                <div key={results.id} className="grid justify-center gap-4 h-auto w-48">
                  <img src={results.image} alt={results.description} className="h-48 w-48 justify-self-center rounded-lg shadow-sm shadow-green-dark" />
                  <p className="text-md font-bold">{results.description} - {results.weight}{results.unit_measurement}</p>
                  <p className="text-xs font-medium">${results.cost}</p>
                  <button className="bg-green-light rounded text-xs text-white font-semibold h-8 w-full justify-self-center">Add to cart</button>
                </div>
              );
            })
          ) : (
            <h2>Results Not Found</h2>
          )}
        </div>
      </div>
    );
}