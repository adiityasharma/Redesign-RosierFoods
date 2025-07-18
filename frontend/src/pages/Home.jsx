import React from 'react'
import Navbar from '../components/Home page/Navbar'
import Video from '../components/Home page/Video'
import BestSalesSection from '../components/Home page/BestSalesSection'
import TreditionCreation from '../components/Home page/TreditionCreation';
import RosierMatters from '../components/Home page/RosierMatters';

function Home() {
  return (
    <div>
      <Navbar />
      <Video />
      {/* <BestSalesSection/> */}
      <TreditionCreation />
      <RosierMatters/>
    </div>
  );
}

export default Home
