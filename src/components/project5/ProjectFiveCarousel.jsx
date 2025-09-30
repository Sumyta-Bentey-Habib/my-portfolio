import React, { useEffect, useState } from "react";
import one from "../../assets/project5/es1.png";
import two from "../../assets/project5/es2.png";
import three from "../../assets/project5/es3.png";
import four from "../../assets/project5/es4.png";
import five from "../../assets/project5/es5.png";
const images = [one, two, three, four, five];
const ProjectFiveCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
      {" "}
      {/* Images slider */}{" "}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {" "}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Espresso-Emporium Screenshot ${i + 1}`}
            className="w-full flex-shrink-0 object-cover rounded-2xl"
          />
        ))}{" "}
      </div>{" "}
      {/* Dots */}{" "}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {" "}
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? "bg-purple-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default ProjectFiveCarousel;
