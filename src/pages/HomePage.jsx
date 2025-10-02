import { FaSuitcase, FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import NavBar from "../components/NavBar";
import BookingBox from "../components/BookingBox";

const HomePage = () => {
  const [openBox, setOpenBox] = useState(false);

  return (
    <>
      <NavBar />

      <div className="pb-20 pt-24">
        <div className="flex flex-col text-center mb-5">
          <div className="flex flex-col justify-center items-center mx-auto max-w-4xl mt-20 mb-3">
            <h2 className="text-6xl font-bold">Transform Your Team in the</h2>
            <h2 className="text-7xl font-bold animate-pulse text-emerald-600">
              Nilgiri Hills
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-5 mb-10 mt-20">
          <button
            onClick={() => setOpenBox(true)}
            className="cursor-pointer transform hover:scale-105 animate-pulse flex items-center gap-3 
            bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold 
            shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="flex items-center gap-2 p-2">
              <FaSuitcase /> Corporate Retreats <FaArrowRight />
            </h2>
          </button>

          <button
            onClick={() => setOpenBox(true)}
            className="cursor-pointer transform hover:scale-105 animate-pulse flex items-center gap-3 px-6 py-3 rounded-xl 
              font-semibold text-white bg-white/30 backdrop-blur-md hover:bg-white/50 shadow-md transition-all duration-300"
          >
            <h2 className="flex items-center gap-2 p-2">
              <FaHeart /> Weekend Getaways <FaArrowRight />
            </h2>
          </button>
        </div>

        <div className="flex items-center justify-center text-center gap-30">
          <div>
            <h2 className="font-bold text-5xl mb-2">50+</h2>
            <span className="text-lg">Happy Teams</span>
          </div>
          <div>
            <h2 className="font-bold text-5xl mb-2">200+</h2>
            <span className="text-lg">Participants</span>
          </div>
          <div>
            <h2 className="font-bold text-5xl mb-2">98%</h2>
            <span className="text-lg">Satisfaction Rate</span>
          </div>
        </div>
      </div>

      {openBox && <BookingBox onClose={() => setOpenBox(false)} />}
    </>
  );
};

export default HomePage;