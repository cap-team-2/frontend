// LandingPage.jsx
import { Link } from "react-router-dom";
import landingVeggies from "/src/assets/Banners-page-sections/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaT,
} from "react-icons/fa6";
import LandingBanner from "/src/assets/Banners-page-sections/pexels-erik-scheel-95425.jpg";


export default function LandingPage() {
    return (
      <div className="h-full desktop:h-auto w-full flex flex-col bg-green-light pt-20 tablet:pt-16 desktop:px-36 ">
        <div className=" bg-white pb-96  tablet:pb-[600px] relative">
          <img src={LandingBanner} alt="Local vendor handing an apple to a customer" className="object-cover h-full w-full absolute" />
          <div className="flex flex-col items-center justify-center h-full w-full absolute pb-4 tablet:pt-20">
            {/* CTA with background image and Get Started Button */}
            <div className=" bg-black bg-opacity-40 h-40 w-full flex justify-center items-center ">
              <h1 className="text-white text-[26px] tablet:text-4xl font-medium text-center py-4 mobile:w-[480px]">
                From Market to <span className="text-green-light">PANTRI</span>:
                Nourish Your <span className="text-green-light">Home</span>,
                Nourish Your <span className="text-green-light">Community</span>
              </h1>
            </div>
            {/* Get Started Button */}
            <Link
              to={"/login"}
              className="bg-green-light h-10 w-32 flex items-center justify-center text-white font-bold rounded-lg absolute bottom-10 laptop:bottom-20"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Info and data about food insecurity */}
        <div className="bg-green-light h-auto w-full p-4">
          <h2 className="text-white font-extrabold text-2xl text-center pt-8">
            Integer feugiat scelerisque varius morbi enim nunc
          </h2>
          <p className="text-center mt-4 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            et ultrices neque ornare aenean euismod elementum nisi.
          </p>
        </div>
        <div className="bg-green-light p-4">
          <img src={landingVeggies} alt="" className="p-6" />
        </div>
        <footer className="flex flex-col items-center text-center gap-4 py-4 bg-white  h-auto w-full">
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
      </div>
    );
}