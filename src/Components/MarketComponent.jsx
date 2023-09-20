// MarketComponent.jsx

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MarketCard from "./marketCard/MarketCard";
import FilterMarketComponent from "./FilterMarketComponent";
import DetailedMarketView from "./DetailedMarketViewComponent";
import Modal from "@mui/material/Modal"

const API = "https://data.ny.gov/resource/xjya-f8ng.json?$select=county,market_name, address_line_1,city,state,zip,contact,phone,market_link,operation_hours,operation_season,operation_months_code,fmnp,snap_status";

export default function MarketComponent() {
    const [markets, setMarkets] = useState([]);
    const [filterCounty, setFilterCounty] = useState('');
    const [filterZip, setFilterZip] = useState('');
    const [filterCity, setFilterCity] = useState('');
    const [filteredMarkets, setFilteredMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState(null);
    const [open, setOpen] = useState(false);
    const selectionRef = useRef();

    useEffect(() => {
        axios.get(API)
            .then((res) => {
                setMarkets(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        const marketsAfterFiltering = markets.filter(market => {
            const matchesCounty = !filterCounty || market.county.toLowerCase().includes(filterCounty.toLowerCase());
            const matchesZip = !filterZip || market.zip.includes(filterZip);
            const matchesCity = !filterCity || market.city.toLowerCase().includes(filterCity.toLowerCase());
            return matchesCounty && matchesZip && matchesCity;
        });
        setFilteredMarkets(marketsAfterFiltering);
    }, [filterCounty, filterZip, filterCity]);

    useEffect(() => {
        if (selectionRef.current) {
            selectionRef.current.click();
        }
    }, [filteredMarkets]);

    const handleShowDetails = (event, market) => {
        event.preventDefault();
        setSelectedMarket(market);
        setOpen(true);
    };

    const handleCloseDetails = () => {
        setSelectedMarket(null);
        setOpen(false);
    };


    // improve styling of filtering  component
    // improve 'detail view' to flip card (possibly)
    // style loading view

    // set an empty view when there are no markets with styling

    // lazy load cards or paginate cards / or simply filter out non-nyc markets before rendering 

    return (
        <div className="flex flex-col mt-10 items-center">
            <div className="w-[1000px] justify-self-center">
                <h1 className="text-center text-4xl mt-10 mb-10 font-light text-gray-900 dark:text-green md:text-5xl lg:text-6xl"><span>MARKETS</span></h1>
                <FilterMarketComponent filterCounty={filterCounty} filterZip={filterZip} filterCity={filterCity} setFilterCity={setFilterCity} setFilterCounty={setFilterCounty} setFilterZip={setFilterZip} />

                <div className=" grid md:grid-cols-3 gap-6 mt-8 mx-4">

                    {/*  all markets */}
                    {markets.length > 0 && !filterZip && !filterCounty && !filterCity && markets.map((market, index) => (
                        <MarketCard key={index} market={market} showDetails={(e) => handleShowDetails(e, market)} />
                    ))}

                    {/* filtered markets */}
                    {filteredMarkets.length > 0 && filteredMarkets.map((market, index) => (
                        <MarketCard key={index} market={market} showDetails={(e) => handleShowDetails(e, market)} />
                    ))}

                    {/* no results */}
                    {(filterZip || filterCity || filterCounty) && filteredMarkets.length === 0 &&
                        <div>No results</div>
                    }

                    {/* loading view */}
                    {markets.length === 0 &&
                        <div> Loading...</div>
                    }

                </div>
            </div>

            <Modal
                open={open}
                onClose={handleCloseDetails}
            >
                <div>
                    <DetailedMarketView selectedMarket={selectedMarket} setSelectedMarket={setSelectedMarket} />
                </div>
            </Modal>

        </div >
    );
}