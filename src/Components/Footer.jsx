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
      <footer className="flex flex-col items-center text-center gap-4 py-4  bg-white h-auto w-full">
        {/* Additional Links */}
        <div className="flex flex-col text-sm gap-2 text-green">
          <Link>Blog</Link>
          <Link>Careers</Link>
          <Link>Press</Link>
          <Link>Support</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="flex flex-col text-sm gap-2 text-green">
          <Link>Privacy Policy</Link>
          <Link>Cookie Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Interest Based Ads</Link>
          <Link>Promotion and Referral Terms</Link>
        </div>
        {/* Social Media Links */}
        <div className="flex gap-6 text-xl mt-4 text-green-light">
          <Link to={"https://facebook.com"}>
            <FaFacebookF />
          </Link>
          <Link to={"https://github.com/cap-team-2"}>
            <FaGithub />
          </Link>
          <Link to={"https://instagram.com"}>
            <FaInstagram />
          </Link>
          <Link to={"https://linkedin.com"}>
            <FaLinkedinIn />
          </Link>
          <Link to={"https://twitter.com"}>
            <FaTwitter />
          </Link>
          <Link to={"https://youtube.com"}>
            <FaYoutube />
          </Link>
        </div>
        {/* Copyright tag */}
        <p className="mt-2 p-4 text-xs">
          Copyright © 2023 PANTRI. All Rights Reserved.
        </p>
      </footer>
    );
}