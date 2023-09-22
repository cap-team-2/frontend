// Home.jsx

import FilterProductsBy from "../Components/FilterProductsBy";
import { useState, useEffect } from 'react';
import SearchResults from "../Components/SearchResults";
import BannerImage from "../assets/background-ideas/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg";

export default function HomePage({searchResults}) {


    return (
      <div className="h-full w-full flex flex-col ">
        <div className="self-center tablet:w-3/5">
          <img src={BannerImage} alt="Banner Image of assorted vegetables" />
          <FilterProductsBy />
        </div>

        <div>
          <SearchResults searchResults={searchResults} />
        </div>
      </div>
    );
}