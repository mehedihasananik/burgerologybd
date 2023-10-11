import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <img src={details.image_url} alt="" />
    </div>
  );
};

export default SingleFood;
