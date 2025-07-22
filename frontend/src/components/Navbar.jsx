import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLess, FaRegUser } from "react-icons/fa";
import { IoBagHandle, IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { TextAnimation } from "../animations/TextAnimation.jsx";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  };

  // change nav color when scroll

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
      // console.log(window.scrollY);
    } else {
      setColor(false);
    }
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: -70 },
        }}
        animate={hidden ? "hidden" : "visible"}
        className={` fixed z-51 ${
          menu ? "text-black" : "text-white"
        } w-full h-18 px-4 md:px-8 lg:px-15 flex items-center justify-between transition-all ease-in duration-500 ${
          color ? "bg-black " : "backdrop-filter backdrop-blur-sm bg-opacity-50"
        }`}
      >
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img
              className="w-12"
              src="../../public/rosier_logo.png"
              alt="rosier-logo"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-1 lg:gap-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl flex">
              <TextAnimation childran={<IoSearch />} />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between lg:gap-5 lg:text-xl font-semibold capitalize md:gap-2 md:text-lg">
            <TextAnimation childran={<Link to={"/"}>Home</Link>} />
            <TextAnimation childran={<Link to={"/shop"}>Shop</Link>} />
            <TextAnimation childran={<Link to={"/ourstory"}>Our Story</Link>} />
            <TextAnimation childran={<Link to={"/blogs"}>Blogs</Link>} />
            <TextAnimation childran={<Link to={"/contact"}>Contact us</Link>} />
          </div>

          <div>
            <TextAnimation
              childran={
                <Link
                  to={"/cart"}
                  className="w-10 h-10 text-2xl rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IoBagHandle />
                </Link>
              }
            />
          </div>

          <div>
            <TextAnimation
              childran={
                <Link
                  to={"/login"}
                  className="hidden w-10 h-10 text-2xl rounded-full md:flex items-center justify-center cursor-pointer"
                >
                  <FaRegUser />
                </Link>
              }
            />
          </div>

          <div onClick={handleMenu} className="md:hidden lg:hidden">
            <h1 className="text-3xl font-bold">
              {menu ? <IoMdClose /> : <AiOutlineMenu />}
            </h1>
          </div>
        </div>
      </motion.div>

      {/* mobile menu options */}

      {menu && (
        <div className="fixed bg-white w-full h-screen top-0 left-0 z-50">
          <div className="absolute top-18 left-0 p-4 w-full">
            <div className="w-full flex flex-col">
              <p className="text-xl font-semibold text-gray-600">Discover</p>
              <NavLink
                to={"/"}
                className="text-4xl font-bold mt-2 border-b-2 border-gray-600"
              >
                Home
              </NavLink>
              <Link
                to={"/shop"}
                className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600 "
              >
                Shop
              </Link>
              <Link
                to={"/ourstory"}
                className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600"
              >
                Our Story
              </Link>
              <Link
                to={"/community"}
                className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600"
              >
                Community
              </Link>
              <Link
                to={"/contact"}
                className="text-4xl/snug font-bold mt-1 border-b-2 border-gray-600"
              >
                Contact Us
              </Link>
            </div>

            <div className="px-8 bg-black py-4 w-40 flex items-center justify-center rounded-full mt-4">
              <Link to={"/login"} className="text-3xl font-semibold text-white">
                Login
              </Link>
            </div>
          </div>

          <div className="absolute bottom-30 p-4 flex flex-col gap-4">
            <div className="">
              <p className="font-semibold text-gray-600 text-sm">Contact</p>
              <h1 className="font-extrabold text-xl">care@rosierfoods.com</h1>
            </div>
            <div>
              <p className="font-semibold text-gray-600 text-sm">
                Social Media
              </p>
              <h1 className="font-extrabold text-xl">Instagram</h1>
              <h1 className="font-extrabold text-xl">Twitter/X</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
