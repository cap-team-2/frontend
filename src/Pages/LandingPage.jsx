// LandingPage.jsx


export default function LandingPage() {
    return (
      <div className="h-screen w-full bg-green-light flex flex-col ">
        <div className="h-48 w-full relative bg-landingBanner bg-cover mt-20">
          {/* <img
            src={LandingBanner}
            alt="Image of a vendor handing an apple to a customer"
            className="h-48 w-full mt-20 tablet:mt-32 tablet:h-4/5 tablet:px-40 "
          /> */}
          <h1 className="text-green font-bold">
            From Market to PANTRI: Nourish Your Home, Nourish Your Community
          </h1>
        </div>
      </div>
    );
}