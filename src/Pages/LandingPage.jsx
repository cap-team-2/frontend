// LandingPage.jsx


export default function LandingPage() {
    return (
      <div className="h-screen w-full bg-green-light flex flex-col ">
        <div className="h-48 w-full bg-landingBanner bg-cover mt-20 flex items-center ">
          {/* <img
            src={LandingBanner}
            alt="Image of a vendor handing an apple to a customer"
            className="h-48 w-full mt-20 tablet:mt-32 tablet:h-4/5 tablet:px-40 "
          /> */}
          <h1 className="text-white text-2xl font-bold text-center bg-black bg-opacity-40">
            From Market to <span className="text-green-light">PANTRI</span>: Nourish Your Home, Nourish Your
            Community
          </h1>
        </div>
      </div>
    );
}