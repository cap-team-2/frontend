// LandingPage.jsx
import { Link } from 'react-router-dom'
import landingVeggies from '/src/assets/Banners-page-sections/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg'
import LandingBanner from '../assets/Banners-page-sections/pexels-erik-scheel-95425.jpg'
import veggieImage from '../assets/Banners-page-sections/markus-spiske-mvu1-Gzg1tg-unsplash.jpg'

export default function LandingPage() {
  return (
    <div
      id="landing"
      className="h-auto w-full flex flex-col bg-white pt-16 tablet:pt-16 desktop:px-36 xl:px-80 "
    >
      <div className="pb-96  tablet:pb-[600px] xl:pb-[700px] relative">
        {/* Background Image */}
        <img
          src={LandingBanner}
          alt="Local vendor handing an apple to a customer"
          className="object-cover h-full w-full absolute"
        />
        <div className="flex flex-col items-center justify-center h-full w-full absolute pb-4 tablet:pt-20 desktop:p-0">
          {/* CTA with background image and Get Started Button */}
          <div className=" bg-black bg-opacity-60 h-40 w-full flex justify-center items-center ">
            <h1 className="text-white text-[26px] tablet:text-4xl font-medium text-center py-4 mobile:w-[480px]">
              From Market to <span className="text-green">PANTRI</span>: Nourish
              Your <span className="text-green">Home</span>, Nourish Your{' '}
              <span className="text-green">Community</span>
            </h1>
          </div>
          {/* Get Started Button */}
          <Link
            to={'/products'}
            className="bg-green h-10 w-40 flex items-center justify-center text-white hover:border-2 hover:border-white font-bold rounded-lg absolute bottom-10 laptop:bottom-20"
          >
            Start Shopping
          </Link>
        </div>
      </div>
      {/* Info and data about food insecurity */}
      <div className=" h-auto w-full my-10">
        <h2 className="text-green font-extrabold text-2xl text-center">
          See What Our Users Have to Say!
        </h2>
        <p className="text-center mt-4 p-4">
          Say goodbye to the overwhelming task of searching for fresh,
          sustainable food sources from afar and embrace a healthier, more
          sustainable lifestyle. By choosing us, you&#39;re not only simplifying
          the process of discovering delicious cuisine; you&#39;re also
          supporting local agriculture and fostering a stronger community.
          Explore the satisfaction of our customers who have found produce,
          markets, and valuable farmer information on our website. Join us in
          cultivating a meaningful connection between growers and enthusiasts,
          all while advocating for a more interconnected and sustainable future.
        </p>
      </div>
      {/* reviews */}
      <div className="h-full w-full flex flex-col gap-10 mb-10 justify-center tablet:flex-row">
        <div className="flex flex-col gap-4 items-center  text-center px-4 w-96">
          <img
            className="border border-gray rounded-2xl shadow-2xl h-72 w-60 object-cover"
            src="https://images.pexels.com/photos/7342193/pexels-photo-7342193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image of consumer"
          />
          <p>
            Since I found Pantri, I have been making healthier decisions, and it
            has brought me peace of mind to know the origins of my food. I would
            strongly suggest giving it a try - Anita, Queens NY
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center px-4 w-96">
          <img
            className="border border-gray-light rounded-2xl shadow-2xl h-72 w-60 object-cover"
            src="https://images.pexels.com/photos/17820609/pexels-photo-17820609/free-photo-of-a-farmer-holding-a-green-pepper-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <p>
            Pantri helped me share my abundant harvest, attracting both
            customers and new friends at farmers markets, with zero crop wastage
            - Steven, Evergreen Meadows Farm
          </p>
        </div>
      </div>
      <div className="px-4 mb-10 flex w-full justify-center">
        <img
          src={veggieImage}
          alt="Vegetables on shelves"
          className="h-96 w-auto object-cover"
        />
      </div>
    </div>
  )
}
