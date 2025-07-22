import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPlace } from "react-icons/md";




function ContactUs() {
  return (
    <div className="w-full flex p-4 pt-20 lg:px-15 h-screen bg-black text-white gap-2">
      <div className="w-1/2 h-full ">
        <div className="flex flex-col justify-center w-full h-full gap-10">
          <div className="">
            <h1 className="text-4xl font-bold uppercase mb-2">
              Get in touch with us
            </h1>
            <p className="text-lg w-120">
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

      <div className="w-1/2 h-full flex items-center justify-center ">
        <div className="flex flex-col justify-center items-start gap-5">
          <input
            className="px-5 py-2 outline-none border-1 rounded-xl text-xl w-100 "
            type="text"
            placeholder="Full Name"
          />
          <input
            className="px-5 py-2 outline-none border-1 rounded-xl text-xl w-100 "
            type="text"
            placeholder="Email"
          />
          <input
            className="px-5 py-2 outline-none border-1 rounded-xl text-xl w-100 "
            type="text"
            placeholder="Phone no."
          />
          <textarea
            className="w-full h-40 p-2 px-3 rounded-xl border-1 outline-0 "
            name=""
            id=""
            placeholder="Write Something..."
          ></textarea>
          <button className="w-full bg-green-400 text-black py-3 text-xl font-semibold rounded-xl">
            Ask For Call?
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs
