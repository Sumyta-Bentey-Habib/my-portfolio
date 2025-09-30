
import React from "react";
import ProjectFiveCarousel from "./ProjectFiveCarousel";
import { Github, ExternalLink, Info } from "lucide-react";
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const ProjectFiveCard = () => {
  return (
    <div className="bg-white w-full max-w-2xl shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition mx-auto my-10">
      {/* Carousel */}
      <figure className="px-6 pt-6">
        <ProjectFiveCarousel />
      </figure>

      {/* Card content */}
      <div className="card-body items-center text-center px-8 pb-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-3">
          Espresso-Emporium
        </h2>
        <p className="mb-6 text-gray-800 leading-relaxed">
          <strong>Espresso-Emporium</strong> is a modern coffee e-commerce
          platform where coffee lovers can explore products, leave reviews,
          and sellers can showcase their offerings. Admins ensure smooth
          operation by managing users, sellers, and content.
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
            href="https://espresso-emporium-8d4f7.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 px-5"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Espresso-Emporium"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Client
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Espresso-Emporium-Server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Server
          </a>

          {/* Challenges modal trigger */}
          <label
            htmlFor="espresso-modal"
            className="btn bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 px-5"
          >
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* Challenges Modal */}
      <input type="checkbox" id="espresso-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white rounded-2xl max-w-lg">
          <h3 className="font-bold text-xl mb-3 text-purple-700">
            Challenges & Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
            <li>
              Building a role-based system for users, sellers, and admins with
              Firebase authentication.
            </li>
            <li>
              Designing backend APIs with Express.js and MongoDB for efficient
              product, review, and user management.
            </li>
            <li>
              Designing responsive UI for both buyers and sellers with Tailwind
              CSS.
            </li>
            <li>
              Ensuring smooth admin control over users, sellers, and reviews.
            </li>
          </ul>
          <div className="modal-action">
            <label
              htmlFor="espresso-modal"
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

export default ProjectFiveCard;

