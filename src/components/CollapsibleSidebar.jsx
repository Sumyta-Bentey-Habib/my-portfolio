import React, { useState, useEffect } from "react";
import {
  HiMenu,
  HiHome,
  HiUser,
  HiCode,
  HiAcademicCap,
  HiFolderOpen,
  HiMail,
} from "react-icons/hi";
import Logo from "./Logo";


const CollapsibleSidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <HiHome /> },
    { name: "About", href: "#about", icon: <HiUser /> },
    { name: "Skills", href: "#skills", icon: <HiCode /> },
    { name: "My Journey", href: "#my-journey", icon: <HiAcademicCap /> },
    { name: "Projects", href: "#projects", icon: <HiFolderOpen /> },
    { name: "Contact", href: "#contact", icon: <HiMail /> },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    if (isMobile) setMobileOpen(false);
  };

  return (
    <div className="flex">
      {/* Overlay for mobile */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-purple-50 shadow-xl flex flex-col justify-between z-50
          transition-all duration-300 ease-in-out
          ${isMobile ? "transform transition-transform duration-300" : ""}
          ${
            isMobile && mobileOpen
              ? "translate-x-0"
              : isMobile
              ? "-translate-x-full"
              : ""
          }
          ${!isMobile && collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4">
            {!collapsed && !isMobile && <Logo />}
            <button
              onClick={() =>
                isMobile ? setMobileOpen(!mobileOpen) : setCollapsed(!collapsed)
              }
              className="btn btn-ghost btn-sm"
            >
              <HiMenu className="text-xl text-purple-700 transition-transform duration-300 hover:rotate-90" />
            </button>
          </div>

          {/* Links */}
          <ul className="menu p-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`
                    flex items-center gap-4 relative group transition-all duration-300 px-3 py-2 rounded-md
                    ${
                      activeLink === link.name
                        ? "text-purple-700 font-semibold bg-purple-100"
                        : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                    }
                  `}
                >
                  <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600">
                    {link.icon}
                  </span>
                  {!collapsed && (!isMobile || mobileOpen) && (
                    <span className="transition-colors duration-300">
                      {link.name}
                    </span>
                  )}
                  {collapsed && !isMobile && (
                    <span className="absolute left-20 bg-base-100 text-sm rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                      {link.name}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Resume Button */}
        <div className="p-4">
          <a
            href="https://drive.google.com/file/d/176RlhRwrlo0nE7c_mKOd8ebtKpCdIuLm/view?usp=sharing"
            target="_blank"
            className="btn bg-purple-600 hover:bg-purple-700 text-white w-full transition-all duration-300 transform hover:scale-105"
          >
            {!collapsed ? "Resume Link" : "Resume"}
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out p-6 ${
          !isMobile ? (collapsed ? "md:ml-20 ml-20" : "md:ml-64 ml-20") : ""
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default CollapsibleSidebar;
