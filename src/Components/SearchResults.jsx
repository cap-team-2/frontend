// SearchResults.jsx

import axios from "axios";
import { useState, useEffect } from "react";
const API = import.meta.env.VITE_APP_API_URL;

export default function SearchResults({searchResults, sessionID}) {
  const [ cart, setCart ] = useState(
    {
      session_id: '',
      product_id: '',
      quantity: ''
    }
  );
// on click button function
  function addToCart (product) {
    setCart({...cart, session_id: sessionID.id, product_id: product.id, quantity: "0"})
    createCart(product);
  }
// function to create a new cart product
  function createCart () {
    axios.post(`${API}/cart-products`, cart)
    .catch((error) => {
      console.log(error);
    });
  }

    return (
      <div className="grid grid-cols-1 mobile:grid-cols-2 h-auto w-auto tablet:grid-cols-4 px-4 desktop:px-[12%] xl:px-[15%] self-center gap-8">
        {searchResults.length ? (
          searchResults.map((results) => {
            return (
              <div
                className="flex flex-col justify-between items-center p-2 gap-4 h-96 tablet:h-[450px] w-auto max-w-52  border mobile:max-tablet:odd:border-l-0 mobile:max-tablet:even:border-r-0 tablet:[&:nth-child(4n)]:border-r-0 tablet:border-l-0 border-gray-light shadow-xl"
                key={results.id}
              >
                <div className="flex flex-col gap-4 shrink-0">
                  <img
                    src={results.image}
                    alt={results.description}
                    className="h-44 w-full max-w-20 tablet:h-52 laptop:h-56 desktop:h-60 shrink-0 grow-1 self-center hover:cursor-pointer"
                  />
                  <p className="text-sm font-bold">
                    {results.description} - {Math.round(results.weight)}
                    {results.unit_measurement}
                  </p>
                  <p className="text-xs font-medium">${results.cost}</p>
                </div>

                <button className="bg-green-light rounded text-xs text-white font-semibold h-8 w-full justify-self-center hover:bg-green"
                onClick={() => addToCart(results)}
                >
                  Add to cart
                </button>
              </div>
            );
          })
        ) : (
          <h2 className="text-xl font-medium col-span-full text-center mt-10">Sorry, we couldn't find any results</h2>
        )}
      </div>
    );
}