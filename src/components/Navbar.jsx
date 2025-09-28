import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky top-5 z-50 px-4 sm:px-6 lg:px-10">
      <div className="shadow navbar bg-base-300 rounded-3xl flex justify-between items-center py-2 px-4">
        
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Right/Center can be used for nav items if needed */}
        <div className="flex-1 text-center hidden lg:flex">
          {/* Placeholder for center nav items if needed */}
        </div>

        <div className="flex items-center gap-2">
          {/* Placeholder for navbar-end items if needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
