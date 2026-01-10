import { useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const images = [
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
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto play
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slides */}
      <h5 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
        2026
      </h5>
      <div className="relative h-[250px] md:h-[450px] md:w-full  overflow-hidden rounded-lg bg-gradient-to-b from-green-600 to-emerald-700">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full md:py-2 flex justify-center object-contain transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Play / Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 z-20 bg-green-100/70 p-3 rounded-full shadow"
        >
          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
        </button>
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-green-100/60 hover:bg-green-100 p-2 rounded-full"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-green-100/60 hover:bg-green-100 p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
