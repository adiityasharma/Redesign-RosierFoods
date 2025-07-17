import React from 'react'
import Navbar from '../components/Home page/Navbar'
import Video from '../components/Home page/Video'
import BestSalesSection from '../components/Home page/BestSalesSection'
import TreditionCreation from '../components/Home page/TreditionCreation';

function Home() {
  return (
    <div>
      <Navbar />
      <Video />
      {/* <BestSalesSection/> */}
      <TreditionCreation/>
    </div>
  );
}

export default Home
