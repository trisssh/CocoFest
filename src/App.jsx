import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider"
import { FaFacebook } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="min-h-screen  p-4 max-w-7xl mx-auto">
        {/* <h1 className="text-center font-bold text-3xl">GALLERY</h1> */}
        <div className="grid gap-2">
          {/* TITLE */}
          <div className="bg-white text-green-60 rounded-xl flex flex-col md:flex-row items-center justify-center py-1 px-8 w-full filter drop-shadow-[2px_2px_4px_#009780] my-1">
            {/* LOGO */}
            <img src="logos/CCF LOGO-2.png" alt="" className="h-16" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 capitalize">
                Coco Festival
              </h1>
              <h5 className="text-base md:text-lg text-gray-600 capslock uppercase">
                City of San Pablo
              </h5>
            </div>
          </div>

          <div>
            <Slider />
          </div>

          {/* GRID CONTAINER for Small pics*/}
          <div className="py-1">
            <h5 className="text-xl md:text-2xl font-semibold text-gray-800 text-center py-1">
              2025
            </h5>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-0 ">
              <div class="grid gap-2">
                <div>
                  <img
                    className="h-71 w-55 sm:w-75 md:h-94 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2022/_DSC5581.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-41 w-55 sm:w-95 md:h-60 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2024/_DSC1221.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-53 w-55 sm:w-73 md:h-70 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2023/_DSC5863.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img
                    className="h-48 w-55 sm:w-72 md:h-73 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2020/_DSC0239.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-79 w-55 sm:w-72 md:h-105 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2025/_DSC2331.JPG"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-35 w-55 sm:w-72 md:h-46 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2022/_DSC5608.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img
                    className="h-79 w-55 sm:w-75 md:h-105 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2023/_DSC6372.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-41 w-55 sm:w-73 md:h-55 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2024/_DSC0656.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-49 w-55 sm:w-73 md:h-65 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2025/_DSC2265.JPG"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img
                    className="h-38 w-55 sm:w-72 md:h-51 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2021/02.JPG"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-96 w-55 sm:w-72 md:h-127 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2020/02.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-35 w-55 sm:w-75 md:h-46 md:w-80 rounded-sm hover:scale-95 transition-transform duration-300"
                    src="/old/2022/_DSC5604.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FB LINK */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-4">
            <a
              className="bg-white text-green-600 = rounded-xl flex items-center justify-start py-2 px-8 w-full filter drop-shadow-[2px_2px_4px_#009780] my-1"
              href="https://www.facebook.com/TOURISMSANPABLOOFFICIALPAGE"
            >
              {/* Location Icon */}
              <FaFacebook className="text-green-500 text-5xl mr-4" />
              <div className="text-left">
                <h5 className="text-base md:text-xl font-semibold text-gray-800">
                  San Pablo City Tourism's Office FB Account
                </h5>
                <h5 className="text-base md:text-lg text-gray-600"></h5>
                <h5 className="text-sm md:text-base hover:underline">
                  Office of the City Tourism Officer - OCTO San Pablo
                </h5>
              </div>
            </a>
            <a
              className="bg-white text-green-600 = rounded-xl flex items-center justify-start py-2 px-8 w-full filter drop-shadow-[2px_2px_4px_#009780] my-1"
              href="#"
            >
              {/* Location Icon */}
              <FaFacebook className="text-green-500 text-5xl mr-4" />
              <div className="text-left">
                <h5 className="text-base md:text-xl font-semibold text-gray-800">
                  San Pablo City Coco Festival FB Account
                </h5>
                <h5 className="text-base md:text-lg text-gray-600"></h5>
                <h5 className="text-sm md:text-base hover:underline">
                  San Pablo City Coco Festival
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


