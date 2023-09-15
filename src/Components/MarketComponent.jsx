// MarketComponent.jsx

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const API = "https://data.ny.gov/resource/xjya-f8ng.json?$select=county,market_name, address_line_1,city,state,zip,contact,phone,market_link,operation_hours,operation_season,operation_months_code,fmnp,snap_status";

export default function MarketComponent() {
    const [markets, setMarkets] = useState([]);
    const [filterCounty, setFilterCounty] = useState('');
    const [filterZip, setFilterZip] = useState('');
    const [filterCity, setFilterCity] = useState('');
    const [filteredMarkets, setFilteredMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState(null);
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
        const filtered = markets.filter(market => {
            const matchesCounty = !filterCounty || market.county.toLowerCase().includes(filterCounty.toLowerCase());
            const matchesZip = !filterZip || market.zip.includes(filterZip);
            const matchesCity = !filterCity || market.city.toLowerCase().includes(filterCity.toLowerCase());
            return matchesCounty && matchesZip && matchesCity;
        });
        setFilteredMarkets(filtered);
    }, [filterCounty, filterZip, filterCity, markets]);

    useEffect(() => {
        if (selectionRef.current) {
            selectionRef.current.click();
        }
    }, [filteredMarkets]);

    const handleShowDetails = (event, market) => {
        event.preventDefault();
        setSelectedMarket(market);
    };

    const handleCloseDetails = () => {
        setSelectedMarket(null);
    };

    return (
        <div className="flex flex-col mt-10 ">
            <div className="flex flex-col items-center gap-4">
                <div>
                    <label className="flex justify-center gap-2">
                        County
                    </label>
                    <input type="text" value={filterCounty} onChange={(e) => setFilterCounty(e.target.value)} className="border border-black rounded-lg " />
                </div>
                <div>
                    <label className="flex justify-center gap-2">
                        Zip Code
                    </label>
                    <input type="text" value={filterZip} onChange={(e) => setFilterZip(e.target.value)} className="border border-black rounded-lg  " />
                </div>
                <div>
                    <label className="flex justify-center gap-2">
                        City
                    </label>
                    <input type="text" value={filterCity} onChange={(e) => setFilterCity(e.target.value)} className="border border-black rounded-lg" />
                </div>

            </div >
            {(filterCounty || filterZip || filterCity) && filteredMarkets.length > 0 && (
                <div>
                    <h1 className="text-center text-4xl mt-10 mb-10">Your Markets</h1>
                    <div className=" grid md:grid-cols-2 gap-4 mt-8 mx-4">
                        {filteredMarkets.map((currentMarket, index) => (
                            <div key={index} className="border p-4 bg-green-light rounded-lg">
                                <h3 className="text-lg font-semibold">
                                    <a href="#" onClick={(e) => handleShowDetails(e, currentMarket)} ref={selectionRef}>
                                        {currentMarket.market_name}
                                    </a>
                                </h3>
                                <p><strong>County:</strong> {currentMarket.county}</p>
                                <p><strong>City:</strong> {currentMarket.city}</p>
                                <p><strong>Zip Code:</strong> {currentMarket.zip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
            {
                selectedMarket && (
                    <div className="bg-green p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Details for {selectedMarket.market_name}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p><strong>Market Name:</strong> {selectedMarket.market_name}</p>
                                <p><strong>Address:</strong> {selectedMarket.address_line_1}</p>
                                <p><strong>State:</strong> {selectedMarket.state}</p>
                                <p><strong>Contact:</strong> {selectedMarket.contact}</p>
                                <p><strong>Phone:</strong> {selectedMarket.phone}</p>
                                {/* currently causing an error in the details functionality */}
                                {/* <p>
                <strong>Market Link:</strong>{" "}
                {selectedMarket.market_link ? (
                  <a href={selectedMarket.market_link}>{selectedMarket.market_link}</a>
                ) : (
                  "N/A"
                )}
              </p> */}
                            </div>
                            <div>
                                <p><strong>Operation Hours:</strong> {selectedMarket.operation_hours}</p>
                                <p><strong>Operation Season:</strong> {selectedMarket.operation_season}</p>
                                <p><strong>Operation Months Code:</strong> {selectedMarket.operation_months_code}</p>
                                <p><strong>FMNP:</strong> {selectedMarket.fmnp}</p>
                                <p><strong>Snap Status:</strong> {selectedMarket.snap_status}</p>
                                <button className=" bg-green-light text-black px-4 py-2 mt-4 rounded" onClick={handleCloseDetails}>Close Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}