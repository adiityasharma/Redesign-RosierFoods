import React from 'react'
import RosierMattersDetailsCard from './RosierMattersDetailsCard';

function RosierMattersDetails() {
  return (
    <div className='w-full grid grid-cols-1 px-4 md:py-4 lg:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2 lg:gap-0'>
      <RosierMattersDetailsCard />
      <RosierMattersDetailsCard />
      <RosierMattersDetailsCard />
    </div>
  );
}

export default RosierMattersDetails
