import React from 'react'

function Story({story}) {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-2 px-15">
      <div className="w-1/2 h-full uppercase flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold mb-5">{story?.title}</h1>
          <p className="font-semibold pr-20 text-lg">{story?.description}</p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-130 h-130 object-cover rounded-2xl overflow-hidden">
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
