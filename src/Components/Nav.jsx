/* eslint-disable react/prop-types */
// Nav.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavLinks from './NavLinks';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";



export default function Nav({ cartQuantity }) {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="h-auto w-full flex flex-col fixed bg-wh z-50 shadow bg-white text-green desktop:px-10 xl:px-48">
      {!isOpen && (
        <div className="flex justify-between tablet:flex tablet:justify-between tablet:px-8 items-center px-2 p-4">
          {/* Logo that links back to homepage */}
          <div>
            <Link to={"/"} className="flex items-center">
              {/* <img
          src={PantriLogo}
          alt="Pantri Logo"
          className="h-24 w-28 flex-shrink-0 mr-2" // Use flex-shrink-0 to prevent the image from shrinking
        /> */}
              <p className="text-3xl text-green font-medium tablet:block">
                PANTRI
              </p>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Nav Links */}
            <div className="hidden laptop:block">
              <div
                className={`flex gap-4 desktop:items-end desktop:justify-end ${
                  isOpen
                    ? "flex-col h-full justify-center gap-y-10"
                    : "flex-row"
                }`}
              >
                <Link
                  to={"/"}
                  className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
                    isOpen ? "text-3xl font-normal" : "text-base"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={"/products"}
                  className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
                    isOpen ? "text-3xl font-normal" : "text-base"
                  }`}
                >
                  Products
                </Link>
                <Link
                  to={"/market"}
                  className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
                    isOpen ? "text-3xl font-normal" : "text-base"
                  }`}
                >
                  Markets
                </Link>
                <Link
                  to={"/sellers"}
                  className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
                    isOpen ? "text-3xl font-normal" : "text-base"
                  }`}
                >
                  Vendors
                </Link>
                <Link
                  to={"/login"}
                  className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
                    isOpen ? "text-3xl font-normal" : "text-base"
                  }`}
                >
                  Log In
                </Link>
                <Link to={"/cart"} className="self-start relative">
                  <BsBag
                    className={` hover:text-green-dark transition ease-in-out duration-500 rounded ${
                      isOpen ? "text-3xl font-normal" : "text-2xl"
                    }`}
                  />
                  <span
                    className={`absolute text-xs bg-topaz rounded-3xl h-4 w-4 min-w-fit flex justify-center items-center text-green-dark ${
                      isOpen ? "top-4 left-4 h-5 w-5" : "top-3 left-3"
                    }`}
                  >
                    {cartQuantity}
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to={"/cart"} className="relative">
                <BsBag
                  className={`laptop:hidden hover:text-green-dark transition ease-in-out duration-500 rounded ${
                    isOpen ? "text-3xl font-normal" : "text-2xl"
                  }`}
                />
                <span className="laptop:hidden absolute top-3 left-3 text-xs bg-topaz rounded-3xl h-4 w-4 min-w-fit flex justify-center items-center text-green-dark">
                  {cartQuantity}
                </span>
              </Link>
              <RxHamburgerMenu
                className="text-green text-opacity-90 text-2xl cursor-pointer laptop:hidden hover:text-green-dark transition ease-in-out duration-500"
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
            className="text-2xl text-green text-opacity-80 absolute top-6 right-2 tablet:top-6 tablet:right-8 cursor-pointer hover:text-green-dark transition ease-in-out duration-500"
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} cartQuantity={cartQuantity} />
        </div>
      )}
    </div>
  );
}

