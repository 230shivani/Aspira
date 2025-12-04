import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#0e1a33] p-5 rounded-xl shadow-md flex flex-col gap-2">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-gray-300">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
