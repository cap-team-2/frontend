/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdMenu,
} from "react-icons/md";
import { BsBag } from "react-icons/bs";
import SearchBar from "./SearchBar";
const API = import.meta.env.VITE_APP_API_URL;


export default function Nav({setSearchResults, setFilteredProducts}) {
  
  // Make an API call for all products when returning to the homepage to update the searchResults state
  const getAllProducts = () => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div className="h-auto w-full flex flex-col fixed top-0 bg-white z-50 shadow">
      <div className="grid grid-cols-3 tablet:flex tablet:justify-between tablet:px-8 items-center px-2 tablet:p-4">
        {/* Hamburger Menu */}
        <div className="tablet:hidden">
          <MdMenu className="text-2xl cursor-pointer text-green-light" />
        </div>
        {/* Logo that links back to homepage */}
        <div className="flex items-center justify-center">
          <Link to={"/"} onClick={getAllProducts}>
            <img
              src={PantriLogo}
              alt="Pantri Logo"
              className="h-20 tablet:hidden"
            />
            <p className="text-black text-3xl hidden tablet:block tablet:text-green-light">
              PANTRI
            </p>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex items-center justify-end gap-4">
          <Link
            to={"/login"}
            className="text-xs tablet:text-sm text-white bg-green-light p-1.5  text-center w-14 tablet:w-16 font-semibold rounded-3xl"
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

    </div>
  );
}