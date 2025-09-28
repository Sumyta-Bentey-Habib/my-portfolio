import React, { useEffect, useState } from "react";
import one from "../../assets/project4/studify1.png";
import two from "../../assets/project4/studify2.png";
import three from "../../assets/project4/studify3.png";
import four from "../../assets/project4/studify4.png";
import five from "../../assets/project4/studify5.png";

const images = [one, two, three, four, five];

const ProjectFourCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Studify Screenshot ${index + 1}`}
            className="w-full flex-shrink-0 object-cover rounded-2xl"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-primary w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectFourCarousel;
