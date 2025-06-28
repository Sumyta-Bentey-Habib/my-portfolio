import React from 'react';
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-10 py-4 bg-gray-100">
      <div className="flex items-center justify-center space-x-2 text-center text-sm text-black">
        <span>© {new Date().getFullYear()}</span>
        <Logo className="inline-block w-5 h-5" />
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
