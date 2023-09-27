// MarketComponent.jsx

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MarketCard from "./marketCard/MarketCard";
import FilterMarketComponent from "./FilterMarketComponent";
import DetailedMarketView from "./DetailedMarketViewComponent";
import Modal from "@mui/material/Modal"
import SearchBar from "../Components/SearchBar";
import SearchResults from "./SearchResults";


const API = "https://data.ny.gov/resource/xjya-f8ng.json?";

export default function MarketComponent({ searchResults, setSearchResults }) {
    const [allMarkets, setAllMarkets] = useState([]);
    const [marketFilter, setMarketFilter] = useState('market_name');
    const [filterCounty, setFilterCounty] = useState('');
    const [filterZip, setFilterZip] = useState('');
    const [filterCity, setFilterCity] = useState('');
    const [filteredMarkets, setFilteredMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState(null);
    const [open, setOpen] = useState(false);
    const selectionRef = useRef();

    // When the page is rendered, all of the markets are stored in the allMarkets state variable
    useEffect(() => {
        axios.get(API)
            .then((res) => {
                setAllMarkets(res.data);  
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    // When the page is rendered all of the markets in New York county are loaded to the page
    useEffect(() => {
      setFilteredMarkets(
          allMarkets.filter((market) => market.county == "New York")
        );
      }, [allMarkets])

    const searchForMarkets = (query) => {
      console.log(marketFilter, query)
      setFilteredMarkets(allMarkets.filter((market) => market[marketFilter.toLowerCase()].includes(query.toLowerCase())))
    };

      // useEffect(() => {
      //     const marketsAfterFiltering = markets.filter(market => {
      //         const matchesCounty = !filterCounty || market.county.toLowerCase().includes(filterCounty.toLowerCase());
      //         const matchesZip = !filterZip || market.zip.includes(filterZip);
      //         const matchesCity = !filterCity || market.city.toLowerCase().includes(filterCity.toLowerCase());
      //         return matchesCounty && matchesZip && matchesCity;
      //     });
      //     setFilteredMarkets(marketsAfterFiltering);
      // }, []);

    // useEffect(() => {
    //     if (selectionRef.current) {
    //         selectionRef.current.click();
    //     }
    // }, [filteredMarkets]);

    const handleShowDetails = (event, market) => {
        event.preventDefault();
        setSelectedMarket(market);
        setOpen(true);
    };

    const handleCloseDetails = () => {
        setSelectedMarket(null);
        setOpen(false);
    };

    // Function to handle search filter options
    const handleFilterChange = (selection) => {
      setMarketFilter(selection);
    };
   
   // improve styling of filtering  component
    // improve 'detail view' to flip card (possibly)
    // style loading view

    // set an empty view when there are no markets with styling

    // lazy load cards or paginate cards / or simply filter out non-nyc markets before rendering 

    return (
      <div className="flex flex-col mt-10 items-center">
        <div className="w-[1000px] flex flex-col">
          <h1 className="text-center text-4xl mt-10 font-light text-gray-900 text-green-light tablet:text-5xl desktop:text-6xl">
            <span>MARKETS</span>
          </h1>
          {/* Search Bar */}
          <div className="h-auto w-full ">
            <SearchBar setSearchResults={setSearchResults} marketFilter={marketFilter} searchForMarkets={searchForMarkets} />
          </div>
          {/* Dropdown filter menu */}
          <form id="filterMarkets" className="ml-4">
            <label htmlFor="marketFilter" className="justify-center mr-4">
              Filter Search By:
            </label>
            <select
              onChange={(e) => handleFilterChange(e.target.value)}
              className="h-auto w-auto self-center border mt-2 border-gray shadow cursor-pointer z-50"
              id="marketFilter"
              defaultValue={"market_name"}
            >
              <option value="market_name">
                Name
              </option>
              <option value="county">County</option>
              <option value="city">City</option>
              <option value="zip">Zip Code</option>
            </select>
          </form>
          <div className=" grid tablet:grid-cols-3 gap-6 mt-4 mx-4">
            {/*  all markets */}
            {filteredMarkets.length > 0 &&
              !filterZip &&
              !filterCounty &&
              !filterCity &&
              filteredMarkets.map((market, index) => (
                <MarketCard
                  key={index}
                  market={market}
                  showDetails={(e) => handleShowDetails(e, market)}
                />
              ))}

            {/* filtered markets */}
            {filteredMarkets.length > 0 &&
              filteredMarkets.map((market, index) => (
                <MarketCard
                  key={index}
                  market={market}
                  showDetails={(e) => handleShowDetails(e, market)}
                />
              ))}

            {/* no results */}
            {(filterZip || filterCity || filterCounty) &&
              filteredMarkets.length === 0 && (
                <div className="text-xl text-center">No results</div>
              )}

            {/* loading view */}
            {filteredMarkets.length === 0 && <div> Loading...</div>}
          </div>
        </div>

        <Modal open={open} onClose={handleCloseDetails}>
          <div>
            <DetailedMarketView
              selectedMarket={selectedMarket}
              setSelectedMarket={setSelectedMarket}
            />
          </div>
        </Modal>
      </div>
    );
}