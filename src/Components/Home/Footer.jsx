import React from "react";
import logo from "../../assets/images/brandLogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 gap-8 bg-white">
      <div className="flex w-[70%] justify-around">
        <div className="w-[17rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-wrap gap-12 w-[50%] justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">DETAILS</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Request an offer</p>
              <p className="text-xs cursor-pointer hover:underline">Pricing</p>
              <p className="text-xs cursor-pointer hover:underline">Reviews</p>
              <p className="text-xs cursor-pointer hover:underline">Stories</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">RECIPES</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Quick & Easy</p>
              <p className="text-xs cursor-pointer hover:underline">Buying Guides</p>
              <p className="text-xs cursor-pointer hover:underline">Holiday & Seasons</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">ABOUT</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Company</p>
              <p className="text-xs cursor-pointer hover:underline">How it works</p>
              <p className="text-xs cursor-pointer hover:underline">Contact</p>
              <p className="text-xs cursor-pointer hover:underline">Investors</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">EXTRA</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Advertise</p>
              <p className="text-xs cursor-pointer hover:underline">Career</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">TERMS & PRIVACY</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Trust & Saftery</p>
              <p className="text-xs cursor-pointer hover:underline">Terms of Service</p>
              <p className="text-xs cursor-pointer hover:underline">Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold text-black">RESOURCES</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Blog</p>
              <p className="text-xs cursor-pointer hover:underline">Guides</p>
              <p className="text-xs cursor-pointer hover:underline">FAQ</p>
              <p className="text-xs cursor-pointer hover:underline">Help Center</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-24 justify-between border-t-2 w-[80%] pt-4 font-medium text-gray-500">
        <p className="text-xs cursor-pointer hover:underline">©2024 Estelle Darcy. All rights Reserved</p>
        <div className="flex items-center gap-8">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
