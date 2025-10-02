import { useState } from "react"
import BookingBox from "./components/BookingBox"
import Cards from "./components/Cards"
import Getaways from "./components/Getaways"
import Package from "./components/Package"
import ChoosePage from "./pages/ChoosePage"
import Footer from "./pages/Footer"
import GalleryPage from "./pages/GalleryPage"
import HomePage from "./pages/HomePage"
import ReviewsPage from "./pages/ReviewsPage"
import StoryPage from "./pages/StoryPage"

function App() {

   const [openBox, setOpenBox] = useState(false);

  return (
    <>
    {openBox && <BookingBox onClose={() => setOpenBox(false)} />}
      <div className="bg-gray-300">
        <div className="bg-gray-600">
          <HomePage />
        </div>

        <ChoosePage />
        <div className="flex justify-center pb-2">
          <div className="flex flex-wrap justify-center items-center gap-8 min-h-screen p-10">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[30%]"
              >
                <Cards />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full text-center items-center gap-6 pt-3 pb-15">
          <div className="bg-white rounded-lg">
            <h2 className="font-bold text-2xl mt-4">What Makes Us Truly Unique?</h2>
            <p className="text-lg px-40 py-6 shadow-lg max-w-7xl mx-auto">
              Being native to Ooty, we have complete end-to-end control of our value chain and have carefully partnered with<br />
              the best facilities, guides, and service providers in the region. This means consistent quality,<br />
              authentic experiences, and unmatched local insights that only true locals can provide.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mx-auto mb-1 max-w-3xl mt-10">
        <div className='transition-all duration-800  transform hover:scale-105'>
          <h2 className="text-7xl font-bold animate-pulse text-emerald-600">Corporate Retreats</h2>
        </div>
        <p className="mt-4 w-max-lg text-lg font-semibold text-gray-600">
          Transform your team dynamics and strategic thinking with our comprehensive corporate retreat packages.
        </p>
      </div>

      <div className="flex justify-center pb-2">
        <div className="flex flex-wrap justify-center items-center gap-8 min-h-screen p-10">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
              <Package openModal={() => setOpenBox(true)} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mx-auto mb-1 max-w-3xl mt-10">
        <div className='transition-all duration-800  transform hover:scale-105'>
          <h2 className="text-7xl font-bold animate-pulse text-emerald-600">Weekend Getaways</h2>
        </div>
        <p className="mt-4 w-max-lg text-lg text-gray-600">
          Escape the city and reconnect with nature through our thoughtfully curated wellness experiences.
        </p>
      </div>

      <div className="flex justify-center pb-2">
        <div className="flex flex-wrap justify-center items-center gap-8 min-h-screen p-10 ">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%]"
            >
              <Getaways openForm={() => setOpenBox(true)} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50">
        <GalleryPage />
        <div className="flex justify-center items-center w-full py-10">
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-3xl 
                  max-w-2xl w-full px-9 py-7 gap-4 border-green-100 border-1">
            <h2 className="font-bold text-2xl text-gray-900">Ready to Create Your Own Memories?</h2>
            <p className="text-md text-gray-600">
              Join us in the Nilgiris and experience the transformation that awaits
              in these magical mountains
            </p>
            <button className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 
            text-white px-9 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 
            transition-all duration-300 shadow-md font-medium text-base"
            onClick={() => setOpenBox(true)}>
              <span className="text-lg">Book Your Experience</span>
            </button>
          </div>
        </div>
      </div>

      <StoryPage />

      <div className="pt-14">
        <div className='bg-gradient-to-b from-white to-blue-100 text-center'>
          <h2 className="text-7xl font-bold animate-pulse text-emerald-700 
        transition-all duration-800 transform hover:scale-105">What Our Clients Say</h2>
          <p className="mt-4 w-max-lg text-lg font-semibold text-gray-600">
            Hear from teams and individuals who've experienced transformation in the Nilgiri Hills.
          </p>
          <div className="flex justify-center pb-2">
            <div className="flex flex-wrap justify-center items-center gap-8 h-auto p-2">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] lg:w-[30%]"
                >
                  <ReviewsPage />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer openForm={() => setOpenBox(true)} />
    </>
  )
}

export default App
