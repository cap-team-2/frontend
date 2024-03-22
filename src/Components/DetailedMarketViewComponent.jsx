/* eslint-disable react/prop-types */
// DetailedMarketViewComponent.jsx

export default function DetailedMarketViewComponent({ selectedMarket, setSelectedMarket }) {

    const handleCloseDetails = () => {
        setSelectedMarket(null);
    };

    return (
        selectedMarket && (
            <div className=" bg-opacity-75 tablet:bg-opacity-50 border bg-white border-gray-light position-center tablet:object-top padding-15px">
                <h2 className="text-2xl font-bold mb-4">Details for {selectedMarket.market_name}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p><strong>Market Name:</strong> {selectedMarket.market_name}</p>
                        <p><strong>Address:</strong> {selectedMarket.address_line_1}</p>
                        <p><strong>State:</strong> {selectedMarket.state}</p>
                        <p><strong>Contact:</strong> {selectedMarket.contact}</p>
                        <p><strong>Phone:</strong> {selectedMarket.phone}</p>
                        <p>
                            <strong>Market Link: </strong>
                            {selectedMarket?.market_link?.url ? (
                                <a href={selectedMarket.market_link.url}>{selectedMarket.market_link.url}</a>
                            ) : (
                                "N/A"
                            )}
                        </p>
                    </div>
                    <div>
                        <p><strong>Operation Hours:</strong> {selectedMarket.operation_hours}</p>
                        <p><strong>Operation Season:</strong> {selectedMarket.operation_season}</p>
                        <p><strong>Operation Months Code:</strong> {selectedMarket.operation_months_code}</p>
                        <p><strong>FMNP:</strong> {selectedMarket.fmnp}</p>
                        <p><strong>Snap Status:</strong> {selectedMarket.snap_status}</p>
                        <button className=" bg-green-light text-white px-4 py-2 mt-4 rounded" onClick={handleCloseDetails}>Close Details</button>
                    </div>
                </div>
            </div>
        )

    )
}
