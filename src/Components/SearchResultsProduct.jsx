    // SearchResultsProduct.jsx
    import axios from "axios";
    import { useState, useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    const API = import.meta.env.VITE_APP_API_URL;


    export default function SearchResultsProduct({ results, addToCart }) {
        const [ quantity, setQuantity ] = useState(0);

        // create state variable called product that will be updated with a useEffect that makes a get request for the cart products. Use Find to assign the product state with the correct cart product. Use that state when using the handleAddToCart function to keep track of the current quantity of the product

        const costPerUnitWeight = (results.cost / results.weight).toFixed(2);
        const navigate = useNavigate();
    
        // Calls the addToCart function, updates the quantity for the product that calls it, updates the cart if the quantity is 1 or greater
        const handleAddToCart = (product) => {
          if (quantity >= 1) {
            setQuantity(quantity + 1)

            axios
            .get(`${API}/cart-products`)
            .then((res) => {
                  const currentProduct = res.data.find(data => data.product_id === product.id)

                  updateQuantity(currentProduct)
                })
                .catch((error) => {
                  return error;
                });
          } else {
            addToCart(product)
            setQuantity(quantity + 1)
          }
        }
        
        // Makes a put request to update the quantity of the product
        const updateQuantity = (product) => {
          console.log(product.quantity)
          axios.put(`${API}/cart-products/${product.cart_id}`, {quantity: (product.quantity) + 1})
        }

        return (
            
          <div
            className="flex flex-col justify-between items-center p-2 gap-4 h-auto w-auto max-w-52 shadow-xl rounded-xl"
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
              onClick={() => handleAddToCart(results)}
            >
              Add to cart
            </button>
          </div>
        );
    }
    const capitalize = (str) => {
      const stringArray = str.split(" ");
      const capitalizedString = stringArray.map(
        (string) => string[0].toUpperCase() + string.slice(1)
      );

      return capitalizedString.join(" ");
    };