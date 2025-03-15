import logo from "../assets/logo-2.png";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import appStore from "../assets/about/app-store.png";
import googlePlay from "../assets/about/google-play.png";
import { Link } from "react-router-dom";
import { LuChevronsLeft } from "react-icons/lu";
import Button from "../components/Button.jsx";

const Footer = () => {
  return (
    <div className="bg-black p-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-[20%]">
          <img src={logo} alt="company logo" loading="lazy" className="w-fit" />
        </div>
        <div className="w-full md:w-[30%]">
          <p className="text-white">
            Logo Authoritatively simplify open-source resources via backend
            visualize business e-markets before parallel.
          </p>
        </div>
        <div className="w-full md:w-[30%] relative">
          <div
            className="w-[300px] h-[60px] md:h-[70px] bg-[#FFEE02]"
            style={{ clipPath: "polygon(20% 3%, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>
          <div className="text-black flex items-center absolute top-1 md:top-3 right-14 md:right-10">
            <HiOutlineDevicePhoneMobile className="text-4xl me-2" />
            <div className="">
              <p className="uppercase text-sm md:font-semibold">
                call for taxi
              </p>
              <p className="text-xl md:text-2xl">5267-214-392</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex mt-5 text-white">
          <div className=" max-w-[300px]">
            <h3 className="font-bold text-2xl">Download Mobile App</h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#FFEE02] h-1 rounded-full mt-[-2px]" />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Competently re-engineer cross-media breed meta-services
            </p>
            <div className="flex gap-4 mt-5">
              <img
                src={appStore}
                className="w-32 h-12 cursor-pointer"
                alt="Download app from play store"
                loading="lazy"
              />
              <img
                src={googlePlay}
                className="w-32 h-12 cursor-pointer"
                alt="Download from google"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 text-white">
          <div className=" max-w-[300px]">
            <h3 className="font-bold text-2xl uppercase">Useful Links</h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#FFEE02] h-1 rounded-full mt-[-2px]" />
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex gap-2 items-center">
                <LuChevronsLeft className="mt-0.5" />
                <Link
                  to="/"
                  className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FFEE02] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                >
                  Home
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <LuChevronsLeft className="mt-0.5" />
                <Link
                  to="/services"
                  className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FFEE02] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                >
                  Services
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <LuChevronsLeft className="mt-0.5" />
                <Link
                  to="/about-us"
                  className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FFEE02] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                >
                  About
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <LuChevronsLeft className="mt-0.5" />
                <Link
                  to="/contact-us"
                  className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FFEE02] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 text-white">
          <div className=" max-w-[300px]">
            <h3 className="font-bold text-2xl uppercase">Newsletter</h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#FFEE02] h-1 rounded-full mt-[-2px]" />
            </div>
            <p className="my-2 text-sm text-gray-400">
              Signup for our weekly Newsletter updates
            </p>
            <div>
              <input
                type="email"
                className="p-3 mb-4 border-1 overflow-hidde border-gray-30 rounded-md outline-none"
                placeholder="Enter your email"
                // style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0% 100%)" }}
              />
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
