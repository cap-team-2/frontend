// LandingPage.jsx

import LandingBanner from "../assets/Banners-page-sections/pexels-erik-scheel-95425.jpg";

export default function LandingPage() {
    return (
        <div className="bg-green-light flex flex-col ">
            <img src={LandingBanner} alt='Image of a vendor handing an apple to a customer' className="p-24" />
        </div>
    )
}