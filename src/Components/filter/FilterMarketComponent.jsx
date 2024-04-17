/* eslint-disable react/prop-types */
// FilterMarketComponent.jsx



export default function FilterMarketComponent({ filterCounty, filterCity, filterZip, setFilterCity, setFilterCounty, setFilterZip }) {

    return (
        <form className="flex flex-col-3 self-center gap-4">
            <div className="flex flex-col-3 item-center gap-10">
                <div>
                    <label className="flex justify-center gap-2">
                        County
                    </label>
                    <input
                        type="text"
                        value={filterCounty}
                        onChange={(e) => setFilterCounty(e.target.value)}
                        className="border border-gray rounded-xl pl-4" />

                </div>

                <div>
                    <label className="flex justify-center gap-2 text-black font-light">
                        Zip Code
                    </label>
                    <input type="text"
                        value={filterZip}
                        onChange={(e) => setFilterZip(e.target.value)}
                        className="border border-gray rounded-xl pl-4" />
                </div>
                <div>
                    <label className="flex justify-center gap-2 text-black font-light">
                        City
                    </label>
                    <input type="text"
                        value={filterCity}
                        onChange={(e) => setFilterCity(e.target.value)}
                        className="border border-gray rounded-xl pl-4" />
                </div>
            </div>
        </form >
    )
}