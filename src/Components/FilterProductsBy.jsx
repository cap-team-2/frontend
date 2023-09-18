// FilterProductsBy.jsx

import { LuCarrot, LuApple, LuBeef, LuMilk } from "react-icons/lu";
import { v4 as generateId } from "uuid";
// Array of various products to be used as filter buttons on the home page
const products = [
  { category: "Vegetables", icon: LuCarrot, image: "" },
  { category: "Fruits", icon: LuApple, image: "" },
  { category: "Meat", icon: LuBeef, image: "" },
  { category: "Dairy", icon: LuMilk, image: "" }
];



export default function FilterProductsBy() {


    return (
        <div className='flex justify-evenly'>
            {products.map(product => {
                return (
                  <div className=" h-20 w-20 flex flex-col items-center justify-center gap-2 hover:underline" key={generateId()}>
                    <product.icon className="text-2xl font-light" />
                    <p className="text-xs">{product.category}</p>
                  </div>
                );
                
            })}
        </div>
    )
}