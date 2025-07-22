import React from "react";
import CartProductLayout from "../components/cartPageComponents/CartProductLayout";

function Cart() {
  return (
    <div className="w-full lg:flex lg:gap-5 p-4 lg:px-15 pt-20 bg-black text-white">
      <div className="w-full h-full lg:w-[75%] ">
        <div className="flex py-5 lg:py-7 border-b-1 border-gray-400 font-bold items-center justify-between text-3xl mb-5 lg:mb-7 lg:text-5xl">
          <h1>Shopping Cart</h1>
          <h1 className="text-xl">
            <span>0</span> Items
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <CartProductLayout />
          <CartProductLayout />
          <CartProductLayout />
          <CartProductLayout />
          <CartProductLayout />
        </div>
      </div>

      <div className="w-full lg:w-[25%] h-150 mt-5 lg:px-3 rounded-2xl lg:flex flex-col justify-between lg:mt-0 lg:bg-gray-800">
        <div className="text-3xl font-bold py-4 border-b-1 border-gray-400">
          <h1>Order Summary</h1>
        </div>
        <div>
          <div className="flex items-center justify-between py-2 mt-2">
            <h1 className="uppercase text-xl font-semibold">
              Items <span>2</span>
            </h1>
            <h1 className="font-semibold text-xl">$5454</h1>
          </div>
        </div>

        <div className="border-b-1 pb-5 border-gray-400">
          <div className="mt-5">
            <div>
              <h1 className="uppercase">Shipping</h1>
              <select
                name=""
                id=""
                className="mt-4 py-3 text-xl  outline-0 rounded-lg px-3 w-full appearance-none border-1"
              >
                <option className="text-black" value="">
                  Standard - Free
                </option>
                <option className="text-black" value="">
                  Fast - $12
                </option>
                <option className="text-black" value="">
                  On Date - $20
                </option>
              </select>
            </div>
            <div className="mt-4">
              <h1 className="uppercase">Promo Code</h1>
              <input
                className="mt-4 py-3 text-xl outline-0 rounded-lg px-3 w-full appearance-none border-1"
                type="text"
                placeholder="Enter your Code"
              />
            </div>
            <button className="py-3 bg-green-600 mt-4 px-5 text-2xl rounded-lg">
              Apply
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between font-bold">
            <h1 className="uppercase">totol cost</h1>
            <h1 className="uppercase">$54564</h1>
          </div>
          <button className="my-3 py-2 text-center bg-green-500 w-full text-2xl font-bold rounded-lg">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
