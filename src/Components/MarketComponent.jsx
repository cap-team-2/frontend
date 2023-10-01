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
    const [marketFilter, setMarketFilter] = useState('city');
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
              console.log(res.data)
                setAllMarkets(res.data);  
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    // Function to filter through allMarkets based on user search
    const performSearch = (searchQuery) => {
      console.log(marketFilter)
      setFilteredMarkets(
        allMarkets.filter(
          (market) =>
            market[marketFilter]
              .replace(/\s/g, "")
              .toLowerCase()
              .includes(searchQuery.replace(/\s/g, "").toLowerCase()) ||
            searchQuery
              .replace(/\s/g, "")
              .toLowerCase()
              .includes(market[marketFilter].replace(/\s/g, "").toLowerCase())
        )
      );
      // const results = allMarkets.filter((market) => {
      //   market[filterBy].toLowerCase().includes(searchQuery.toLowerCase());
      // })

    };

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
      <div className="flex flex-col pt-32 items-center">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-center text-4xl  font-light text-gray-900 text-green-light tablet:text-5xl desktop:text-6xl">
            <span>MARKETS</span>
          </h1>
          {/* Search Bar */}
          <div className="h-auto w-full ">
            <SearchBar performSearch={performSearch} marketFilter={marketFilter} />
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
              <option value="city">City</option>
              <option value="market_name">
                Name
              </option>
              <option value="county">County</option>
              <option value="zip">Zip Code</option>
            </select>
          </form>
          <div className=" grid tablet:grid-cols-3 desktop:grid-cols-4 gap-6 mt-4 mx-4">
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
            {filteredMarkets.length === 0 && <div className="self-center w-full"> No Results Found</div>}
          
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