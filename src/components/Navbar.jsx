import React, { useState } from "react";
import logo from "../assets/logo-2.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-black px-4 relative">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-28" />
          </Link>
        </div>

        <div className="hidden md:flex text-white gap-5">
          <Link to="/" className="font-bold">Home</Link>
          <Link to="/services" className="font-bold">Services</Link>
          <Link to="/about-us" className="font-bold">About</Link>
          <Link to="/contact-us" className="font-bold">Contact</Link>
        </div>

        <div className="hidden md:block">
          <Button text={"Book a Taxi"} />
        </div>

        <div className="md:hidden">
          <IoMdMenu
            className="text-white text-4xl cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>

        {showSidebar && (
          <div
            className="fixed inset-0 bg-[#000000ab] bg-opacity-50 z-40"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}

        <div
          className={`fixed z-50 top-0 right-0 w-[50%] h-[100vh] bg-white text-black p-5 shadow-lg transition-transform duration-300 ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-5 right-5 text-black text-2xl"
            onClick={() => setShowSidebar(false)}
          >
            ✖
          </button>

          <ul className="flex flex-col gap-4 mt-10">
            <Link to="/" className="font-bold text-xl" onClick={() => setShowSidebar(false)}>
              Home
            </Link>
            <Link to="/services" className="font-bold text-xl" onClick={() => setShowSidebar(false)}>
              Services
            </Link>
            <Link to="/about-us" className="font-bold text-xl" onClick={() => setShowSidebar(false)}>
              About
            </Link>
            <Link to="/contact-us" className="font-bold text-xl" onClick={() => setShowSidebar(false)}>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
