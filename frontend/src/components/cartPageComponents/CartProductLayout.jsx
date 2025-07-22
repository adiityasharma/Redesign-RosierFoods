import React from "react";

function CartProductLayout() {
  return (
    <div className=" h-full w-full">
      <div className="w-full md:flex  bg-gray-800 p-4 border-1 rounded border-gray-400">
        <div className="flex w-full h-25 md:h-40 gap-5 md:gap-10">
          <img
            className="w-25 h-25 md:w-40 md:h-40 rounded-xl"
            src="https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344"
            alt=""
          />
          <div className="flex flex-col w-full h-full justify-between">
            <div>
              <h1 className="font-bold text-xl md:text-3xl">A2 Gjee</h1>
              <h1 className="text-sm md:text-xl md:mt-3">Price: 222</h1>
            </div>
            <button className="px-2 py-1 bg-red-500 w-fit rounded-md font-semibold">
              Remove
            </button>
          </div>
        </div>

        <div className="mt-5 flex md:flex-col items-center justify-between md:justify-center md:gap-10 md:w-70">
          <div className="flex">
            <div className="py-2 px-4 rounded bg-green-600 mr-1">-</div>
            <div className="py-2 px-4 rounded bg-green-600 mr-1">1</div>
            <div className="py-2 px-4 rounded bg-green-600 mr-1">+</div>
          </div>
          <h1 className="font-bold md:text-2xl">
            Total <span>0</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartProductLayout;
