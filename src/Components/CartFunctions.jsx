// CartFunction.jsx 
import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL;


export const updateInput = (event, cart_id, setQuantity, setCartProducts) => {
  event.preventDefault();

  if (
    typeof Number(event.target.value) === "number" &&
    Number(event.target.value) >= 0
  ) {
    setQuantity(event.target.value);
    axios
      .put(`${API}/cart-products/${cart_id}`, {
        quantity: event.target.value,
      })
      .then(() => {
        // Update the cartProducts state with the new quantity
        setCartProducts((prevCartProducts) =>
          prevCartProducts.map((product) =>
            product.cart_id === cart_id
              ? { ...product, quantity: event.target.value }
              : product
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    setQuantity(0);
  }
};

export const updateQuantity = ( cartProduct, newQuantity, setQuantity, setCartProducts ) => {
  axios
    .put(`${API}/cart-products/${cartProduct.cart_id}`, {
      quantity: newQuantity,
    })
    .then(() => {
      // Update the cart quantity
      setQuantity(newQuantity);

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

export const deleteProductFromCart = (id, setQuantity, setCartProducts) => {
  axios
    .delete(`${API}/cart-products/${id}`)
    .then(() => {
      setQuantity(0);
      setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((product) => product.cart_id !== id)
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

