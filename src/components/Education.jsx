import React from "react";

const Education = () => {
  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Education</h2>

        <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">
            B.Sc. in Computer Science & Engineering
          </h3>
          <p className="text-lg mb-1 font-medium">
            Northern University of Business and Technology, Khulna
          </p>
          <p className="text-md mb-1 text-gray-700">
            Level 4-1 (4th Year, 7th Semester)
          </p>
          <p className="text-md text-gray-700">
            Current CGPA: <span className="font-semibold">3.72</span> / 4.00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
