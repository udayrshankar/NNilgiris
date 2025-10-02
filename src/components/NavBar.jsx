import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="fixed w-full flex items-center justify-between py-4 bg-gray-100 z-10 px-35">
            <div className="flex">
                <h2 className="font-bold text-2xl text-emerald-600">Nilgiri Retreats</h2>
            </div>

            <div className="flex gap-10 text-gray-800 font-semibold mx-auto">
                <Link to="/" className="hover:text-emerald-300">Home</Link>
                <Link to="/packages" className="hover:text-emerald-300">Packages</Link>
                <Link to="/about" className="hover:text-emerald-300">About</Link>
                <Link to="/gallery" className="hover:text-emerald-300">Gallery</Link>
                <Link to="/contact" className="hover:text-emerald-300">Contact</Link>
            </div>

            <div className="flex-shrink-0">
                <Link>
                    <button className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl 
                    hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg 
                    hover:shadow-2xl font-semibold text-lg transform hover:scale-105 animate-pulse">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default NavBar;
