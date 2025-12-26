import React from "react";

const ActionItemCard = ({ title, priority }) => {
  return (
    <div className="bg-[#132044] p-4 rounded-xl shadow-md">
      <div className="flex justify-between mb-1">
        <h3 className="font-semibold text-white">{title}</h3>
        <span className="text-sm bg-red-600 px-3 py-1 rounded-full">
          {priority}
        </span>
      </div>
    </div>
  );
};

export default ActionItemCard;
