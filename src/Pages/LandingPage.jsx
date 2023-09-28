// LandingPage.jsx

import LandingBanner from "../assets/Banners-page-sections/pexels-erik-scheel-95425.jpg";
import Logo from "/Users/joshuanelson/Pursuit/CAPSTONE-PANTRI/frontend/public/LOGO_WHITE__2_-removebg-preview.png";

export default function LandingPage() {
    return (
        <div className="bg-green-light flex flex-col ">
            {/* <img src={Logo} alt="Pantri logo" className="h-40 w-40 mt-20 self-center" /> */}
            <img src={LandingBanner} alt='Image of a vendor handing an apple to a customer' className="p-24" />
        </div>
    )
}