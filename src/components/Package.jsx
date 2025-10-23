import { Link } from 'react-router-dom';
import { FaCheck, FaUserTie, FaCalendarAlt, FaPhoneAlt, FaStar } from "react-icons/fa";

const Package = ({ openModal }) => {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-500">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-b from-green-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Custom Corporate Experience</h2>
          <span className="text-yellow-700 bg-yellow-100 text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1">
            <FaStar className="text-yellow-500" /> Premium
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-green-600 font-semibold text-2xl">₹50,000</span>
          <span className="text-gray-500 text-sm">per person</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1"><FaUserTie /> Fully Customizable</span>
          <span className="flex items-center gap-1"><FaPhoneAlt /> Personal Consultation</span>
        </div>
      </div>

      {/* Description */}
      <div className="p-6 flex flex-col gap-4">
        <p className="text-sm leading-relaxed">
          Create a completely bespoke corporate experience tailored to your team's unique needs and objectives.
          From intimate leadership retreats to large-scale corporate events.
        </p>

        <div className="flex flex-col gap-3 text-sm">
          <span className="flex items-center gap-2"><FaCheck className="text-emerald-500 text-xs" /> Dedicated Event Manager & Personal Consultation</span>
          <span className="flex items-center gap-2"><FaCheck className="text-emerald-500 text-xs" /> Flexible Duration (2–10 days) & Unlimited Participants</span>
          <span className="flex items-center gap-2"><FaCheck className="text-emerald-500 text-xs" /> VIP Accommodations & Premium Facilities</span>
          <span className="flex items-center gap-2"><FaCheck className="text-emerald-500 text-xs" /> Complete Transportation & Professional Documentation</span>
        </div>

        {/* Special Section */}
        <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
          <h4 className="font-semibold mb-2 text-gray-800 text-sm">✨ What Makes This Special?</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• One-on-one planning session with our founder</li>
            <li>• Access to exclusive venues and experiences</li>
            <li>• Post-retreat follow-up and impact assessment</li>
            <li>• Complimentary photography and videography</li>
          </ul>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link to="/form">
            <button
              onClick={openModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all"
            >
              Let's Design Your Retreat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
