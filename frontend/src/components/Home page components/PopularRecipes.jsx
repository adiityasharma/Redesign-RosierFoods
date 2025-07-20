import React from "react";
import PopularRecipesCard from "./PopularRecipesCard";

function PopularRecipes() {
  return (
    <div className="p-4  md:px-8 lg:px-15 w-full">
      <h1 className="pb-5 text-2xl md:text-4xl font-bold uppercase">
        Popular Recipes
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PopularRecipesCard />
        <PopularRecipesCard />
        <PopularRecipesCard />
      </div>
    </div>
  );
}

export default PopularRecipes;
