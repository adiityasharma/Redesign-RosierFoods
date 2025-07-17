import React from "react";
import SingleProduct from "./singleProduct";

function BestSalesSection() {
  return (
    <div className=" p-5 md:px-8 lg:px-30 bg-gradient-to-r from-slate-300 to-slate-500 ">
      <div className="w-full h-15 flex items-center justify-between mt-4">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Best Sellers
        </h1>
        <button className="px-5 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-indigo-700">
          View All
        </button>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
}

export default BestSalesSection;
