import React from 'react'

function Story({story}) {
  return (
    <div className="flex-col lg:flex-row w-full lg:h-screen flex items-center justify-center gap-2 lg:px-15 p-4">
      <div className="w-full lg:w-1/2 h-full uppercase flex items-center justify-center">
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold mb-5">
            {story?.title}
          </h1>
          <p className="font-semibold lg:pr-20 text-sm lg:text-lg">
            {story?.description}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center">
        <div className="lg:w-130 lg:h-130 object-cover rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={story?.imageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Story
