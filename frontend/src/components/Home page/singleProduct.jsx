import React from 'react'

function SingleProduct() {
  return (
    <div className="w-full  mt-5 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white">
      <h1 className="px-5 py-4 text-2xl text-center font-semibold">
        Gir Cow A2 ghee - Made From Curd
      </h1>
      <div>
        <img src="../../../public/ghee.jpg" alt="" />
      </div>
      <div className="w-full text-center rounded-b-lg py-4 text-2xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        Buy
      </div>
    </div>
  );
}

export default SingleProduct
