import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import SingleProduct from "../components/shopPageComponents/SingleProduct";



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
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % posters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [posters.length]);

  const slideLeft = () => {
    const newCount = (count - 1 + posters.length) % posters.length;
    setCount(newCount);
  };

  const slideRight = () => {
    const newCount = (count + 1) % posters.length;
    setCount(newCount);
  };

  const slideOnClick = (index) => {
    setCount(index);
  };

  const slideLeftCategory = () => {
    
  }
  const slideRightCategory = () => {
    
  }
  
  const categories = [
    "A2 Ghee",
    "Better Bars",
    "Nut Butters",
    "Stone Pressed Oil",
    "Raw Honey",
    "Pooja Essentials",
    "Khapli Atta",
  ];

  const [hidePriceFilter, setHidePriceFilter] = useState(true)
  const [hideSizeFilter, setHideSizeFilter] = useState(true)

  // for mobile
  const [openFilter, setOpenFliter] = useState(false);


  return (
    <div>
      <div className="w-full">
        <div className="w-full pt-20 pb-8 lg:pt-0 lg:pb-0 lg:h-screen flex flex-col relative items-center justify-center bg-black transition-all ease-in-out duration-1000">
          <div className="relative  w-[90%] h-[80%] overflow-hidden flex items-center rounded-2xl select-none">
            <div className="absolute active:scale-110 text-3xl lg:text-4xl lg:opacity-0 lg:hover:opacity-100 transition-all duration-1000 ease-in-out w-full h-full">
              <motion.div
                onClick={slideLeft}
                whileHover={{
                  scale: 1.3,
                }}
                className="block absolute top-[50%] -translate-y-[50%] left-4 cursor-pointer"
              >
                <FaArrowAltCircleLeft />
              </motion.div>
              <motion.div
                onClick={slideRight}
                whileHover={{
                  scale: 1.3,
                }}
                className="block absolute top-[50%] -translate-y-[50%] right-4 cursor-pointer"
              >
                <FaArrowAltCircleRight />
              </motion.div>
            </div>
            <motion.div className="w-full overflow-hidden object-cover lg:h-auto ">
              <img
                className="w-full object-cover"
                src={`${posters[count].url}`}
                alt=""
              />
            </motion.div>
          </div>

          <div className="absolute bottom-2 lg:bottom-8 flex gap-3">
            {posters.map((item, index) => (
              <motion.div
                whileHover={{
                  y: -4,
                }}
                key={index}
                onClick={() => slideOnClick(index)}
                className={`bg-blue-400 w-4 h-4  rounded-full cursor-pointer ${
                  index == count ? "border-2 border-white " : ""
                }`}
              ></motion.div>
            ))}
          </div>
        </div>

        {/* topbar only for mobile */}

        <div className="lg:hidden w-full p-4 ">
          <div
            onClick={()=> setOpenFliter(!openFilter)}
            className="text-2xl font-semibold flex items-center justify-between bg-gray-100 px-5 py-4 rounded-2xl">
            <h1>Filter</h1>
            <div className={`transition-all ease-in ${openFilter? "rotate-180" : "rotate-0"}`}>
              <IoIosArrowDown />
            </div>
          </div>

          <div className={`w-full py-5 ${openFilter? "block": "hidden"}`}>
            {/* category */}
            <div>
              <h1 className="font-semibold text-2xl">Category:</h1>
              <div>
                {categories.map((category, index) => (
                  <h1 className="pl-5 mt-1 font-semibold" key={index}>
                    {category}
                  </h1>
                ))}
              </div>
            </div>

            {/* price */}
            <div>
              <h1 className="font-semibold text-2xl mt-4">Price:</h1>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="lessthen500"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="lessthen500">Less Than 500</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="500~1000"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="500~1000">500~1000</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="1000~2000"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="1000~2000">1000~2000</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="morethan2000"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="morethan2000">More Than 2000</label>
              </div>
            </div>

            {/* size */}
            <div>
              <h1 className="font-semibold text-2xl mt-4">Price:</h1>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="500G"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="500G">500G</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="1000G"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="1000G">1000G</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="1KG"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="1KG">1KG</label>
              </div>
              <div className="flex items-center gap-2 pl-5 mt-1 font-semibold">
                <input
                  type="checkbox"
                  id="2KG"
                  className="w-5 h-5 cursor-pointer select-none"
                />
                <label htmlFor="2KG">2KG</label>
              </div>
            </div>

          </div>
        </div>

        {/* category section */}
        <div className="w-full mb-5 p-4 lg:px-15 bg-white flex gap-5">
          {/* left side bar */}
          <motion.div className="w-1/4 hidden lg:block">
            {/* category */}
            <div className="w-full py-7 border-b-1">
              <h1 className="text-3xl font-semibold mb-3">Category</h1>
              <div className="pl-8 font-semibold">
                {categories.map((category, index) => {
                  return (
                    <motion.h1
                      whileHover={{
                        color: "black",
                        scale: 1.3,
                        x: 20,
                      }}
                      key={index}
                      className="mt-1 text-[#656565] cursor-pointer w-fit"
                    >
                      {category}
                    </motion.h1>
                  );
                })}
              </div>
            </div>
            {/* filter by */}
            <div className="w-full py-7 border-b-1 ">
              <h1 className="text-3xl font-semibold mb-2">Filter By:</h1>
              {/* price */}
              <div className="mb-2">
                <div
                  onClick={() => setHidePriceFilter(!hidePriceFilter)}
                  className="flex items-center justify-between w-[80%] px-5 rounded-xl hover:bg-gray-200 bg-gray-100 py-3 text-xl cursor-pointer"
                >
                  <h1>Price</h1>
                  <div
                    className={`transition-all ease-in duration-300 ${
                      hidePriceFilter ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
                <div
                  className={` w-full ${hidePriceFilter ? "hidden" : "block"}`}
                >
                  <motion.div className="flex items-center gap-2 pl-8 pt-3 ">
                    <input
                      type="checkbox"
                      id="lessThan500"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="lessThan500">Less than 500</label>
                  </motion.div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="between500to1000"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="between500to1000">500 ~ 1000</label>
                  </div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="between1000to2000"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="between1000to2000">1000 ~ 2000</label>
                  </div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="Morethan2000"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="Morethan2000">More than 2000</label>
                  </div>
                </div>
              </div>
              {/* size */}
              <div>
                <div
                  onClick={() => setHideSizeFilter(!hideSizeFilter)}
                  className="flex items-center justify-between w-[80%] px-5 rounded-xl hover:bg-gray-200 bg-gray-100 transition-all ease-in duration-300 py-3 text-xl cursor-pointer"
                >
                  <h1>Size</h1>
                  <div
                    className={`${
                      hideSizeFilter ? "rotate-0" : "rotate-180"
                    } transition-all ease-in duration-300`}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
                <div
                  className={` w-full ${hideSizeFilter ? "hidden" : "block"}`}
                >
                  <motion.div className="flex items-center gap-2 pl-8 pt-3 ">
                    <input
                      type="checkbox"
                      id="300G"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="300G">300G</label>
                  </motion.div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="500G"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="500G">500G</label>
                  </div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="1000G"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="1000G">1000G</label>
                  </div>
                  <div className="flex items-center gap-2 pl-8 pt-3">
                    <input
                      type="checkbox"
                      id="2000G"
                      className="w-5 h-5 cursor-pointer select-none"
                    />
                    <label htmlFor="2000G">2000G</label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* all products */}
          <div className="w-full lg:w-[75%] h-full">
            <div className="w-full py-7">
              <h1 className="text-3xl font-bold">Category</h1>
            </div>

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-1 lg:mt-4">
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
