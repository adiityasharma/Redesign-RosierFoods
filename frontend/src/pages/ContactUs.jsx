import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPlace } from "react-icons/md";

function ContactUs() {
  return (
    <div className="w-full flex md:flex-row flex-col p-4 pt-20 justify-center lg:px-15 lg:h-screen bg-black text-white gap-2">
      <div className="lg:w-1/2 w-full h-full ">
        <div className="flex flex-col justify-center  w-full h-full gap-10">
          <div className=" w-full">
            <h1 className="lg:text-4xl text-3xl font-bold uppercase mb-2 ">
              Get in touch with us
            </h1>
            <p className="lg:text-lg text-sm lg:w-120 w-100   ">
              Got any questions? We are here to help you. Chat to our customer
              team 24/7 and get your issues sorted effortlessly.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="bg-green-400 p-2 text-2xl overflow-hidden rounded-full">
                <FiPhoneCall />
              </div>
              <div className="font-semibold">
                <h1>Call us at</h1>
                <h1>+91-9711580581</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-red-400 p-2 text-2xl overflow-hidden rounded-full">
                <MdOutlineMailOutline />
              </div>
              <div className="font-semibold">
                <h1>Mail us at</h1>
                <h1>care@rosierfoods.com</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-blue-400 p-2 text-2xl overflow-hidden rounded-full">
                <MdPlace />
              </div>
              <div className="font-semibold">
                <h1>Reach out to us</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="w-80">
              First Floor 744, Shakti Khand 3, INDIRAPURAM, Ghaziabad, Uttar
              Pradesh, 201014
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 h-full flex items-center md:justify-center mt-5 sm:mt-0">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <input
            className="px-5 py-2 outline-none border-1 rounded-xl lg:text-xl lg:w-100 md:w-80 w-full "
            type="text"
            placeholder="Full Name"
          />
          <input
            className=" px-5 py-2 outline-none border-1 rounded-xl lg:text-xl lg:w-100 md:w-80 w-full "
            type="email"
            placeholder="Email"
          />
          <input
            className=" px-5 py-2 outline-none border-1 rounded-xl lg:text-xl lg:w-100 md:w-80 w-full"
            type="number"
            placeholder="Phone no."
          />
          <textarea
            className=" h-40 p-2 px-3 rounded-xl border-1 outline-0 lg:text-xl lg:w-100 md:w-80 w-full"
            name=""
            id=""
            placeholder="Write Something..."
          ></textarea>
          <button className="w-full bg-green-400 text-black py-3 text-xl font-semibold rounded-xl lg:w-100 md:w-80">
            Ask For Call?
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
