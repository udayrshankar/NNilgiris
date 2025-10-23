import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-100/90 backdrop-blur-md md:h-[10vh] h-[7vh] shadow-md">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="font-bold text-xl sm:text-2xl text-emerald-600 cursor-pointer">
            Nilgiri Retreats
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-800 font-semibold">
          <a href="#home" className="hover:text-emerald-500 transition-colors">
            Home
          </a>
          <a href="#packages" className="hover:text-emerald-500 transition-colors">
            Packages
          </a>
          <a href="#about" className="hover:text-emerald-500 transition-colors">
            About
          </a>
          <a href="#gallery" className="hover:text-emerald-500 transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:flex">
          <a href="#booking">
            <button
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 
              rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 
              shadow-md hover:shadow-lg font-semibold text-sm sm:text-base"
            >
              Book Now
            </button>
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl text-emerald-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6 text-gray-800 font-semibold text-lg transform transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-emerald-500 transition-colors"
        >
          Home
        </a>
        <a
          href="#packages"
          onClick={() => setMenuOpen(false)}
          className="hover:text-emerald-500 transition-colors"
        >
          Packages
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-emerald-500 transition-colors"
        >
          About
        </a>
        <a
          href="#gallery"
          onClick={() => setMenuOpen(false)}
          className="hover:text-emerald-500 transition-colors"
        >
          Gallery
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-emerald-500 transition-colors"
        >
          Contact
        </a>
        <a href="#booking" onClick={() => setMenuOpen(false)}>
          <button
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 
            rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 
            shadow-md hover:shadow-lg font-semibold"
          >
            Book Now
          </button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
