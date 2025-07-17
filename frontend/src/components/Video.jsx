import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Video() {
  return (
    <div className="relative w-full h-screen overflow-hidden top-0 left-0 -z-10 ">
      <video
        muted
        autoPlay
        loop
        src="../../public/rosier-farm-video.mov"
        className="absolute h-screen w-full left-0 top-0 -z-2 object-cover"
      ></video>

      <div className="video-overlay"></div>

      <div className="relative w-full h-full p-4 z-2 top-18 ">
        <div className="w-full h-[40%] text-4xl/snug text-white font-extrabold ">
          <h1>Health Begins</h1>
          <h1>In The Kitchen With</h1>
          <h1>
            Our <span>A2 Ghee</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end w-full h-[40%] text-base/snug text-white font-extrabold ">
          <div className="hidden"></div>
          <div className="w-full flex flex-col justify-end gap-5">
            <h1 className="text-3xl">Sweeten your life naturally </h1>
            <h1 className="text-lg">
              -- We are Reviving The Treditional Ways Of Old Bharat
            </h1>
            <div className="flex items-center justify-between px-1 py-1 w-70 rounded-full bg-white text-black">
              <h1 className="pl-3 font-semibold" >Explore Our Products</h1>
              <button className="bg-black text-white text-2xl px-5 py-5 rounded-full -rotate-45">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
