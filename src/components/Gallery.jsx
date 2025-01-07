import React, { useEffect, useState } from "react";
import im1 from "../images/im1.jpg";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpg";
import im4 from "../images/im4.jpg";
import im5 from "../images/im5.jpg";
import im6 from "../images/im6.jpg";
import im7 from "../images/im7.jpg";
import im8 from "../images/im8.jpg";

export default function Gallary() {
  const data = [
    { imgelink: im1 },
    { imgelink: im2 },
    { imgelink: im3 },
    { imgelink: im4 },
    { imgelink: im5 },
    { imgelink: im6 },
    { imgelink: im7 },
    { imgelink: im8 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true); // Trigger slide animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
        setSlide(false); // Reset slide after animation
      }, 500); // 500ms for slide animation
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="grid gap-4 m-4">
      {/* Main Slider Image with Slide Animation */}
      <div
        className={`transform transition-transform duration-500 ${
          slide ? "-translate-x-full" : "translate-x-0"
        } block sm:block`} // Ensure it's visible on both mobile and desktop
      >
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={data[currentIndex].imgelink}
          alt="slider-image"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {data?.map(({ imgelink }, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-lg overflow-hidden ${
              currentIndex === index ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <img
              src={imgelink}
              className="h-20 w-full object-cover object-center"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
