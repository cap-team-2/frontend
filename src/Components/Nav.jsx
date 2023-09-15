// Nav.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdOutlineShoppingBag,
  MdMenu,
} from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Nav() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("name");

  function handleSelectChange(event) {
    setSelect(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function search4(event) {
    event.preventDefault();
    setFilteredItems(
      items.filter((item) => {
        if (select === "cost") {
          return parseInt(item.cost) <= parseInt(search);
        } else {
          return item[select].toLowerCase().includes(search.toLowerCase());
        }
      })
    );
  }

    return (
      <div className="h-auto w-full flex flex-col relative py-4 border">
        {/* Logo that links back to homepage */}
        <div className="self-center">
          <Link to={"/"}>
            <img src={PantriLogo} alt="Pantri Logo" className="h-20 md:h-28" />
            {/* <p className='text-black text-3xl invisible md:visible'>PANTRI</p> */}
          </Link>
        </div>
        <div className="flex items-center justify-between absolute w-screen top-9 px-2">
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <MdMenu className="text-2xl cursor-pointer" />
          </div>
          {/* Nav Links */}
          <div className="flex items-center gap-2">
            <Link
              to={"/login"}
              className="text-xs text-white bg-green-light border p-2 font-semibold rounded-xl"
            >
              Log In
            </Link>
            <Link
              to={"/register"}
              className="text-xs bg-green-light p-1 rounded-full hidden"
            >
              Get Started
            </Link>
            <Link to={"/"}>
              <MdOutlineShoppingBag className="text-xl text-green-light" />
            </Link>
          </div>
        </div>

        {/*search bar*/}
        <div className="mt-4">
          <form>
            <div className="flex justify-center">
              {/* <select
                onChange={handleSelectChange}
                id="select"
                className="z-10 h-10 text-black divide-y rounded-l-lg text-xs shadow font-semibold w-14 md:w-36"
              >
                <option value={"name"}>Filter</option>
                <option value={"name"}>Name</option>
                <option value={"cost"}>Cost</option>
                <option value={"category"}>Categories</option>
              </select> */}
              <div className="relative w-10/12 flex items-center">
                <input
                  onChange={handleSearchChange}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 h-10 w-full z-20 text-sm text-gray-900 rounded-xl border-l-2 text-white shadow"
                  placeholder="Search"
                />
                <IoSearchCircleSharp onClick={search4} className='absolute right-0 text-5xl h-10 text-green-light z-50 border-l border-gray-light rounded-r-xl cursor-pointer hover:bg-gray-light' />
                {/* <button
                  type="submit"
                  className=" h-10 right-0 p-1 text-sm font-medium text-green-light rounded-r-lg focus:ring-2 shadow"
                >
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-8 text-2xl"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="sr-only">Search</span>
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}