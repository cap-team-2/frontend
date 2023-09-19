// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';

export default function HomePage({searchResults}) {


    return (
      <div className="h-full w-full flex flex-col">
        <div className="self-center tablet:w-3/5">
          <FilterProductsBy />
        </div>
        <div className="grid grid-cols-1 mobile:grid-cols-2 h-auto w-auto mt-6 tablet:grid-cols-4 px-4 tablet:px-8 desktop:w-8/12 self-center gap-4">
          {searchResults ? (
            searchResults.map((results) => {
              return (
                <div
                  key={results.id}
                  className="flex flex-col justify-between p-2 gap-4 h-96 tablet:h-[450px] w-auto max-w-52 mb-8 "
                >
                  <div className="flex flex-col gap-4 shrink-0 ">
                    <img
                      src={results.image}
                      alt={results.description}
                      className="h-44 w-full max-w-20 tablet:h-52 laptop:h-56 desktop:h-60 shrink-0 grow-1 self-center shadow-sm shadow-green-dark"
                    />
                    <p className="text-sm font-bold">
                      {results.description} - {Math.round(results.weight)}
                      {results.unit_measurement}
                    </p>
                    <p className="text-xs font-medium">${results.cost}</p>
                  </div>

                  <button className="bg-green-light rounded text-xs text-white font-semibold h-8 w-full justify-self-center">
                    Add to cart
                  </button>
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