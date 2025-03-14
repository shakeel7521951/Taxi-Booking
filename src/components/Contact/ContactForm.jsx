import React from "react";
import { FiPhoneMissed } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="container flex flex-col md:flex-row mx-auto my-10">
      <div className="w-full md:w-[50%]">
        <p className="uppercase">Send us email</p>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Feel free to write
        </h1>
        <form type="submit" className="my-5 gap-3 flex flex-wrap">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="p-3 bg-[#F4F5F8] rounded outline-none focus:ring-2 focus:ring-[#FFEE02] transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="p-3 bg-[#F4F5F8] rounded outline-none focus:ring-2 focus:ring-[#FFEE02] transition duration-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            className="p-3 bg-[#F4F5F8] rounded outline-none focus:ring-2 focus:ring-[#FFEE02] transition duration-300"
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone"
            className="p-3 bg-[#F4F5F8] rounded outline-none focus:ring-2 focus:ring-[#FFEE02] transition duration-300"
          />
          <textarea
            type="text"
            name="phone"
            placeholder="Enter Phone"
            className="p-3 w-[84%] min-h-[150px] bg-[#F4F5F8] rounded outline-none focus:ring-2 focus:ring-[#FFEE02] transition duration-300"
          />
          <Button text="Discover More" bgHover="black" textHover="white" cutHover="white"/>
        </form>
      </div>
      <div className="w-full md:w-[50%]">
        <p className="uppercase">Need any help?</p>
        <h1 className="text-3xl md:text-5xl font-bold">Get in touch with us</h1>
        <p className="text-gray-600 text-sm my-4">
          Lorem ipsum is simply free text available dolor sit amet consectetur
          notted adipisicing elit sed do eiusmod tempor incididunt simply dolore
          magna.
        </p>
        <div className="flex flex-col gap-5"> 
          <div className="flex gap-4 cursor-default items-center group">
            <FiPhoneMissed className="bg-[#FFEE02] w-[60px] h-[60px] rounded p-3 transition-all duration-300 group-hover:bg-black group-hover:text-white" />
            <div>
              <h1 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#FFEE02]">
                Have any question?
              </h1>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-black">
                Free +92 (020)-9850
              </p>
            </div>
          </div>
          <div className="flex gap-4 cursor-default items-center group">
            <MdEmail className="bg-[#FFEE02] w-[60px] h-[60px] rounded p-3 transition-all duration-300 group-hover:bg-black group-hover:text-white" />
            <div>
              <h1 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#FFEE02]">
              Write email
              </h1>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-black">
              needhelp@company.com
              </p>
            </div>
          </div>
          <div className="flex gap-4 cursor-default items-center group">
            <BsCursor className="bg-[#FFEE02] w-[60px] h-[60px] rounded p-3 transition-all duration-300 group-hover:bg-black group-hover:text-white" />
            <div>
              <h1 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#FFEE02]">
              Visit anytime
              </h1>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-black">
              66 broklyn golden street. New York
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
