import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky top-5 z-50 px-4 sm:px-6 lg:px-10">
      <div className="shadow navbar bg-base-300 rounded-3xl flex items-center py-2 px-4 relative">
        
        {/* Left placeholder for nav items */}
        <div className="flex items-center gap-2 absolute left-4">
          {/* Add left nav items here if needed */}
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <Logo />
        </div>

        {/* Right placeholder for nav items */}
        <div className="flex items-center gap-2 absolute right-4">
          {/* Add right nav items here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
