// NavLinks.jsx
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

export default function NavLinks({ isOpen}) {
    return (
      <div
        className={`flex gap-4 desktop:items-end desktop:justify-end ${
          isOpen ? "flex-col h-full justify-center gap-y-10" : "flex-row"
        }`}
      >
        <Link
          to={"/"}
          onClick={() => setIsOpen(!isOpen)}
          className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
            isOpen ? "text-3xl font-normal" : "text-base"
          }`}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          onClick={() => setIsOpen(!isOpen)}
          className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
            isOpen ? "text-3xl font-normal" : "text-base"
          }`}
        >
          Products
        </Link>
        <Link
          to={"/market"}
          onClick={() => setIsOpen(!isOpen)}
          className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
            isOpen ? "text-3xl font-normal" : "text-base"
          }`}
        >
          Markets
        </Link>
        <Link
          to={"/sellers"}
          onClick={() => setIsOpen(!isOpen)}
          className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
            isOpen ? "text-3xl font-normal" : "text-base"
          }`}
        >
          Vendors
        </Link>
        <Link
          to={"/login"}
          onClick={() => setIsOpen(!isOpen)}
          className={`tablet:hover:underline tablet:hover:underline-offset-8 font-medium ${
            isOpen ? "text-3xl font-normal" : "text-base"
          }`}
        >
          Log In
        </Link>
        <Link
          to={"/cart"}
          className="self-start"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag
            className={` hover:text-green-dark transition ease-in-out duration-500 rounded ${
              isOpen ? "text-3xl font-normal" : "text-2xl"
            }`}
          />
        </Link>
      </div>
    );
}