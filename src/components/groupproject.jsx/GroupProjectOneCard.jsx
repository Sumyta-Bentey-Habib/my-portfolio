import React from "react";
import GroupProjectOneCarousel from "./GroupProjectOneCarousel";
import { Github, ExternalLink, Users, Info } from "lucide-react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
} from "react-icons/si";

const techStack = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiSocketdotio />, name: "Socket.io" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const GroupProjectOneCard = ({ badge = "Group Project" }) => {
  return (
    <div className="bg-white w-full max-w-2xl shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition mx-auto my-10 relative">
      
      {/* Badge */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-purple-600">
        {badge}
      </span>

      {/* Carousel */}
      <figure className="px-6 pt-6">
        <GroupProjectOneCarousel />
      </figure>

      {/* Content */}
      <div className="px-8 pb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 text-purple-700">Quadra</h2>

        <p className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
          <Users size={16} /> Social Media Platform
        </p>

        <p className="text-gray-800 leading-relaxed mb-6">
          <strong>Quadra</strong> is a full-stack social media platform featuring
          real-time messaging, post interactions, notifications, and user profiles.
          Built collaboratively with a focus on scalability, performance, and
          real-time user experience.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition"
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://quadra-blush.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 px-5"
          >
            <ExternalLink size={18} /> Live Demo
          </a>

          <a
            href="https://github.com/Sumyta-Bentey-Habib/Quadra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Client
          </a>

          <a
            href="https://github.com/Sumyta-Bentey-Habib/Quadra-Server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Server
          </a>

          <label
            htmlFor="quadra-modal"
            className="btn bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 px-5"
          >
            <Info size={18} /> My Role
          </label>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="quadra-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white rounded-2xl max-w-lg">
          <h3 className="font-bold text-xl mb-3 text-purple-700">
            My Contributions
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Built frontend UI with Next.js App Router</li>
            <li>Integrated real-time messaging using Socket.io</li>
            <li>Implemented authentication & protected routes</li>
            <li>Collaborated via GitHub and code reviews</li>
          </ul>
          <div className="modal-action">
            <label
              htmlFor="quadra-modal"
              className="btn bg-purple-600 text-white rounded-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProjectOneCard;
