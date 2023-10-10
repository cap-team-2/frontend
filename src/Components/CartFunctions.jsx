// CartFunction.jsx 
import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL;

export const updateQuantity = ( cartProduct, newQuantity, setQuantity, setCartProducts, quantity ) => {

  axios
    .put(`${API}/cart-products/${cartProduct.cart_id}`, {
      quantity: newQuantity,
    })
    .then(() => {
      // Update the cart quantity
      setQuantity(quantity);

      // Update the cartProducts state with the new quantity
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product) =>
          product.cart_id === cartProduct.cart_id
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteProductFromCart = (id, productAddedQuantity, setQuantity, setCartProducts, quantity) => {
  axios
    .delete(`${API}/cart-products/${id}`)
    .then(() => {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((product) => product.cart_id !== id)
      );
    })
    .catch((error) => {
      console.error(error);
    });
    setQuantity(quantity - productAddedQuantity)
};