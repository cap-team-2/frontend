// SearchResults.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_APP_API_URL;

export default function SearchResults({searchResults, session}) {
  const [ cart, setCart ] = useState(
    {
      session_id: '',
      product_id: '',
      quantity: ''
    }
  );
  const navigate = useNavigate();

// Function to add a product to the cart
  function addToCart (product) {
    setCart({...cart, session_id: session.id, product_id: product.id, quantity: "1"})
  }

  useEffect(() => {
    if (cart.session_id && cart.product_id && cart.quantity) {
      axios.post(`${API}/cart-products`, cart)
      .catch((error) => {
        console.log(error);
      });
    }
  }, [cart]);

// function to create a new cart product

    return (
      <div className="grid grid-cols-1 mobile:grid-cols-2 h-auto w-auto tablet:grid-cols-3 laptop:grid-cols-4 px-4 desktop:px-[12%] xl:px-[15%] self-center tablet:gap-8">
        {searchResults.length ? (
          searchResults.map((results) => {
            const costPerUnitWeight = (results.cost / results.weight).toFixed(2);
            return (
              <div
                className="flex flex-col justify-between items-center p-2 gap-4 h-auto w-auto max-w-52  border mobile:max-tablet:odd:border-l-0 mobile:max-tablet:even:border-r-0 tablet:[&:nth-child(4n)]:border-r-0 tablet:border-l-0 border-gray-light tablet:shadow-xl"
                key={results.id}
              >
                <div className="flex flex-col gap-4 shrink-0 w-full">
                  <img
                    src={results.image}
                    alt={results.description}
                    className="h-44 w-fit max-w-20 tablet:h-52 laptop:h-56 desktop:h-60 shrink-0 grow-1 self-center hover:cursor-pointer tablet:hover:border tablet:hover:border-[transparent] peer"
                    onClick={() => navigate(`/products/${results.id}`)}
                  />
                  <p className="text-lg font-medium peer-hover:underline peer-hover:underline-offset-8 peer-hover:decoration-green-light">
                    {capitalize(results.name)}
                  </p>
                  <p className="text-2xl font-semibold relative -z-0">
                    <span className="text-3xl">
                      ${`${results.cost.split(".")[0]}`}
                    </span>
                    <span className="text-xs absolute top-1 ">
                      {results.cost.split(".")[1]}
                    </span>
                    <span className="pl-4 text-[gray] text-sm font-normal">
                      ({costPerUnitWeight}/{results.unit_measurement})
                    </span>
                  </p>
                </div>

                <button
                  className="bg-green-light rounded text-xs text-white font-semibold h-8 w-full self-start hover:bg-green"
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

const capitalize = (str) => {
  const stringArray = str.split(' ');
  const capitalizedString = stringArray.map(string => string[0].toUpperCase() + string.slice(1))

  return capitalizedString.join(' ');
}