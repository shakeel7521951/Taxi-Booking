import React from "react";
import logo from "../assets/logo-2.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-28" />
          </Link>
        </div>
        <div className="flex text-white gap-5">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to="/" className="font-bold">
            Services
          </Link>
          <Link to="/about-us" className="font-bold">
            About
          </Link>
          <Link to="/contact-us" className="font-bold">
            Contact
          </Link>
        </div>
        <Button text={"Book a Taxi"} />
      </div>
    </div>
  );
};

export default Navbar;
