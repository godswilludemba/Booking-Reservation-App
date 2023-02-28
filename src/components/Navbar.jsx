import React from "react";

export default function Navbar() {
  return (
    <div className="navbar h-14 bg-gray-600 flex justify-center">
      <div className="navContainer w-full max-w-5xl text-white flex items-center justify-between">
        <span className="logo font-bold text-red-100">Book$Reserve</span>
        <div className="navItems">
          <button className="navButton mr-5 border-none px-5 py-2 cursor-pointer bg-orange-700 rounded">
            Register
          </button>
          <button className="navButton ml-5 border-none px-5 py-2 cursor-pointer bg-orange-700 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
