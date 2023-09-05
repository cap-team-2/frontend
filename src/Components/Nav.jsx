// Nav.jsx

import { Link } from 'react-router-dom';
import PantriLogo from '../assets/Pantri-logo-removebg.png';
import {
  MdOutlineShoppingBag,
  MdOutlineShoppingBasket,///
  MdOutlineShoppingCart,
  MdMenu,
} from "react-icons/md";

export default function Nav() {
    return (
      <div className="border h-20 w-full flex items-center justify-between relative">
        {/* Logo that links back to homepage */}
        <Link to={"/"}>
          <img src={PantriLogo} alt="Pantri Logo" className="absolute top-0 h-20 md:invisible" />
          <p className='text-black text-3xl invisible md:visible'>PANTRI</p>
        </Link>
        {/* Nav Links */}
        <div className='md:flex items-center gap-10 hidden'>
          <Link to={"/"}>
            <MdOutlineShoppingBag className="text-3xl text-green-light" />
          </Link>
          <Link to={"/"} className='text-lg'>Login</Link>
          <Link to={"/"} className='text-lg bg-green-light p-1 px-4 rounded-full'>Get Started</Link>
        </div>
        {/* Hamburger Menu */}
        <div className='md:hidden'>
            <MdMenu className='text-3xl cursor-pointer' />
        </div>
      </div>
    );
}