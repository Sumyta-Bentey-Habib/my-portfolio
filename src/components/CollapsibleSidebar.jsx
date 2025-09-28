import React, { useState } from "react";
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

  const links = [
    { name: "Home", href: "/", icon: <HiHome /> },
    { name: "About", href: "#about", icon: <HiUser /> },
    { name: "Skills", href: "#skills", icon: <HiCode /> },
    { name: "Education", href: "#education", icon: <HiAcademicCap /> },
    { name: "Projects", href: "#projects", icon: <HiFolderOpen /> },
    { name: "Contact", href: "#contact", icon: <HiMail /> },
  ];

  // Function to auto-close sidebar on small screens
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className="flex">
      <aside
        className={`fixed top-0 left-0 h-full bg-purple-100 shadow-xl flex flex-col justify-between transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Sidebar Header */}
        <div>
          <div className="flex items-center justify-between p-4">
            {!collapsed && <Logo />}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="btn btn-sm btn-ghost"
            >
              <HiMenu className="text-xl" />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="menu p-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick} // Auto-close on small screens
                  className="flex items-center gap-4 hover:text-primary relative group"
                >
                  <span className="text-xl">{link.icon}</span>
                  {!collapsed && <span>{link.name}</span>}
                  {collapsed && (
                    <span className="absolute left-20 bg-base-200 text-sm rounded px-2 py-1 shadow opacity-0 group-hover:opacity-100 transition">
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
            href="https://drive.google.com/file/d/19m7aqTJvhOKWY7r_vu36K-LvFBUx7Gxm/view?usp=drive_link"
            target="_blank"
            className="btn btn-primary w-full"
          >
            {!collapsed ? "Resume Link" : "Resume"}
          </a>
        </div>
      </aside>

      {/* Page Content */}
      <main
        className={`flex-1 transition-all duration-300 p-6
          ${collapsed ? "md:ml-20 ml-20" : "md:ml-64 ml-64"}`}
      >
        {children}
      </main>
    </div>
  );
};

export default CollapsibleSidebar;
