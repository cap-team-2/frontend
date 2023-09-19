/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdMenu,
} from "react-icons/md";
import { BsBag } from "react-icons/bs";
import SearchBar from './SearchBar';

export default function Nav() {
  
  return (
    <div className="h-auto w-full flex flex-col border-b-2 border-b-gray-light">
      <div className="grid grid-cols-3 md:flex md:justify-between md:px-8 items-center top-5 px-2 md:mt-10 md:mb-2">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <MdMenu className="text-2xl cursor-pointer" />
        </div>
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
        {/* Search Bar */}
        <div className="h-auto w-full hidden md:block">
          <SearchBar setSearchResults={setSearchResults} />
        </div>
        {/* Nav Links */}
        <div className="flex items-center justify-end gap-4">
          <Link
            to={"/login"}
            className="text-xs md:text-sm text-white bg-green-light p-1.5  text-center w-14 md:w-16 font-semibold rounded-3xl"
          >
            Log In
          </Link>
          <Link
            to={"/register"}
            className="text-xs bg-green-light p-1 rounded-full hidden"
          >
            Get Started
          </Link>
          <Link to={"/cart"}>
            <BsBag className="text-2xl text-green-light" />
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <SearchBar setSearchResults={setSearchResults} />
      </div>
    </div>
  );
}