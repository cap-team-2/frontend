// ProductDetails.jsx

import { useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { GiPitchfork } from "react-icons/gi";
// import { optional } from "joi";
import Comments from "./Comments.jsx"
import { deleteProductFromCart } from "./CartFunctions";

const users = [
  {
    name: "John Adams",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "alex rodriguez",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU",
  },
  {
    name: "gloria cosme",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "santhoes thami",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "joesph cortez",
    img: "data:image/jpeg;base64,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",
  },
];

const API = import.meta.env.VITE_APP_API_URL;

export default function ProductById({ session, cartQuantity, setCartQuantity }) {
  const { state } = useLocation();
  const initialProductQuantity = state?.productQuantity || 0;
  const [productQuantity, setProductQuantity] = useState(
    initialProductQuantity
  );
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState({});
  const [seller, setSeller] = useState({});
  const [cart, setCart] = useState({
    session_id: "",
    product_id: "",
    quantity: 1,
  });
  const { id } = useParams();

  const costPerUnitWeight = (product.cost / product.weight).toFixed(2);

  // Make an api call to retrieve a product with the given id
  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${API}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        return error;
      });
    axios
      .get(`${API}/cart-products`)
      .then((res) => {
        const data = res.data.find((data) => data.product_id === product.id);
        const currentQuantity = data.quantity;
        setProductQuantity(currentQuantity);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  // Function to add a product to the cart
  function addToCart() {
    setCart({
      ...cart,
      session_id: session.id,
      product_id: id,
      quantity: "1",
    });
  }

  useEffect(() => {
    axios.post(`${API}/cart-products`, cart).catch((error) => {
      console.log(error);
    });
  }, [cart]);

  // Calls the addToCart function, updates the quantity for the product that calls it, updates the cart if the quantity is 1 or greater
  // const handleAddToCart = (product, operator = "plus") => {

  //   axios
  //     .get(`${API}/cart-products`)
  //     .then((res) => {
  //       const currentProduct = res.data.find(
  //         (data) => data.product_id === product.id
  //       );
  //       updateQuantity(currentProduct, operator);
  //     })
  //     .catch((error) => {
  //       return error;
  //     });

  //   if (productQuantity > 1) {
  //     if (operator === "minus") {
  //       setCartQuantity(quantity - 1);
  //       setProductQuantity(productQuantity - 1);

  //     } else {
  //       setProductQuantity(productQuantity + 1);
  //       setCartQuantity(quantity + 1);
  //     }

  //   } else {
  //     if(operator !== 'minus') {

  //       addToCart(product);
  //       setProductQuantity(productQuantity + 1);
  //       setCartQuantity(cartQuantity + 1);
  //     }

  //   }

  // };

  useEffect(() => {
    axios
      .get(`${API}/sellers`)
      .then((res) => {
        setSeller(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product]);

  // Makes a put request to update the quantity of the product
  //  const updateQuantity = (product, operator = "plus") => {
  //   console.log(productQuantity)
  //    if (operator === "minus") {
  //      axios.put(`${API}/cart-products/${product.cart_id}`, {
  //        quantity: product.quantity - 1,
  //      });
  //    } else {
  //      axios.put(`${API}/cart-products/${product.cart_id}`, {
  //        quantity: product.quantity + 1,
  //      });
  //    }
  //  };

  //  Function to delete a product from the cart
  // const deleteProductFromCart = (product) => {
  //   console.log(product)
  //   axios
  //     .delete(`${API}/cart-products/${product.cart_id}`)
  //     .catch((error) => {
  //       return error;
  //     })
  // }

  // Calls the addToCart function, updates the quantity for the product that calls it, updates the cart if the quantity is 1 or greater
  const handleAddToCart = (product, operator = "plus") => {
    if (productQuantity > 0) {
      if (operator === "minus") {
        setCartQuantity(cartQuantity - 1);
        setProductQuantity(productQuantity - 1);
      } else {
        setProductQuantity(productQuantity + 1);
        setCartQuantity(cartQuantity + 1);
      }

      axios
        .get(`${API}/cart-products`)
        .then((res) => {
          const currentProduct = res.data.find(
            (data) => data.product_id === product.id
          );
          updateQuantity(currentProduct, operator);
        })
        .catch((error) => {
          return error;
        });
    } else {
      addToCart(product);
      setProductQuantity(productQuantity + 1);
    }
  };

  // Makes a put request to update the quantity of the product
  const updateQuantity = (product, operator = "plus") => {
    if (operator === "minus") {
      axios.put(`${API}/cart-products/${product.cart_id}`, {
        quantity: product.quantity - 1,
      });
    } else {
      axios.put(`${API}/cart-products/${product.cart_id}`, {
        quantity: product.quantity + 1,
      });
    }
  };

  return (
    <div className="h-max w-full flex justify-center">
      {Object.keys(product).length !== 0 && seller[0] && comments ? (
        <div className="h-auto w-full flex flex-col justify-center px-4 pb-20 mt-20 tablet:mt-0 gap-6 tablet:flex-row tablet:items-start tablet:pt-40 tablet:justify-center  tablet:h-fit">
          {/* Image div */}
          <div className="p-4 flex flex-col items-center gap-4 flex-shrink-0">
            <img
              src={product.image}
              alt={product.description}
              className="h-auto w-auto tablet:h-96 shadow-2xl rounded-xl"
            />
            <div className="flex gap-4 ">
              <p className="text-green">●</p>
              <p className="text-gray">●</p>
              <p className="text-gray">●</p>
              <p className="text-gray">●</p>
            </div>
          </div>
          {/* Name, stock, and description */}
          <div className="flex flex-col gap-4  tablet:pt-4 tablet:gap-20 h-full w-full tablet:max-w-md">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{capitalize(product.name)}</h2>
              <p
                className={`${
                  product.stock > 10
                    ? "text-green font-medium"
                    : product.stock > 0
                    ? "text-gold"
                    : "text-[red]"
                }`}
              >{`${
                product.stock > 10
                  ? "● In Stock"
                  : product.stock > 0
                  ? "● Only " + product.stock + " left"
                  : "● Out of Stock"
              }`}</p>
              <div className="mt-4 flex flex-col">
                <h3 className="font-medium text-base">Description</h3>
                <p className="text-[gray] text-sm">{product.description}</p>
                <Link
                  to={`/sellers/${seller[0].id}`}
                  className="text-green text-xl"
                >
                  <p>
                    {seller[0].first_name} {seller[0].last_name}
                  </p>
                </Link>
              </div>
            </div>

            {/* Price and Quantity */}
            <div className="flex flex-col gap-4 border-t border-gray pt-4">
              <div className="flex justify-between">
                <p className="text-2xl font-semibold relative">
                  <span className="text-3xl">
                    ${`${product.cost.split(".")[0]}`}
                  </span>
                  <span className="text-xs absolute top-1 ">
                    {product.cost.split(".")[1]}
                  </span>
                  <span className="pl-4 text-[gray] text-sm font-normal">
                    ({costPerUnitWeight}/{product.unit_measurement})
                  </span>
                </p>
              </div>
              {/* Add to cart button */}
              <div className="flex justify-between tablet:justify-start gap-20">
                {/* Update Quantity Buttons and Display */}
                <div className="flex items-center gap-2">
                  <p className="font-medium">Qty</p>
                  <div className="flex border items-center w-20 justify-evenly rounded border-gray shadow">
                    <CgMathMinus
                      className="text-base cursor-pointer hover:text-green hover:scale-110"
                      onClick={() => handleAddToCart(product, "minus")}
                    />
                    <p className="cursor-default h-8 flex items-center text-lg gap-1">
                      {productQuantity > 0 ? productQuantity : 0}
                    </p>
                    <CgMathPlus
                      className="text-base cursor-pointer hover:text-green hover:scale-110"
                      onClick={() => handleAddToCart(product)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green rounded bg-opacity-90 hover:bg-opacity-100 text-xs tablet:text-sm font-semibold text-white h-8 w-40"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div>
            {comments.length
              ? comments.map((userComment, index) => {
                  return (
                    <Comments
                      key={index}
                      productId={product.id}
                      index={index}
                      users={users}
                      userComment={userComment}
                    />
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <p className="text-2xl mt-40 text-center">
          Loading<span className="animate-ping ">. . .</span>
        </p>
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