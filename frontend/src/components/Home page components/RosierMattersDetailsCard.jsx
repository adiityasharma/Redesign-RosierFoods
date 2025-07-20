import React from "react";

function RosierMattersDetailsCard() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-20 lg:gap-30 border-b-1 border-gray-500 mt-5 p-4 md:p-8 lg:border-b-0 lg:border-r-1 uppercase text-[#402011]">
      <div>
        <div className="flex items-center justify-start gap-4">
          <div className="w-12  rounded-full bg-[#402011]">
            <img
              className="p-2"
              src="https://cdn.prod.website-files.com/6840f0a74c78174aee5d5810/684349fdb3e8c3c6f0e29518_freshness_icon.avif"
              alt=""
            />
          </div>
          <h1 className="text-xl font-bold">Why People love Rosier?</h1>
        </div>

        <div className=" mt-7">
          <h1 className=" text-[13px] font-semibold">
            Real user reviews celebrate the purity and taste —"Real People, Real
            Reviews! Experience the love for Rosier A2 Gir Cow Ghee". Messaging
            like “Made from curd, not cream” emphasizes transparency and quality
          </h1>
        </div>
      </div>
      <div className="w-full ">
        <img
          className="rounded-xl"
          src="https://www.rosierfoods.com/cdn/shop/articles/Untitled_design-32.png?v=1712258009&width=1100"
          alt=""
        />
      </div>
    </div>
  );
}

export default RosierMattersDetailsCard;
