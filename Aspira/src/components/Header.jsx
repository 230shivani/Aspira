import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0B1224] px-6 md:px-16 py-4 flex items-center justify-between shadow-md">
      {/* LEFT SIDE - Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg md:text-xl">
          AS
        </div>
        <h1 className="text-white text-xl md:text-2xl font-extrabold">
          Aspira
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <button className="text-gray-300 hover:text-white transition font-medium">
          Sign In
        </button>

        <button className="px-6 py-2 md:px-8 md:py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
