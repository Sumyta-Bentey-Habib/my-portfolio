import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-primary flex items-center justify-center gap-4">
          <GraduationCap className="w-10 h-10" /> Foundation & Growth
        </h2>

        <div className="relative bg-base-100 p-10 rounded-3xl shadow-xl border-t-4 border-primary transition hover:shadow-2xl">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-lg">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h3 className="text-3xl font-semibold mb-2 text-gray-800">B.Sc. in Computer Science & Engineering</h3>
          <p className="text-lg mb-2 font-medium text-gray-600">
            Northern University of Business and Technology, Khulna
          </p>
          <p className="text-md mb-1 text-gray-700">4th Year, 7th Semester out of 8 Semesters</p>
          <p className="text-md mb-1 text-gray-700">Expected Graduation: 2026</p>
          <p className="text-md text-gray-700">
            Current CGPA: <span className="font-bold text-primary">3.72</span> / 4.00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
