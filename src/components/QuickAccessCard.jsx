import React from "react";

const QuickAccessCard = ({ title, desc, icon }) => {
  return (
    <div className="bg-[#132044] p-6 rounded-xl shadow-md">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>
    </div>
  );
};

export default QuickAccessCard;
