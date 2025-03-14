import React from "react";
import trusted1 from "../../assets/home/trusted1.jpg";
import about2 from "../../assets/home/about1-2.png";
import about3 from "../../assets/home/about1-3.png";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";

const TrustedCabService = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-10 mx-auto mt-20 px-5">
      {/* Image Section */}
      <div className="w-full md:w-[50%] relative flex justify-center">
        <img
          src={trusted1}
          alt="Trusted section"
          className="relative w-full max-w-[90%] h-auto md:h-[30rem]"
        />
        <img
          src={about2}
          alt="Trusted Section"
          className="absolute right-[-15px] md:right-0 top-5 md:top-10 w-[40%] max-w-[150px]"
        />
        <img
          src={about3}
          alt="Trusted Section"
          className="absolute bottom-[-50px] right-0 md:right-0 w-[40%] max-w-[150px]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[50%] mt-7 text-center md:text-left">
        <p className="text-gray-600">Welcome to Our Company</p>
        <h1 className="text-3xl md:text-5xl font-bold my-3">
          We Provide Trusted Cab Services
        </h1>
        <p className="text-gray-600 my-3">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master new technologies.
        </p>
        <p className="text-gray-600">
          Our portfolio includes dozens of successfully completed projects of
          houses of different storeys.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start mt-4">
          <div className="flex items-center gap-2">
            <CiCalendarDate className="text-3xl" />
            <h4 className="text-xl">Online Booking</h4>
          </div>
          <div className="flex items-center gap-2">
            <FaHeadset className="text-2xl" />
            <h4 className="text-xl">24/7 Support</h4>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="relative overflow-hidden bg-[#FFEE02] mt-6 px-6 py-3 rounded-xl cursor-pointer font-semibold text-black transition-all duration-500 group">
            <span className="absolute inset-0 bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-white">
              Book a Taxi
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustedCabService;
