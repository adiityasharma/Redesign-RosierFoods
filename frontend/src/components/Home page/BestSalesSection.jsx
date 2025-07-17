import React from "react";

function BestSalesSection() {
  return (
    <div className="w-full  p-4 md:px-8 lg:px-15 bg-[#F1F1F1]">
      <div className="w-full h-15 flex items-center justify-between mt-4">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Best Sellers
        </h1>
        <button className="px-5 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-indigo-700">
          View All
        </button>
      </div>

      <div className="w-full h-150 mt-5 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <h1>Gir Cow A2 ghee - Made From Curd</h1>
        <div>
          <img src="" alt="" />
        </div>
        <h1>Buy</h1>
      </div>
    </div>
  );
}

export default BestSalesSection;
