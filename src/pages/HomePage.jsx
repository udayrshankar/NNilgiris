import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import NavBar from "../components/NavBar";
import BookingBox from "../components/BookingBox";

const HomePage = () => {
  const [openBox, setOpenBox] = useState(false);

  return (
    <>
      <NavBar />

      <div
      id="home"
        className="relative pb-16 pt-24 min-h-screen text-white"
        style={{
          backgroundImage: "url('/vivek-kumar-JS_ohjocm00-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Headline Section */}
        <div className="flex flex-col text-center items-center mx-auto px-4 sm:px-6 md:px-10 max-w-4xl mt-16 mb-8">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black"
            data-aos="fade-down"
          >
            Transform Your Team in the
          </h2>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold animate-pulse text-emerald-500 mt-2"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Nilgiri Hills
          </h2>
          <p
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Corporate retreats and wellness getaways that blend strategy, wellness,
            and culture in the breathtaking mountains of Ooty.
          </p>
        </div>

        {/* Buttons Section */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-16 mb-10 px-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            onClick={() => setOpenBox(true)}
            className="cursor-pointer flex items-center justify-center gap-2 
              bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 
              rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 
              w-full sm:w-auto"
          >
            <span>Corporate Retreats</span> <FaArrowRight />
          </button>

          <button
            onClick={() => setOpenBox(true)}
            className="cursor-pointer flex items-center justify-center gap-2 
              text-black bg-white/30 backdrop-blur-md hover:bg-white/50 
              px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold 
              shadow-md hover:shadow-lg transition-all duration-300 
              w-full sm:w-auto"
          >
            <span>Weekend Getaways</span> <FaArrowRight />
          </button>
        </div>

        {/* Stats Section */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center text-center gap-10 sm:gap-16 md:gap-24 px-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <h2 className="font-bold text-4xl sm:text-5xl mb-2">50+</h2>
            <span className="text-lg sm:text-xl">Happy Teams</span>
          </div>
          <div>
            <h2 className="font-bold text-4xl sm:text-5xl mb-2">200+</h2>
            <span className="text-lg sm:text-xl">Participants</span>
          </div>
          <div>
            <h2 className="font-bold text-4xl sm:text-5xl mb-2">98%</h2>
            <span className="text-lg sm:text-xl">Satisfaction Rate</span>
          </div>
        </div>
      </div>

      {/* Booking Box Popup */}
      {openBox && <BookingBox onClose={() => setOpenBox(false)} />}
    </>
  );
};

export default HomePage;
