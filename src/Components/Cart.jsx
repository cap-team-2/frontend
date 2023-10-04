// cart component 

import { keyframes } from "@emotion/react";
import { CgCloseR, CgMathPlus, CgMathMinus } from "react-icons/cg";
import { updateInput, updateQuantity, deleteProductFromCart } from "./CartFunctions";


export default function Cart({cartProducts, setCartProducts, quantity, setQuantity}) {
   

    

    

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden mobile:h-full tablet:h-screen scroll-smooth">
      <p className="text-xl font-bold border-b border-gray pb-2 mb-4">
        My Cart ({quantity} item{`${quantity > 1 || quantity === 0 ? 's' : ''}`})
      </p>
      {cartProducts
        ? cartProducts.map((productAdded, index) => {
            return (
              <div
                key={productAdded.id + index}
                className="flex justify-between w-full shadow-lg border border-gray-light p-2 rounded-lg mb-4 "
              >
                <div className="flex ">
                  {/* Product Image */}
                  <img
                    className="h-20 w-20 rounded shadow-lg mr-4"
                    src={productAdded.image}
                    alt={productAdded.name}
                  />
                  {/* Product Name and Price */}
                  <div className="font-medium">
                    <p className="font-semibold">
                      {capitalize(productAdded.name)}
                    </p>
                    <p className="text-sm font-semibold text-green">
                      ${productAdded.cost}
                    </p>
                  </div>
                </div>

                {/* Update Quantity Buttons and Display */}
                <div className="flex flex-col ml-4 justify-between">
                  <CgCloseR
                    className="text-red self-end cursor-pointer"
                    onClick={() => deleteProductFromCart(productAdded.cart_id, setQuantity, setCartProducts)}
                  />
                  <div className="flex border items-center w-20 justify-center rounded border-gray shadow">
                    <CgMathMinus
                      className="text-base cursor-pointer"
                      onClick={() => {

                       if(quantity > 1) updateQuantity(productAdded, productAdded.quantity - 1, setQuantity, setCartProducts)
                      }
                      }
                    />
                    <form className="flex items-center">
                      <input
                        className="placeholder-black w-8 text-center"
                        onChange={(event) =>
                          updateInput(event, productAdded.cart_id, setQuantity, setCartProducts)
                        }
                        type="text"
                        min={1}
                        value={productAdded.quantity}
                        placeholder={productAdded.quantity}
                      />
                    </form>
                    <CgMathPlus
                      className="text-base cursor-pointer"
                      onClick={() =>
                        updateQuantity(
                          productAdded,
                          parseInt(productAdded.quantity) + 1, setQuantity, setCartProducts
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {quantity === 0 && (
        <p className="text-xl font-bold pt-10 text-center">Your Cart is empty</p>
      )}
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