// FilterProductsBy.jsx

import { v4 as generateId } from "uuid";
import { useEffect } from "react"; 
import axios from "axios";
import ProductFilters from "./ProductFilters";
const API = import.meta.env.VITE_APP_API_URL;



export default function FilterProductsBy({setSearchResults, filter, setFilter }) {


  // Update the filter state to switch between the different filters for each product category
  function filterProducts (productFilter) {
    setFilter(`${productFilter.category}`)
  }

  // Api call for different selected product category, using the filter state
  useEffect(() => {
   
    axios.get(`${API}/products?${filter === 'Home' ? '' : `category=${filter}`}`)
    .then((res) => {
      setSearchResults(res.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [filter])
  
    return (
        <div className='flex tablet:gap-10'>
            {ProductFilters.map(productFilter => {
                return (
                  <div className={`h-16 w-20 flex flex-col items-center justify-start gap-2 hover:underline hover:underline-offset-8 decoration-2 cursor-pointer ${filter == productFilter.category ? 'underline  underline-offset-8 decoration-green-light' : 'hover:decoration-gray'}`}
                  key={generateId()}
                  onClick={() => filterProducts(productFilter)}
                  >
                    <productFilter.icon className="text-2xl md:text-3xl text-green-light" />
                    <p className="text-xs tablet:text-sm">{productFilter.category}</p>
                  </div>
                );
            })}
        </div>
    )
}