/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// import PantriLogo from '../assets/backgrounds/Pantri-logo-removebg.png';
import NavLinks from './NavLinks';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";

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
    <div className="h-auto w-full flex flex-col fixed bg-wh z-50 shadow bg-green text-white desktop:px-10 xl:px-48">
      {!isOpen && (
        <div className="flex justify-between  tablet:flex tablet:justify-between tablet:px-8 items-center px-2 p-4">
          {/* Logo that links back to homepage */}
          <div className="flex">
            <Link to={"/"} onClick={getAllProducts}>
              {/* <img
                src={PantriLogo}
                alt="Pantri Logo"
                className="h-20 tablet:hidden"
              /> */}
              <p className="text-3xl text-white tablet:block">PANTRI</p>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Nav Links */}
            <div className="hidden laptop:block">
              <NavLinks />
            </div>
            <div className='flex gap-4' >
              <Link
                to={"/cart"}
              >
                <BsBag
                  className={`laptop:hidden hover:text-green-dark transition ease-in-out duration-500 rounded ${
                    isOpen ? "text-3xl font-normal" : "text-2xl"
                  }`}
                />
              </Link>
              <RxHamburgerMenu
                className="text-white text-2xl cursor-pointer laptop:hidden hover:text-green-dark transition ease-in-out duration-500"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      )}
      {/* Menu Modal */}
      {isOpen && (
        <div className="h-screen w-full flex flex-col items-center justify-center relative ">
          <RxCross2
            className="text-2xl text-white absolute top-6 right-2 tablet:top-6 tablet:right-8 cursor-pointer hover:text-green-dark transition ease-in-out duration-500"
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

