// Footer.jsx
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center  gap-4 py-10 pb-16 bg-white h-auto w-full border-t border-gray  relative  tablet:py-20 tablet:items-start tablet:px-10 desktop:px-40 xl:px-48">
      {/* Additional Links */}
      <div className="flex flex-col items-center tablet:flex-row tablet:text-start w-full  tablet:items-end tablet:justify-between">
        <div className="flex flex-col tablet:flex-row gap-10 tablet:gap-20 ">
          <div className="flex flex-col text-sm  text-green">
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Blog
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Careers
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Press
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Support
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col text-sm  text-green">
            <Link
              className="tablet:hover:underline tablet:hover:underline-offset-4"
              to={"/home"}
            >
              Shop
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Privacy Policy
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Cookie Policy
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Terms & Conditions
            </Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">
              Promotion and Referral Terms
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 text-xl  text-green-light pt-6">
          <Link className="tablet:hover:text-green" to={"https://facebook.com"}>
            <FaFacebookF />
          </Link>
          <Link
            className="tablet:hover:text-green "
            to={"https://github.com/cap-team-2"}
          >
            <FaGithub />
          </Link>
          <Link
            className="tablet:hover:text-green"
            to={"https://instagram.com"}
          >
            <FaInstagram />
          </Link>
          <Link className="tablet:hover:text-green" to={"https://linkedin.com"}>
            <FaLinkedinIn />
          </Link>
          <Link className="tablet:hover:text-green" to={"https://twitter.com"}>
            <FaTwitter />
          </Link>
          <Link className="tablet:hover:text-green" to={"https://youtube.com"}>
            <FaYoutube />
          </Link>
        </div>
      </div>
      {/* Copyright tag */}
      <p className="p-4 text-xs absolute bottom-0 place-self-center">
        Copyright © 2023 PANTRI. All Rights Reserved.
      </p>
    </footer>
  );
}
