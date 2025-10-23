import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsPage = ({ quote, name, company, stars }) => {
  return (
    <div className="bg-white h-full rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col justify-between
                    transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Quote className="text-emerald-500" size={32} />
          <div className="flex gap-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className="text-yellow-400" fill="#facc15" size={18} />
            ))}
            {[...Array(5 - stars)].map((_, i) => (
              <Star key={i} className="text-gray-300" fill="#D1D5DB" size={18} />
            ))}
          </div>
        </div>
        <p className="text-gray-700 text-left text-lg italic">
          "{quote}"
        </p>
      </div>
      <div className="mt-6 text-left">
        <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default ReviewsPage;