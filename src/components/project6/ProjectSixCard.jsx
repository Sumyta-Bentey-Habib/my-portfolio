import React from "react";
import ProjectSixCarousel from "./ProjectSixCarousel";
import { Github, ExternalLink, Info } from "lucide-react";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
const techStack = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];
const ProjectSixCard = () => {
  return (
    <div className="bg-white w-full max-w-2xl shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition mx-auto my-10">
      {" "}
      {/* Carousel */}{" "}
      <figure className="px-6 pt-6">
        {" "}
        <ProjectSixCarousel />{" "}
      </figure>{" "}
      {/* Card content */}{" "}
      <div className="card-body items-center text-center px-8 pb-8">
        {" "}
        <h2 className="text-3xl font-bold text-purple-700 mb-3">
          Planora 
        </h2>{" "}
        <p className="mb-6 text-gray-800 leading-relaxed">
          {" "}
          <strong>Planora</strong> is a modern event management platform where
          explorers can discover events and planners can create, manage, and
          promote them. Featuring authentication, dashboards, and real-time
          event data, it’s built with Next.js, TailwindCSS, and MongoDB for a
          clean and responsive experience.{" "}
        </p>{" "}
        {/* Tech stack */}{" "}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {" "}
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition"
            >
              {" "}
              {tech.icon} {tech.name}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        {/* Links */}{" "}
        <div className="flex flex-wrap justify-center gap-3">
          {" "}
          <a
            href="https://planora-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 px-5"
          >
            {" "}
            <ExternalLink size={18} /> Live Demo{" "}
          </a>{" "}
          <a
            href="https://github.com/Sumyta-Bentey-Habib/planora"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            {" "}
            <Github size={18} /> GitHub (Client){" "}
          </a>{" "}
          <a
            href="https://github.com/Sumyta-Bentey-Habib/planora-server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            {" "}
            <Github size={18} /> GitHub (Server){" "}
          </a>{" "}
          {/* Challenges modal trigger */}{" "}
          <label
            htmlFor="planora-modal"
            className="btn bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 px-5"
          >
            {" "}
            <Info size={18} /> Challenges{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      {/* Challenges Modal */}{" "}
      <input type="checkbox" id="planora-modal" className="modal-toggle" />{" "}
      <div className="modal" role="dialog">
        {" "}
        <div className="modal-box bg-white rounded-2xl max-w-lg">
          {" "}
          <h3 className="font-bold text-xl mb-3 text-purple-700">
            {" "}
            Challenges & Solutions{" "}
          </h3>{" "}
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
            {" "}
            <li>
              {" "}
              Implementing role-based authentication (Explorer vs Planner) with
              NextAuth.js and MongoDB.{" "}
            </li>{" "}
            <li>
              {" "}
              Managing multiple event collections efficiently with smooth
              performance.{" "}
            </li>{" "}
            <li>
              {" "}
              Designing responsive dashboards and interactive charts for admins
              and users.{" "}
            </li>{" "}
            <li>
              {" "}
              Creating seamless event discovery and management with clean UI
              using TailwindCSS and shadcn/ui.{" "}
            </li>{" "}
          </ul>{" "}
          <div className="modal-action">
            {" "}
            <label
              htmlFor="planora-modal"
              className="btn bg-purple-600 text-white rounded-full"
            >
              {" "}
              Close{" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProjectSixCard;
