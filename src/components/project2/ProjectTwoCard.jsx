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

const ProjectTwoCard = () => {
  return (
    <div className="card bg-base-100 w-full max-w-md shadow-md hover:shadow-xl transition mx-auto my-10">
      <figure className="px-6 pt-6">
        <ProjectTwoCarousel />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">Hobby Hood</h2>
        <p className="mb-4">
          Hobby Hood is a vibrant and interactive web platform designed for hobbyists of all kinds!
          Whether you're into painting, coding, gardening, gaming, or something uniquely you.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    <SiReact /> React
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    <SiNodedotjs /> Node.js
                  </span>
                  <span className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                    <SiExpress /> Express
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                    <SiMongodb /> MongoDB
                  </span>
                  <span className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss /> Tailwind CSS
                  </span>
                  <span className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    <SiFirebase /> Firebase
                  </span>
                </div>
                </div>

        <div className="card-actions justify-center flex flex-wrap gap-2">
          <a
            href="https://hobby-hood-1d7f6.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
          >
            <ExternalLink size={18} /> Live Site
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Hobby-Hood"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <Github size={18} /> Client Code
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Hobby-Hood-Server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <Github size={18} /> Server Code
          </a>

          {/* Modal Trigger */}
          <label htmlFor="hobbyhood-modal" className="btn btn-accent flex items-center gap-2">
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="hobbyhood-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Challenges & Solutions</h3>
          <p className="mb-2">
            Building Hobby Hood, I tackled challenges like designing real-time user interactions,
            managing hobby groups, and deploying with Firebase.
          </p>
          <p className="mb-4">
            I solved this by using Firebase Authentication & Realtime Database, 
            ensuring smooth group creation flows, and refining the UI with Tailwind CSS.
          </p>
          <div className="modal-action">
            <label htmlFor="hobbyhood-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwoCard;
