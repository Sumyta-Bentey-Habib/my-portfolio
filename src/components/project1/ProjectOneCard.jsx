import React from "react";
import ProjectOneCarousel from "./ProjectOneCarousel";
import { Github, ExternalLink, Info } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
const ProjectOneCard = () => {
  return (
    <div className="card bg-base-100 w-full max-w-md shadow-md hover:shadow-xl transition mx-auto my-10">
      <figure className="px-6 pt-6">
        <ProjectOneCarousel />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">GoAthlete</h2>
        <p className="mb-4">
          GoAthlete is a modern, user-friendly sports event platform that empowers
          athletes to explore, create, book, and manage events with ease.
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
            href="https://goathlete.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
          >
            <ExternalLink size={18} /> Live Site
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/GoAthlete-"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <Github size={18} /> Client Code
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/GoAthlete-server--site"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <Github size={18} /> Server Code
          </a>

          {/* 👉 Button to open modal */}
          <label htmlFor="goathlete-modal" className="btn btn-accent flex items-center gap-2">
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* 👉 Modal itself */}
      <input type="checkbox" id="goathlete-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Challenges & Solutions</h3>
          <p className="mb-2">
            While building GoAthlete, I faced challenges like designing a smooth user flow for booking sports events, managing user authentication with Firebase, and deploying the full-stack project reliably on Vercel & Netlify.
          </p>
          <p className="mb-4">
            I solved these by planning clear user stories, using protected routes, optimizing backend APIs, and testing deployments step by step.
          </p>
          <div className="modal-action">
            <label htmlFor="goathlete-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOneCard;
