import { Link } from "react-router-dom";
import { FaCalendarAlt, FaCheck, FaUser } from "react-icons/fa";

const Getaways = ({
  title,
  minPrice,
  maxPrice,
  duration,
  groupSize,
  description,
  features,
  openForm,
  badge = "Getaway",
}) => {

  // --- ADDED CONDITIONAL STYLING FOR BUTTON ---
  const buttonClass =
    badge === "Corporate"
      ? "bg-emerald-600 hover:bg-emerald-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300 max-w-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg text-gray-900">{title}</h2>
          <span className="text-emerald-700 bg-emerald-100 text-sm font-semibold px-2 py-1 rounded-md">
            {badge}
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-emerald-600 font-bold text-2xl">₹{minPrice}</span>
          <span className="text-gray-800 font-semibold text-lg"> - {maxPrice}</span>
          <span className="text-gray-500 text-sm ml-1">per person</span>
        </div>

        <div className="flex items-center gap-5 text-sm text-gray-600 mt-1">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-emerald-500" /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="text-emerald-500" /> Up to {groupSize}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="p-6 flex flex-col gap-4">
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        <div className="flex flex-col text-left text-sm text-gray-700 gap-2">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center gap-2">
              <FaCheck className="text-emerald-500 text-xs" /> {feature}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <Link to="/packages">
            <button
              // --- APPLIED CONDITIONAL BUTTON CLASS ---
              className={`${buttonClass} text-white font-semibold rounded-xl px-6 py-3 transition-all shadow-sm`}
              onClick={openForm}
            >
              Select Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Getaways;