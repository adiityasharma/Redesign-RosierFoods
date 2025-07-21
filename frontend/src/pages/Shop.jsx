import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Shop() {
  const posters = [
    {
      url: "https://www.rosierfoods.com/cdn/shop/files/16_Web_Banner.jpg?v=1752432353&width=3840",
    },
    {
      url: "https://www.rosierfoods.com/cdn/shop/files/Web_Honey_Banner.jpg?v=1745585526&width=3840",
    },
    {
      url: "https://www.rosierfoods.com/cdn/shop/files/IMG_4248_ce7cc3da-1581-4ba5-a448-0e9fea95dfcc.jpg?v=1744870319&width=3840",
    },
    {
      url: "https://www.rosierfoods.com/cdn/shop/files/khapli_square_copy_b7253043-9cbb-440e-9d38-75d00696913f.jpg?v=1744865534&width=3840",
    },
  ];

  const [count, setCount] = useState(0);
  const [url, setUrl] = useState(posters[0].url);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % posters.length);
      setUrl(posters[(count + 1) % posters.length].url);
    }, 3000);

    return () => clearInterval(interval); 
  }, [count, posters.length]);

  const slideLeft = () => {
    const newCount = (count - 1 + posters.length) % posters.length;
    setCount(newCount);
    setUrl(posters[newCount].url);
  };

  const slideRight = () => {
    const newCount = (count + 1) % posters.length;
    setCount(newCount);
    setUrl(posters[newCount].url);
  };

  const slideOnClick = (index) => {
    setUrl(posters[index].url);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <div className="w-full h-screen flex flex-col relative items-center justify-center bg-black transition-all ease-in-out duration-1000">
          <div className="relative  w-[90%] h-[80%] overflow-hidden flex items-center rounded-2xl select-none">
            <div className="absolute opacity-0 hover:opacity-100 transition-all duration-1000 ease-in-out w-full h-full">
              <motion.div
                onClick={slideLeft}
                whileHover={{
                  scale: 1.3,
                }}
                className="absolute top-[50%] left-4 text-4xl cursor-pointer"
              >
                <FaArrowAltCircleLeft />
              </motion.div>
              <motion.div
                onClick={slideRight}
                whileHover={{
                  scale: 1.3,
                }}
                className="absolute top-[50%] right-4 text-4xl cursor-pointer"
              >
                <FaArrowAltCircleRight />
              </motion.div>
            </div>
            <motion.div className="w-full h-full ">
              <img src={`${url}`} alt="" />
            </motion.div>
          </div>

          <div className="absolute bottom-8 flex gap-3">
            {posters.map((item, index) => (
              <motion.div
                whileHover={{
                  y: -4,
                }}
                key={index}
                onClick={() => slideOnClick(index)}
                className="bg-white w-4 h-4 rounded-full cursor-pointer"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
