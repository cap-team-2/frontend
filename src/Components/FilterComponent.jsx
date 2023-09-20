// FilterComponent.jsx



export default function FilterComponent({ filterCounty, filterCity, filterZip, setFilterCity, setFilterCounty, setFilterZip }) {

    return (
        <form className="flex flex-col-3 items-center gap-4">
            <div className="flex flex-col-3 item-center gap-4">
                <div>
                    <label className="flex justify-center gap-2">
                        County
                    </label>
                    <input
                        type="text"
                        value={filterCounty}
                        onChange={(e) => setFilterCounty(e.target.value)}
                        className="border border-black rounded-lg" />

                </div>
                <div>
                    <label className="flex justify-center gap-2">
                        Zip Code
                    </label>
                    <input type="text"
                        value={filterZip}
                        onChange={(e) => setFilterZip(e.target.value)}
                        className="border border-black rounded-lg  " />
                </div>
                <div>
                    <label className="flex justify-center gap-2">
                        City
                    </label>
                    <input type="text"
                        value={filterCity}
                        onChange={(e) => setFilterCity(e.target.value)}
                        className="border border-black rounded-lg" />
                </div>
            </div>
        </form >
    )
}