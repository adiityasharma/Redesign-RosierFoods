import React from 'react'

function PopularRecipesCard() {
  return (
    <div className="w-full p-3 rounded-xl lg:rounded-lg bg-[#daff9095] flex flex-col gap-8 lg:gap-6">
      <div className="w-full overflow-hidden ">
        <img
          className="w-full h-90 lg:w-110 lg:h-100 rounded-xl lg:rounded-lg"
          src="https://www.rosierfoods.com/cdn/shop/articles/Untitled_design_37.png?v=1712254253"
          alt=""
        />
        <div className="flex items-center gap-2 mt-3">
          <h1 className="px-4 rounded-full py-1 font-semibold text-white uppercase bg-[#8BAA4E]">
            recipe
          </h1>
          <h1 className="px-4 rounded-full py-1 font-semibold text-white uppercase bg-[#8BAA4E]">
            20 min
          </h1>
        </div>
      </div>
      <div className="w-full lg:pb-3">
        <h1 className="text-xl font-bold uppercase tracking-tight lg:text-2xl">
          Breakfast Bowl
        </h1>
        <p className="font-medium mt-2 leading-5 lg:font-normal">
          Kickstart your morning with a Nutty Banana Breakfast Bowl that is not
          only delicious but also loaded with nutrients to fuel your day ahead.
        </p>
      </div>
    </div>
  );
}

export default PopularRecipesCard
