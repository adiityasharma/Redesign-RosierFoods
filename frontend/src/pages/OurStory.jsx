import { motion } from "framer-motion";
import React from "react";
import Story from "../components/ourStoryComponents/Story";

function OurStory() {
  const stories = [
    {
      title: "Our Mission",
      description:
        "We at Rosier believe in reviving the old traditional ways of Bharat. In our daily life routine, we sometimes forget to take stock of what we are eating and how we are eating. Thechoices we make with respect to food which affects us and our entire family. So, we must consciously invest energy in finding right kinds of foods for us and our family to help build their immunity.",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/files/78d4352e-c58a-4169-956d-bc09beaec595.jpg?v=1743061791&width=750",
    },
    {
      title: "The Vision Behind Rosier",
      description:
        "Rosier Foods was founded by Gaurav Taneja, widely known as Flying Beast, with a deep passion for health, wellness, and tradition. After stepping away from aviation, Gaurav envisioned something bigger—a return to roots. Rosier Foods is his tribute to India’s ancientfarming wisdom and holistic nutrition, crafted for modern families seeking authenticity and purity.",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/files/cow_d18d9ba1-94eb-47ac-82ca-e1739e795860.png?v=1743061311&width=750",
    },
    {
      title: "Crafted the Traditional Way",
      description:
        "At Rosier, we do things differently. Every drop of ghee we produce follows the ancient Vedic Bilona method—a slow, labor-intensive process that honors both science and tradition.Milk is sourced fresh from our own Gir cows It’s boiled, cooled, set into curd, and hand-churned in clay potsThe resulting butter is then simmered slowly to create pure, nutrient-rich A2 ghee This method preserves natural enzymes, aroma, and flavor—making our ghee a staple not just in kitchens, but in wellness routines too. No shortcuts, no compromise—just honest food made the way our ancestors intended.",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/pexels-A_nil-1391249.jpg?v=1712255095&width=1500",
    },
    {
      title: "More Than a Product—A Movement",
      description:
        "Rosier Foods officially launched on Chaitra Navratri, symbolizing a new beginning aligned with nature and tradition. Since then, we’ve grown rapidly—thanks to a community that values trust, purity, and transparency. At Rosier, we don’t just sell ghee—we share a philosophy. A belief in clean eating, responsible farming, and going back to what truly matters: real food from real people.",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/Untitled_design-26.png?v=1749659476",
    },
  ];

  return (
    <div className="w-full bg-amber-100">
      <div className="relative w-full h-screen  flex items-center justify-center overflow-hidden">
        <h1 className="uppercase text-9xl font-bold">Our Story</h1>

        <motion.div
          initial={{
            x: -200,
            rotate: 0,
          }}
          animate={{
            x: 80,
            rotate: 15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="absolute left-20 scale-120 rotate-12"
        >
          <img src="../../public/ghee.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            rotate: 0,
          }}
          animate={{
            x: -80,
            rotate: -15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="absolute right-20 scale-70 -rotate-12"
        >
          <img src="../../public/honey.png" alt="" />
        </motion.div>
      </div>

      <div className="w-full h-screen uppercase flex flex-col items-center justify-center text-9xl font-bold text-white bg-red-600">
        <h1>We are reviving</h1>
        <h1>the traditional</h1>
        <h1>ways of old</h1>
        <h1>Bharat</h1>
      </div>

      {stories.map((story, index) => (
        <Story story={story} key={index} />
      ))}
    </div>
  );
}

export default OurStory;
