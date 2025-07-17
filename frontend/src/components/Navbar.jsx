import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandle, IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="fixed z-10 text-white w-full h-18 px-4 md:px-8 lg:px-15 flex items-center justify-between backdrop-filter backdrop-blur-sm bg-opacity-50">
        <div className="cursor-pointer">
          <img
            className="w-12"
            src="../../public/rosier_logo.png"
            alt="rosier-logo"
          />
        </div>

        <div className="flex items-center justify-between gap-1 lg:gap-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl flex">
              <IoSearch />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between lg:gap-5 lg:text-xl font-semibold capitalize md:gap-2 md:text-lg">
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>Our Story</h1>
            <h1>Community</h1>
            <h1>Contact us</h1>
          </div>

          <div>
            <button className="w-10 h-10 text-2xl rounded-full flex items-center justify-center cursor-pointer">
              <IoBagHandle />
            </button>
          </div>

          <div>
            <button className="hidden w-10 h-10 text-2xl rounded-full md:flex items-center justify-center cursor-pointer">
              <FaRegUser />
            </button>
          </div>

          <div className="md:hidden lg:hidden">
            <h1 className="text-3xl font-bold text-white">
              <AiOutlineMenu />
            </h1>
          </div>
        </div>
      </div>

      {/* mobile menu options */}

      <div className="fixed bg-white w-full h-screen top-0 left-0">
        <div className="absolute top-18 left-0 p-4 w-full">
          <div className="w-full ">
            <p className="text-xl font-semibold text-gray-600">Discover</p>
            <h1 className="text-4xl font-bold mt-2 border-b-2 border-gray-600">
              Home
            </h1>
            <h1 className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600 ">
              Shop
            </h1>
            <h1 className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600">
              Our Story
            </h1>
            <h1 className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600">
              Community
            </h1>
            <h1 className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600">
              Contact Us
            </h1>
          </div>

          <div className="px-8 bg-black py-4 w-40 flex items-center justify-center rounded-full mt-4">
            <h1 className="text-3xl font-semibold text-white">Login</h1>
          </div>
        </div>

        <div className="absolute bottom-30 p-4 flex flex-col gap-4">
          <div className="">
            <p className="font-semibold text-gray-600 text-sm">Contact</p>
            <h1 className="font-extrabold text-xl">care@rosierfoods.com</h1>
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-sm">Social Media</p>
            <h1 className="font-extrabold text-xl">Instagram</h1>
            <h1 className="font-extrabold text-xl">Twitter/X</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
