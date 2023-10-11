import React from "react";
import { useLoaderData } from "react-router-dom";
import FoodDetails from "../FoodDetails/FoodDetails";

const SingleCategory = () => {
  const categories = useLoaderData();

  return (
    <div className="grid grid-cols-4">
      {categories.map((item) => {
        return <FoodDetails key={item._id} item={item} />;
      })}
    </div>
  );
};

export default SingleCategory;
