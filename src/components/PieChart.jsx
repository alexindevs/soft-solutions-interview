import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GreenArrowIcon, PurpleArrowIcon } from "../assets/icons/icons";

const PieChart = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 p-6 md:p-10 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
      {/* Main Circular Chart */}
      <div className="relative w-40 h-40 sm:w-60 sm:h-60 bg-[#6C5DD31A] rounded-full p-2 shadow-3xl">
        <div className="rounded-full shadow-lg">
          <CircularProgressbar
            value={82.3}
            text={``}
            strokeWidth={10}
            styles={buildStyles({
              textSize: "18px",
              textColor: "#1e3a8a", // Blue text
              pathColor: "url(#gradient)", // Use gradient for the path
              trailColor: "#6C5DD31A", // Light gray for the trail
              backgroundColor: "#6C5DD31A",
            })}
          />
        </div>
        {/* Text in the Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="shadow-2xl p-4 sm:p-6 rounded-full grid place-items-center bg-white">
            <p className="text-lg sm:text-[22px] font-bold text-[#0049C6]">82.3%</p>
            <p className="text-xs sm:text-sm font-medium text-[#0049C6]">Total</p>
          </div>
        </div>
        {/* Gradient Definition */}
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#34d399" /> {/* Green */}
              <stop offset="100%" stopColor="#818cf8" /> {/* Purple */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Stats */}
      <div className="space-y-0 md:space-y-6 flex flex-row md:flex-col items-center md:items-start justify-between space-x-0 sm:space-x-6 md:space-x-0">
        {/* Daily Customers */}
        <div className="flex items-center space-x-3">
          <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#E2E6FF] rounded-full shadow-3xl">
            <svg style={{ height: 0 }}>
              <defs>
                <linearGradient
                  id="gradientColors"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor="#6E81FE" />
                  <stop offset="100%" stopColor="#FFB7F5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="rounded-full shadow-lg">
              <CircularProgressbar
                value={30}
                text={``}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: "18px",
                  textColor: "#1e3a8a", // Blue text
                  pathColor: "url(#gradientColors)", // Referencing the gradient ID
                  trailColor: "#6C5DD31A", // Light gray for the trail
                })}
              />
            </div>
            {/* Text in the Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="bg-white w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] grid place-items-center p-1 rounded-full shadow-2xl">
                <PurpleArrowIcon />
              </div>
            </div>
          </div>
          <div className="ml-2">
            <p className="text-[#081735] text-sm sm:text-[14px] font-bold">+18%</p>
            <p className="text-[#8F95B2] text-xs sm:text-[12px] font-medium">
              Daily customers
            </p>
          </div>
        </div>

        {/* Weekly New Customers */}
        <div className="flex items-center space-x-3">
          <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#9EC60066] rounded-full shadow-3xl">
            <svg style={{ height: 0 }}>
              <defs>
                <linearGradient
                  id="gradientColors2"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor="#9EC600" />
                  <stop offset="100%" stopColor="#CDF4FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="rounded-full shadow-lg">
              <CircularProgressbar
                value={30}
                text={``}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: "18px",
                  textColor: "#1e3a8a", // Blue text
                  pathColor: "url(#gradientColors2)", // Referencing the gradient ID
                  trailColor: "#6C5DD31A", // Light gray for the trail
                })}
              />
            </div>
            {/* Text in the Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="bg-white w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] grid place-items-center p-1 rounded-full shadow-2xl">
                <GreenArrowIcon />
              </div>
            </div>
          </div>
          <div className="ml-2 sm:ml-4">
            <p className="text-[#081735] text-sm sm:text-[14px] font-bold">+14%</p>
            <p className="text-[#8F95B2] text-xs sm:text-[12px] font-medium">
              Weekly new customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;