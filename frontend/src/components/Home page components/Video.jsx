import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TextBlurAnimation } from "../../animations/TextBlurAnimation";
import { motion } from "framer-motion"

const imgblurVariant = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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

      {/* text on video */}

      <div className="relative w-full h-full p-4 z-2 top-18 md:px-8 lg:px-15">
        <div className="w-full h-[40%] text-4xl/snug text-white font-extrabold ">
          <TextBlurAnimation childran={"Health Begins"} />
          <TextBlurAnimation childran={"In The Kitchen With Our"} />
          <div>
            <TextBlurAnimation childran={"A2 Ghee"} />
          </div>
        </div>
        <div className="flex justify-between items-end w-full h-[40%] text-base/snug text-white font-extrabold ">
          <div className="hidden md:flex flex-col justify-end gap-3 w-full h-full  ">
            <motion.div
              variants={imgblurVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5"
            >
              <img
                className="w-15"
                src="https://www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=150"
                alt=""
              />
              <div className="font-semibold text-xl">
                <TextBlurAnimation childran={"100% Clean"} />
              </div>
            </motion.div>
            <div className="flex items-center gap-5">
              <motion.img
                variants={imgblurVariant}
                initial="hidden"
                animate="visible"
                className="w-15"
                src="https://www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=150"
                alt=""
              />
              <div className="font-semibold text-xl">
                <TextBlurAnimation childran={"Farm Fresh"} />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <motion.img
                variants={imgblurVariant}
                initial="hidden"
                animate="visible"
                className="w-15"
                src="https://www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=150"
                alt=""
              />
              <div className="font-semibold text-xl">
                <TextBlurAnimation childran={"Made in Small Batches"} />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <motion.img
                variants={imgblurVariant}
                initial="hidden"
                animate="visible"
                className="w-15"
                src="https://www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=150"
                alt=""
              />
              <div className="font-semibold text-xl">
                <TextBlurAnimation childran={"Rooted in Trediton"} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-end gap-7 lg:ml-20">
            <div className="flex flex-col gap-2">
              <div className="text-3xl md:font-bold">
                <TextBlurAnimation childran={"Sweeten your life naturally"} />
              </div>
              <div className="text-lg md:font-bold">
                <TextBlurAnimation
                  childran={
                    "-- We are Reviving The Treditional Ways Of Old Bharat"
                  }
                />
              </div>
            </div>
            <motion.div
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}
              transition={{
                duration: 1.5,
                delay: 2.5,
              }}
              className="flex items-center justify-between px-1 py-1 w-70 rounded-full bg-white text-black">
              <h1 className="pl-3 font-semibold">Explore Our Products</h1>
              <button className="bg-black text-white text-2xl px-5 py-5 rounded-full -rotate-45">
                <FaArrowRightLong />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
