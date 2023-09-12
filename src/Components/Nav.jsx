// Nav.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdOutlineShoppingBag,
  MdMenu,
} from "react-icons/md";


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
      <div className="h-28 w-full flex items-center justify-between relative px-4">
        {/* Logo that links back to homepage */}
        <Link to={"/"}>
          <img src={PantriLogo} alt="Pantri Logo" className="absolute top-0 h-32" />
          {/* <p className='text-black text-3xl invisible md:visible'>PANTRI</p> */}
        </Link>

        {/*search bar*/}
        <div className="w-8/12 p-8">
        <form onSubmit={search4} className="my-24">
          <div className="flex justify-center mt-24 ">
            <select
              onChange={handleSelectChange}
              id="select"
              className="z-10 h-10 text-black divide-y rounded-l-lg divide-gray-100 shadow w-44 dark:bg-gray-700"
            >
              <option value={"name"}></option>
              <option value={"name"}>Name</option>
              <option value={"cost"}>Cost</option>
              <option value={"category"}>Categories</option>
            </select>
            <div className="relative w-2/3">
              <input
                onChange={handleSearchChange}
                type="search"
                id="search-dropdown"
                className="block p-2.5 h-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 shadow"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute top-0 h-10 right-0 p-1 text-sm font-medium text-black bg-blue-700 rounded-r-lg border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-8 text-2xl"
                >
                  <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        </div>

        {/* Nav Links */}
        <div className='md:flex items-center gap-10 hidden'>
          <Link to={"/"}>
            <MdOutlineShoppingBag className="text-3xl text-green-light" />
          </Link>
          <Link to={"/login"} className='text-lg'>Login</Link>
          <Link to={"/register"} className='text-lg bg-green-light p-1 px-4 rounded-full'>Get Started</Link>
        </div>
        {/* Hamburger Menu */}
        <div className='md:hidden'>
            <MdMenu className='text-3xl cursor-pointer' />
        </div>
      </div>
    );
}