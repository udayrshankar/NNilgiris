import React from "react";

const Cards = ({ icon: Icon, title, description, iconBg }) => {
  return (
    <div
      className="group flex items-center justify-center bg-white max-w-96 rounded-2xl p-8 
      shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 
      border border-slate-200 h-full"
    >
      <div className="text-black flex flex-col items-center text-center gap-4">
        <div
          className={`${iconBg} rounded-2xl w-16 h-16 flex items-center justify-center text-white 
          transition-transform duration-500 group-hover:rotate-5`}
        >
          <Icon size={35} />
        </div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Cards;