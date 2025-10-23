import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Map badge text to colors
const badgeColors = {
  corporate: "text-emerald-700 bg-emerald-100",
  getaway: "text-blue-700 bg-blue-100",
  activities: "text-purple-700 bg-purple-100",
};

const GalleryCard = ({ img, title, badge, photos }) => {
  const colorClasses = badgeColors[badge.toLowerCase()] || "text-gray-700 bg-gray-100";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="overflow-hidden h-52">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${colorClasses}`}>
            {badge}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{photos} photos</span>
          <a href="#" className="flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700">
            View Gallery <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;