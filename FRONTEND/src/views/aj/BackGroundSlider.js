import React, { useState } from "react";
import Data from "../data/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import manager from "../aj/Manager"
import { Link } from "react-router-dom";

function BackGroundSlider() {
  const myData = Data;
  const [activeSlider, setActiveSlider] = useState(3);

  const prevSliderHandle = (id) => {
    if (id === 1) {
      setActiveSlider(myData.length);
    } else if (id > 1) {
      setActiveSlider(activeSlider - 1);
    } else {
      setActiveSlider(myData.length - 1);
    }
  };
  const nextSliderHandle = (id) => {
    if (id === myData.length) {
      setActiveSlider(1);
    } else if (id < myData.length) {
      setActiveSlider(activeSlider + 1);
    } else {
      setActiveSlider(myData.length - 1);
    }
  };

  return (
    <div className="m-2">
      {myData.map((item) => {
        const { id, image, title, random } = item;
        return (
          <div key={id} className={activeSlider === id ? "flex  " : "hidden " }>
            {/* <button
              className=" text-2xl  border-2 border-black"
              onClick={() => prevSliderHandle(id)}
            >
              <FiChevronLeft />
            </button>
            <div className="flex flex-col items-center bg-slate-100">
              <img src={image} alt={title} className="w-full max-h-[500px] object-cover" />
              <h2>{id}</h2>
              <h3>{title}</h3>
              
            </div>
            <button
              className=" text-xl border-2 border-black"
              onClick={() => nextSliderHandle(id)}
            >
              <FiChevronRight />
            </button> */}

            <div className="max-w-[1640px] mx-auto mt-20 -z-10">
              <div className="max-h-[500px] ">
                {/* overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center"></div>
                <div className="absolute  m-[150px]">
                  <h1 className="text-white text-center  lg:m-[10px] lg:text-6xl">
                    The Future will Either be Green or Not at all
                  </h1>
                </div>
                <div className="absolute">
                  <div className="flex  ">
                    <button
                      className="m-[200px] ml-1 text-2xl absolute rounded-full bg-white/50 text-black"
                      onClick={() => prevSliderHandle(id)}
                    >
                      <FiChevronLeft />
                    </button>

                    <button
                      className=" text-2xl lg:ml-[1480px] absolute rounded-full m-[200px] hover:bg-slate-300 duration-300 hover:scale-110 bg-white/50 text-black  ml-[705px] "
                      onClick={() => nextSliderHandle(id)}
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                  <Link to="/manager">
                  <button className="lg:text-2xl rounded-xl m-[300px] text-white w-[150px] h-10 hover:scale-110 lg:ml-[600px] lg:mt-[300px] lg:w-[250px] lg:h-[50px] duration-300 bg-orange-700 hover:bg-orange-600  ">
                    Register Now
                  </button>
                  </Link>
                </div>

                <img
                  className="w-[800px] max-h-[500px] object-cover lg:w-[1640px]"
                  src={image}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BackGroundSlider;
