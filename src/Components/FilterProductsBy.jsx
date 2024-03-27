/* eslint-disable react/prop-types */
// FilterProductsBy.jsx

import { v4 as generateId } from "uuid";
import ProductFilters from "./ProductFilters";

export default function FilterProductsBy({ filterProducts, filter }) {
  
    return (
      <div className="flex justify-between w-full gap-10 desktop:px-10 xl:px-48">
        {ProductFilters.map((productFilter) => {
          return (
            <div
              className={`h-16 w-20 flex flex-col items-center justify-start gap-2 hover:underline hover:underline-offset-8 decoration-2 cursor-pointer shrink-0 ${
                filter.current === productFilter.category
                  ? "underline  underline-offset-8 decoration-green"
                  : "hover:decoration-gray"
              }`}
              key={generateId()}
              onClick={() => filterProducts(productFilter.category)}
            >
              <productFilter.icon className="text-2xl md:text-3xl text-green" />
              <p className="text-xs tablet:text-sm">{productFilter.category}</p>
            </div>
          );
        })}
      </div>
    );
}