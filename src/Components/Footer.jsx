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
      <footer className="flex flex-col items-center text-center gap-4 py-10 pb-16 bg-white h-auto w-full border-t border-gray justify-center relative  tablet:py-20">
        {/* Additional Links */}
        <div className="flex flex-col tablet:flex-row tablet:gap-20 tablet:text-start items-center">
          <div className="flex flex-col text-sm gap-2 text-green">
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" >Blog</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" >Careers</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" >Press</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" >Support</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" >Contact Us</Link>
          </div>
          <div className="flex flex-col text-sm gap-2 text-green">
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4" to={'/home'}>Shop</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">Privacy Policy</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">Cookie Policy</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">Terms & Conditions</Link>
            <Link className="tablet:hover:underline tablet:hover:underline-offset-4">Promotion and Referral Terms</Link>
          </div>
        

          {/* Social Media Links */}
          <div className="flex gap-6 text-xl  text-green-light pt-6">
            <Link className="tablet:hover:text-green" to={"https://facebook.com"}>
              <FaFacebookF />
            </Link>
            <Link className="tablet:hover:text-green" to={"https://github.com/cap-team-2"}>
              <FaGithub />
            </Link>
            <Link className="tablet:hover:text-green" to={"https://instagram.com"}>
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
        <p className="p-4 text-xs absolute bottom-0">
          Copyright © 2023 PANTRI. All Rights Reserved.
        </p>
      </footer>
    );
}