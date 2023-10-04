// LandingPage.jsx
import { Link } from "react-router-dom";
import landingVeggies from "/src/assets/Banners-page-sections/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg";
import LandingBanner from "../assets/Banners-page-sections/pexels-erik-scheel-95425.jpg";


export default function LandingPage() {
    return (
      <div className="h-auto w-full flex flex-col bg-white pt-16 tablet:pt-16 desktop:px-36 xl:px-80 ">
        <div className="pb-96  tablet:pb-[600px] xl:pb-[700px] relative">
          {/* Background Image */}
          <img
            src={LandingBanner}
            alt="Local vendor handing an apple to a customer"
            className="object-cover h-full w-full absolute"
          />
          <div className="flex flex-col items-center justify-center h-full w-full absolute pb-4 tablet:pt-20 desktop:p-0">
            {/* CTA with background image and Get Started Button */}
            <div className=" bg-black bg-opacity-40 h-40 w-full flex justify-center items-center ">
              <h1 className="text-white text-[26px] tablet:text-4xl font-medium text-center py-4 mobile:w-[480px]">
                From Market to <span className="text-green">PANTRI</span>:
                Nourish Your <span className="text-green">Home</span>,
                Nourish Your <span className="text-green">Community</span>
              </h1>
            </div>
            {/* Get Started Button */}
            <Link
              to={"/products"}
              className="bg-green h-10 w-32 flex items-center justify-center text-white hover:border-2 hover:border-white font-bold rounded-lg absolute bottom-10 laptop:bottom-20"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Info and data about food insecurity */}
        <div className=" h-auto w-full p-1">
          <h2 className="text-green font-extrabold text-2xl text-center">
            See What Our Users Have to Say!
          </h2>
          <p className="text-center mt-4 p-4">
          Empowering consumers and nurturing farmers for a brighter future! Pantri addresses a pressing issue: the disconnect between consumers and local farmers. In an age of mass production, it&#39;s easy to lose sight of where your food comes from. Our solution? We bridge the gap, providing you with access to fresh, sustainable produce and artisanal delights directly from local farms.Say farewell to the challenges of sourcing fresh, sustainable food from afar and embrace a healthier, more sustainable lifestyle. By choosing our app, you&#39;re not just enjoying delicious food; you&#39;re supporting local agriculture and building a stronger community. But don&#39;t take our word for it—see the smiles on the faces of our satisfied customers and the grateful farmers we partner with. Join us in cultivating a fruitful relationship between those who grow and those who enjoy, while taking a stand for a more connected, sustainable future
          </p>
        </div>
        {/* reviews */}
        <div className="flex justify-center gap-12 my-20 mb-60 h-50 w-full">
           <div className="h-80 w-80 flex flex-col gap-5">
          <img className="border border-gray rounded-2xl drop-shadow-2xl" src="https://images.pexels.com/photos/7342193/pexels-photo-7342193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image of consumer"/>
          <p>
            Since I found Pantri, I have been making healthier decisions, 
            and it has brought me peace of mind to know the origins of my food. 
            I would strongly suggest giving it a try - Anita,Queens NY
          </p>
        </div>
        <div className="h-80 w-80 flex flex-col gap-5 mb-20">
          <img className="border border-gray-light rounded-2xl drop-shadow-2xl"src="https://images.pexels.com/photos/17820609/pexels-photo-17820609/free-photo-of-a-farmer-holding-a-green-pepper-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          </img>
           <p>
           Pantri helped me share my abundant harvest, attracting both customers and new friends at farmers markets, with zero crop  wastage - Steven,Evergreen Meadows Farm
          </p>
         </div>
         </div>
        <div className="p-4">
          <img src={landingVeggies} alt="" className="p-6" />
        </div>
      </div>
    );
}