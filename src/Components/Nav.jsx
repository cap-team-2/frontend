/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import axios from "axios";
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdMenu,
} from "react-icons/md";
import { BsBag } from "react-icons/bs";
const API = import.meta.env.VITE_APP_API_URL;


export default function Nav({ setSearchResults }) {

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
        <div className="flex gap-4 items-end justify-end">
          <Link
            to={"/Home"}
            className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium hidden tablet:block "
          >
            Home
          </Link>
          <Link
            to={"/market"}
            className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium hidden tablet:block "
          >
            Markets
          </Link>
          <Link
            to={"/sellers"}
            className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium hidden tablet:block "
          >
            Vendors
          </Link>
          <Link
            to={"/login"}
            className="text-sm tablet:text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8 font-medium "
          >
            Log In
          </Link>
          <Link
            to={"/register"}
            className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium hidden tablet:block"
          >
            Get Started
          </Link>
          <Link to={"/cart"}>
            <BsBag className="text-2xl text-green-light tablet:hover:text-green" />
          </Link>
        </div>
      </div>
    </div>
  );
}