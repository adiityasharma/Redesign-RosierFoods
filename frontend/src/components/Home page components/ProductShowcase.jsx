import React from 'react'

function ProductShowcase() {
  return (
    <div className="relative w-full h-170 lg:h-300 bg-amber-800 ">
      <img
        className="w-full h-170 lg:h-300 object-cover opacity-75"
        src="https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1749285565"
        alt=""
      />

      <div className="absolute bottom-0 p-4 lg:px-15">
        <div className="text-[45px] leading-11 font-extrabold uppercase text-[#ffa528] mb-2 lg:text-8xl lg:leading-23 sm:text-6xl sm:leading-15">
          <h1>from farm</h1>
          <h1>to family</h1>
          <h1>rosier a2 ghee</h1>
          <h1>& honey</h1>
        </div>
        <div className="py-5 bg-amber-500 w-50 text-center cursor-pointer rounded-full my-5 lg:w-35 lg:py-3 sm:w-35 sm:py-3">
          <h1 className="text-xl font-bold uppercase sm:text-sm lg:text-sm">
            buy now
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase
