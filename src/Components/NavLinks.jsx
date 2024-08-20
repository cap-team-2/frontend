/* eslint-disable react/prop-types */
// NavLinks.jsx
import { Link } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'

export default function NavLinks({ isOpen, setIsOpen, cartQuantity }) {
  return (
    <div
      className={`flex gap-4 desktop:items-end desktop:justify-end ${
        isOpen ? 'flex-col h-full justify-center gap-y-10' : 'flex-row'
      }`}
    >
      <Link
        to={'/'}
        onClick={() => setIsOpen(!isOpen)}
        className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
          isOpen ? 'text-3xl font-normal' : 'text-base'
        }`}
      >
        Home
      </Link>
      <Link
        to={'/products'}
        onClick={() => setIsOpen(!isOpen)}
        className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
          isOpen ? 'text-3xl font-normal' : 'text-base'
        }`}
      >
        Products
      </Link>
      <Link
        to={'/market'}
        onClick={() => setIsOpen(!isOpen)}
        className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
          isOpen ? 'text-3xl font-normal' : 'text-base'
        }`}
      >
        Markets
      </Link>
      <Link
        to={'/sellers'}
        onClick={() => setIsOpen(!isOpen)}
        className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
          isOpen ? 'text-3xl font-normal' : 'text-base'
        }`}
      >
        Vendors
      </Link>
      <Link
        to={'/login'}
        onClick={() => setIsOpen(!isOpen)}
        className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
          isOpen ? 'text-3xl font-normal' : 'text-base'
        }`}
      >
        Log In
      </Link>
      <Link
        to={'/cart'}
        className="self-start relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag
          className={` hover:text-green-dark transition ease-in-out duration-500 rounded ${
            isOpen ? 'text-3xl font-normal' : 'text-2xl'
          }`}
        />
        <span
          className={`absolute text-xs bg-topaz rounded-3xl h-4 w-4 min-w-fit flex justify-center items-center text-green-dark ${isOpen ? 'top-4 left-4 h-5 w-5' : 'top-3 left-3'} ${cartQuantity < 1 && 'hidden'}`}
        >
          {cartQuantity}
        </span>
      </Link>
    </div>
  )
}
