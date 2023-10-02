// NavLinks.jsx
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

export default function NavLinks() {
    return (
      <div className="flex gap-4 items-end justify-end">
        <Link
          to={"/Home"}
          className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium  "
        >
          Home
        </Link>
        <Link
          to={"/market"}
          className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium  "
        >
          Markets
        </Link>
        <Link
          to={"/sellers"}
          className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium  "
        >
          Vendors
        </Link>
        <Link
          to={"/login"}
          className="text-sm tablet:text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium "
        >
          Log In
        </Link>
        <Link
          to={"/register"}
          className="text-base text-green-light tablet:hover:underline tablet:hover:underline-offset-8  font-medium "
        >
          Get Started
        </Link>
        <Link to={"/cart"}>
          <BsBag className="text-2xl text-green-light tablet:hover:text-green " />
        </Link>
      </div>
    );
}