// SearchBar.jsx
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IoSearchCircleSharp } from "react-icons/io5";
const API = import.meta.env.VITE_APP_API_URL;


export default function SearchBar({setSearchResults}) {
    const [searchKey, setSearchKey] = useState("");

    function handleSearchChange(event) {
      setSearchKey(event.target.value);
    }

    const search = useCallback(async () => {
      await performSearch(searchKey);
    }, [searchKey]);

    useEffect(() => {
      search();
    }, [search]);

    useEffect(() => {
        axios
            .get(`${API}/products`) 
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    async function performSearch(searchKey) {
      axios
        .get(`${API}/search/${searchKey}`)
        .then((res) => {
          if (res.data.length) {
            setSearchResults(res.data);
          } else {
            setSearchResults(false);
            console.log("false");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function handleSearchSubmit(event) {
      event.preventDefault();
      search();
    }


    return (
      <>
        {/*search bar*/}
        <div className="my-2">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex justify-center">
              <div className="relative w-10/12 md:w-8/12 flex items-center">
                <input
                  onChange={handleSearchChange}
                  type="text"
                  className="p-2.5 h-10 w-full text-sm rounded-3xl border border-gray text-black shadow pl-4 caret-green-light  focus:outline-none focus:ring-1 focus:ring-green-light"
                  placeholder="Search"
                />
                {/* Search button magnifying glass */}
                <IoSearchCircleSharp
                  type="submit"
                  className="absolute right-0 text-5xl h-10 text-green-light rounded-r-3xl cursor-pointer md:hover:bg-gray-light border-l border-l-gray"
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
}