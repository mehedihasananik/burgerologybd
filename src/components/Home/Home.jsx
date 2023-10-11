import React from "react";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";

const Home = () => {
  const foods = useLoaderData();

  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
