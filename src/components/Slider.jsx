import { useState } from "react";

export const imageGroups = {
  One: [
    "CocoFestPics/C-1.png",
    "CocoFestPics/C-2.png",
    "CocoFestPics/C-3.png",
    "CocoFestPics/C-4.png",
    "CocoFestPics/C-5.png",
    "CocoFestPics/C-6.png",
    "CocoFestPics/C-7.png",
    "CocoFestPics/C-8.png",
    "CocoFestPics/C-9.png",
    "CocoFestPics/C-10.png",
    "CocoFestPics/C-11.png",
    "CocoFestPics/C-12.png",
    "CocoFestPics/C-13.png",
    "CocoFestPics/C-14.png",
  ],
  Two: [
    "CocoFestPics/two/(2)CF-1.jpg",
    "CocoFestPics/two/(2)CF-2.jpg",
    "CocoFestPics/two/(2)CF-3.jpg",
    "CocoFestPics/two/(2)CF-4.jpg",
  ],
  Three: [
    "CocoFestPics/three/CF-1.jpg",
    "CocoFestPics/three/CF-2.jpg",
    "CocoFestPics/three/CF-3.jpg",
    "CocoFestPics/three/CF-4.jpg",
    "CocoFestPics/three/CF-5.jpg",
    "CocoFestPics/three/CF-6.jpg",
    "CocoFestPics/three/CF-7.jpg",
    "CocoFestPics/three/CF-8.jpg",
    "CocoFestPics/three/CF-9.jpg",
  ],
};

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [theme, setTheme] = useState("One");

  const images = imageGroups[theme];
  const prev = (current - 1 + images.length) % images.length;
  const next = (current + 1) % images.length;

  return (
    <div className="relative w-full max-w-4xl mx-auto px-2 ">
      {/* Title */}
      <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center mb-4">
        2026
      </h5>

      {/* Slider */}
      <div className="relative flex items-center justify-center h-60 sm:h-72 md:h-96 w-full">
        {/* Left Image */}
        <img
          src={images[prev]}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 md:w-90 h-90 object-cover rounded-xl opacity-60 scale-90 transition border border-emerald-500"
          alt="previous"
        />

        {/* Main Image */}
        <img
          src={images[current]}
          className="z-10 h-60 w-60 sm:w-85 sm:h-85 md:w-99 md:h-99 object-cover rounded-2xl shadow-xl transition filter drop-shadow-[0_0_0.5rem_#009780]"
          alt="current"
        />

        {/* Right Image */}
        <img
          src={images[next]}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-20 md:w-90 h-90 object-cover rounded-xl opacity-60 scale-90 transition border border-emerald-500"
          alt="next"
        />

        {/* Controls */}
        <button
          onClick={() => setCurrent(prev)}
          className="absolute top-1/2 left-1 sm:left-3 -translate-y-1/2 bg-green-100/60 hover:bg-green-100 p-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={() => setCurrent(next)}
          className="absolute top-1/2 right-1 sm:right-3 -translate-y-1/2 bg-green-100/60 hover:bg-green-100 p-2 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Nav */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {Object.keys(imageGroups).map((item) => (
          <button
            key={item}
            onClick={() => {
              setTheme(item);
              setCurrent(0);
            }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition
              ${
                theme === item
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
