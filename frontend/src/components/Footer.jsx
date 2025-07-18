import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full tracking-tight flex flex-col justify-between bg-black text-white">
      <div className="px-4 flex flex-col gap-20 lg:gap-20 lg:px-15">
        <div className="flex flex-col">
          {/* email notification */}
          <div className="mt-8 uppercase leading-4 font-semibold text-[12px] lg:mt-20 lg:text-sm lg:leading-5">
            <h1>Be the first to know</h1>
            <h1>We’ll send you only what matters — no noise, no spam.</h1>
            <div className="mt-5 flex gap-2 lg:w-120">
              <input
                className="border-1 text-[#ffffff] outline-none px-4 w-full py-3 text-lg rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black transition-all ease-in-out duration-1000"
                type="email"
                placeholder="Email"
              />
              <button className="py-3 px-4 text-lg border-1 bg-[#000] text-white rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-1000 cursor-pointer active:scale-60 select-none">
                Ok
              </button>
            </div>
          </div>
        </div>
        {/* links */}

        <div className="w-full flex flex-col justify-between gap-8 font-bold ">
          {/*all links */}
          <div className="w-full flex items-start justify-between leading-5 ">
            <div className="text-[17px] uppercase lg:text-xl lg:leading-6">
              <h1>home</h1>
              <h1>shop</h1>
              <h1>our story</h1>
              <h1>community</h1>
              <h1>contact us</h1>
            </div>
            <div className="text-[17px] lg:w-[70%] uppercase lg:text-xl lg:leading-6">
              <h1>where to buy</h1>
              <h1>Contact Information</h1>
            </div>
          </div>
          {/* policy */}
          <div className="flex items-center justify-between text-[17px] uppercase leading-5 lg:text-xl lg:leading-6">
            <div>
              <h1>sales policy</h1>
              <h1>privacy policy</h1>
            </div>
            <div className="lg:w-[71%] cursor-pointer ">
              <img
                className="w-15"
                src="../../../public/2227-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 w-full h-20 lg:h-15 lg:px-15 lg:mt-10 flex items-center justify-between uppercase border-t-2 border-[#b5b5b5] text-[12px] font-bold leading-4 text-[#565656]">
        <div>
          <h1>2025@rosier foods</h1>
          <h1>all rights reserved</h1>
        </div>
        <div className="text-end mt-4">
          <h1>Website by Aditya Sharma</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
