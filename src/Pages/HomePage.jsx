/* eslint-disable react/prop-types */
// Home.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FilterProductsBy from "../Components/FilterProductsBy";
import SearchResults from "../Components/SearchResults";
import SearchBar from "../Components/SearchBar";
const API = import.meta.env.VITE_APP_API_URL;


export default function HomePage({ searchResults, setSearchResults, setFilter, filter, session, setSession, searchForText, setSearchForText, cartQuantity, setCartQuantity, cartProducts, setCartProducts }) {
  
  const location = useLocation();

  // Make an API call for all products when returning to the homepage to update the searchResults state
  useEffect(() => {
    setSearchForText("Products");
    axios
    .get(`${API}/products`)
    .then((res) => {
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location, setSearchForText, setSearchResults, filter]);

  // Api call to retrieve a specific product
  function performSearch(searchQuery) {
    try {
      axios.get(`${API}/products/?q=${searchQuery}`)
      .then((res) => {
        setSearchResults(res.data);
      })
    } catch (error) {
      setSearchResults(undefined);
    }
  }

  return (
    <div className="h-full min-h-full w-full flex flex-col tablet:pt-24 pb-4">
      <div className="flex flex-col fixed top-16 tablet:top-16 w-full bg-white z-40 pt-2">
        {/* Search Bar */}
        <SearchBar setSearchResults={setSearchResults} performSearch={performSearch} searchForText={searchForText} />
        <div className="flex overflow-x-auto scroll-smooth tablet:justify-center shadow-md tablet:pt-2">
          {/* Filter Buttons */}
          <FilterProductsBy
            setFilter={setFilter}
            setSearchResults={setSearchResults}
            filter={filter}
          />
        </div>
      </div>
      <div className="mt-56 tablet:mt-32 desktop:px-32 xl:px-40 pt-4 desktop:pt-10 h-full ">
        {/* Products */}
        <SearchResults
          session={session}
          setSession={setSession}
          searchResults={searchResults}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </div>
    </div>
  );
}

