import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Northern University of Business and Technology, Khulna",
    year: "Expected Graduation: 2026",
    details: "Current CGPA: 3.72 / 4.00",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "purple",
  },
  {
    type: "experience",
    title: "Web Developer Intern",
    institution: "XIIA — Copenhagen, Denmark",
    year: "2025",
    details: [
      "Built and styled responsive UI using HTML and CSS",
      "Implemented interactive behavior using JavaScript",
      "Customized and maintained WordPress themes and plugins",
      "Worked with PHP for backend logic and content handling",
      "Collaborated with a remote team following professional workflows",
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: "purple",
  },
];

const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-purple-700 flex items-center justify-center gap-4">
          <GraduationCap className="w-10 h-10" /> Foundation & Growth
        </h2>

        <div className="relative border-l-4 border-purple-600">
          {timelineData.map((item, idx) => (
            <div key={idx} className="mb-16 ml-8 relative">
              {/* Icon */}
              <div className={`absolute -left-6 top-2 bg-purple-600 text-white p-3 rounded-full shadow-lg`}>
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-purple-600 transition hover:shadow-2xl">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-lg font-medium text-gray-600 mb-1">{item.institution}</p>
                {typeof item.details === "string" ? (
                  <p className="text-md text-gray-700">{item.details}</p>
                ) : (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {item.year && <p className="text-sm text-gray-500 mt-2">{item.year}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
