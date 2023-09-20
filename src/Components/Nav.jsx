/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdMenu,
} from "react-icons/md";
import { BsBag } from "react-icons/bs";
import SearchBar from './SearchBar';


export default function Nav( {products, setProducts} ) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("name");

  const API = import.meta.env.VITE_APP_API_URL;

  // function handleSelectChange(event) {
  //   setSelect(event.target.value);
  // }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function search4(event) {
    event.preventDefault();
    if (search) {
      axios.get(`${API}/search/${search}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      axios.get(`${API}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

    return (
      <div className="h-auto w-full flex flex-col relative py-4 border">
        {/* Logo that links back to homepage */}
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img
              src={PantriLogo}
              alt="Pantri Logo"
              className="h-20 md:hidden"
            />
            <p className="text-black text-3xl hidden md:block md:text-green-light">
              PANTRI
            </p>
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
              <MdOutlineShoppingBag className="text-2xl text-green-light" />
            </Link>
          </div>
        </div>

        {/*search bar*/}
        <div className="mt-4">
          <form onSubmit={search4}>
            <div className="flex justify-center">
              <div className="relative w-10/12 flex items-center">
                <input
                  onChange={handleSearchChange}
                  type="text"
                  id="search-dropdown"
                  className="p-2.5 h-10 w-full z-20 text-sm rounded-xl text-black shadow pl-4 caret-green-light  focus:outline-none focus:ring-1 focus:ring-green-light"
                  placeholder="Search"
                />
                {/* Search button magnifying glass */}
                <IoSearchCircleSharp onClick={search4} className='absolute right-0 text-5xl h-10 text-green-light z-50  rounded-r-xl cursor-pointer md:hover:bg-gray-light shadow' />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}