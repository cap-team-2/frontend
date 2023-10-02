/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import PantriLogo from '../assets/backgrounds/Pantri-logo-removebg.png';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';

const API = import.meta.env.VITE_APP_API_URL;


export default function Nav({ setSearchResults }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="h-auto w-full flex flex-col fixed bg-white z-50 shadow ">
      <div className="flex justify-between  tablet:flex tablet:justify-between tablet:px-8 items-center px-2 tablet:p-4">
        {/* Logo that links back to homepage */}
        <div className="flex">
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
        <div className='flex items-end'>
          {/* Nav Links */}
          <div className="hidden laptop:block">
            <NavLinks />
          </div>
          {/* Hamburger Menu */}
          <HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
}