import React from "react";
import ProjectTwoCarousel from "./ProjectTwoCarousel";
import { Github, ExternalLink, Info } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiFirebase />, name: "Firebase" },
];

const ProjectTwoCard = () => {
  return (
    <div className="bg-white w-full max-w-2xl shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition mx-auto my-10">
      {/* Carousel */}
      <figure className="px-6 pt-6">
        <ProjectTwoCarousel />
      </figure>

      {/* Card content */}
      <div className="card-body items-center text-center px-8 pb-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-3">Hobby Hood</h2>
        <p className="mb-6 text-gray-800 leading-relaxed">
          <strong>Hobby Hood</strong> is a vibrant and interactive web platform
          designed for hobbyists of all kinds! Whether you’re into painting,
          coding, gardening, gaming, or something uniquely you — this platform
          makes connecting and sharing your passion simple and fun.
        </p>

        {/* Tech stack */}
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
            href="https://hobby-hood-1d7f6.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 px-5"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Hobby-Hood"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Client
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Hobby-Hood-Server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Server
          </a>

          {/* Challenges modal trigger */}
          <label
            htmlFor="hobbyhood-modal"
            className="btn bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 px-5"
          >
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* Challenges Modal */}
      <input type="checkbox" id="hobbyhood-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white rounded-2xl max-w-lg">
          <h3 className="font-bold text-xl mb-3 text-purple-700">
            Challenges & Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Creating an engaging, user-friendly design for hobby groups.</li>
            <li>Implementing secure authentication & group membership flow.</li>
            <li>Structuring real-time data with Firebase for smooth interaction.</li>
            <li>Ensuring responsive layouts and accessibility with Tailwind CSS.</li>
          </ul>
          <div className="modal-action">
            <label
              htmlFor="hobbyhood-modal"
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

export default ProjectTwoCard;
