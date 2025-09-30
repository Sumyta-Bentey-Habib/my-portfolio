import React, { useEffect, useState } from "react";
import one from "../../assets/project6/one.png";
import two from "../../assets/project6/two.png";
import three from "../../assets/project6/three.png";
import four from "../../assets/project6/four.png";
import five from "../../assets/project6/five.png";
const images = [one, two, three, four, five];
const ProjectSixCarousel = () => {
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
      {/* Image Slider */}{" "}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {" "}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Planora Screenshot ${i + 1}`}
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
export default ProjectSixCarousel;
