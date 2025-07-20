import React from "react";
import Navbar from "../components/Home page components/Navbar";
import Video from "../components/Home page components/Video";
import BestSalesSection from "../components/Home page components/BestSalesSection";
import TreditionCreation from "../components/Home page components/TreditionCreation";
import RosierMatters from "../components/Home page components/RosierMatters";
import RosierMattersDetails from "../components/Home page components/RosierMattersDetails";
import ProductShowcase from "../components/Home page components/ProductShowcase";
import LetsCookText from "../components/Home page components/LetsCookText";
import PopularRecipes from "../components/Home page components/PopularRecipes";

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
