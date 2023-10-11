import React from "react";
import FoodDetails from "../FoodDetails/FoodDetails";

const Foods = ({ foods }) => {
  console.log(foods);
  return (
    <div>
      {foods.map((item) => {
        return <FoodDetails key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Foods;
