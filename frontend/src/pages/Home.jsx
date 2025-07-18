import React from "react";
import Navbar from "../components/Home page/Navbar";
import Video from "../components/Home page/Video";
import BestSalesSection from "../components/Home page/BestSalesSection";
import TreditionCreation from "../components/Home page/TreditionCreation";
import RosierMatters from "../components/Home page/RosierMatters";
import RosierMattersDetails from "../components/Home page/RosierMattersDetails";
import ProductShowcase from "../components/Home page/ProductShowcase";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Video />
      {/* <BestSalesSection/> */}
      <TreditionCreation />
      <RosierMatters />
      <RosierMattersDetails />
      <ProductShowcase />
    </div>
  );
}

export default Home;
