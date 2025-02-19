import React from "react";

function MidHero() {
  return (
    <div className="relative bg-gray-100">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="https://cdn.decorilla.com/images/960/5184b656-9917-4c16-bd90-f1a2b7a8c93b/High-end-interior-design-help.jpg?cv=1"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-3xl font-light text-gray-800 text-center">
            Think you can't afford <br />
            beautiful interior design?
            <br />
            Think again.
          </h2>

          <div className=" flex items-center justify-center mt-8 cursor-pointer">
            <span className="rounded-lg  bg-[#B19F6F] group-hover:border-none px-9 py-1 text-sm/6 font-semibold text-white ring-1 ring-inset ring-indigo-500/20 transition-all duration-300  hover:text-gray-300 hover:border-black">
              Schedule a Consultation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidHero;
