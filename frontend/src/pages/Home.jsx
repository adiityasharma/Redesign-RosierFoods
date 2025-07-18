import React from "react";
import Navbar from "../components/Home page/Navbar";
import Video from "../components/Home page/Video";
import BestSalesSection from "../components/Home page/BestSalesSection";
import TreditionCreation from "../components/Home page/TreditionCreation";
import RosierMatters from "../components/Home page/RosierMatters";
import RosierMattersDetails from "../components/Home page/RosierMattersDetails";
import ProductShowcase from "../components/Home page/ProductShowcase";
import LetsCookText from "../components/Home page/LetsCookText";
import PopularRecipes from "../components/Home page/PopularRecipes";

function Home() {
  return (
    <div>
      <Navbar />
      <Video />
      {/* <BestSalesSection/> */}

      <TreditionCreation />
      <RosierMatters />
      <RosierMattersDetails />
      <ProductShowcase />
      <LetsCookText />
      <PopularRecipes />
    </div>
  );
}

export default Home;
