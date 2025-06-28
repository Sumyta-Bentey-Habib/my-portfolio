import React from 'react';
import logoimg from "../assets/logo/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center  gap-0">
      <img src={logoimg} alt="Sumyta Bentey Habib Logo" className="h-10 w-auto" />
      <h3 className="text-lg font-semibold">Sumyta Bentey Habib</h3>
    </div>
  );
};

export default Logo;
