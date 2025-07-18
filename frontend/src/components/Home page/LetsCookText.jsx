import React from 'react'

function LetsCookText() {
  return (
    <div className="w-full py-30  md:h-screen flex flex-col items-center justify-center select-none">
      <div className="w-35">
        <img src="../../../public/24143-removebg-preview.png" alt="" />
      </div>
      <div className="text-7xl sm:text-8xl md:text-9xl md:font-bold font-extrabold uppercase">
        <h1>Let's Get</h1>
        <h1>cooking</h1>
      </div>
      <div className="py-4 px-7 mt-5 lg:mt-6 rounded-full bg-[#8BAA4E] ">
        <button className="cursor-pointer text-lg uppercase font-bold text-white">
          all recipes
        </button>
      </div>
    </div>
  );
}
export default LetsCookText
