// SearchResults.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_APP_API_URL;

export default function SearchResults({searchResults, session, setSession, quantity, setQuantity, cartProducts, setCartProducts}) {
  const [ cart, setCart ] = useState(
    {
      session_id: '',
      product_id: '',
      quantity: 1
    }
  );


  const navigate = useNavigate();


// Function to add a product to the cart
  function addToCart(product) {
    setQuantity(quantity+1)
    setCart({...cart, session_id: session.id, product_id: product.id, quantity: '1'})
    // setQuantity(quantity+1)
  }

  useEffect(() => {

    axios.post(`${API}/cart-products`, cart)
    .catch((error) => {
      console.log(error);
    });

    // axios.get(`${API}/cart-products/${}`)

  }, [cart]);


  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 h-auto w-auto tablet:grid-cols-3 laptop:grid-cols-4 px-4  self-center gap-4 tablet:gap-8 xl:px-20 xl:gap-20 pt-10">
      {searchResults.length ? (
        searchResults.map((results) => {
          const costPerUnitWeight = (results.cost / results.weight).toFixed(2);

          return (
            <div
              className="flex flex-col justify-between items-center p-2 gap-4 h-auto w-auto max-w-52 shadow-xl rounded-xl"
              key={results.id}
            >
              <div className="flex flex-col gap-4 shrink-0 w-full">
                {/* Product Image */}
                <img
                  src={results.image}
                  alt={results.description}
                  className="h-44 w-full max-w-20 tablet:h-52 laptop:h-56 desktop:h-60 shrink-0 grow-1 self-center rounded-2xl hover:cursor-pointer object-cover peer"
                  onClick={() => navigate(`/products/${results.id}`)}
                />
                {/* Product Name */}
                <p className="text-lg font-medium peer-hover:underline peer-hover:underline-offset-8 decoration-green hover:transition ease-in-out delay-150">
                  {capitalize(results.name)}
                </p>
                {/* Price */}
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
              {/* Add to cart button */}
                <button
                  className=" text-xs tablet:text-sm text-white font-semibold bg-green rounded flex items-center justify-evenly h-8 w-full  bg-opacity-90 hover:bg-opacity-100"
                  onClick={() => addToCart(results)}
                >
                  Add to cart
                </button>
                

            </div>
          );
        })
      ) : (
        <h2 className="text-xl h-screen font-medium col-span-full text-center mt-10">
          Sorry, we couldn't find any results
        </h2>
      )}
    </div>
  );
}

const capitalize = (str) => {
  const stringArray = str.split(' ');
  const capitalizedString = stringArray.map(string => string[0].toUpperCase() + string.slice(1))

  return capitalizedString.join(' ');
  }