import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md';

function SingleProduct() {
  return (
    <div className="w-full h-120 lg:h-110 overflow-hidden rounded-2xl border-1 border-gray-300 shadow-lg">
      <div className="w-full h-[70%] overflow-hidden">
        <img
          className='hover:scale-110 transition-all ease-in duration-300 cursor-pointer'
          src="https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344"
          alt=""
        />
      </div>
      <div className="p-4 mt-3">
        <h1 className="text-xl font-semibold truncate">a2 Gjee</h1>
        <div className=" flex items-center justify-between mt-2">
          <div>
            <h1 className="text-gray-400 text-sm">price</h1>
            <h1 className="text-xl">2000</h1>
          </div>
          <div className="bg-blue-600 text-2xl p-3 rounded-2xl text-white cursor-pointer active:scale-90 ease-in transition-all">
            <MdAddShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct
