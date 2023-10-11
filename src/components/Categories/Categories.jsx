import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Foods from "../Foods/Foods";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:5000/foods");
      const data = await response.json();
      setFoods(data);
      setFilteredFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFoods();
  }, []);

  const filterCategory = (id) => {
    if (parseInt(id) === 0) {
      console.log(id);
      // If "All" button is clicked, show all products
      setFilteredFoods(foods);
    } else {
      const categoryItem = foods.filter((item) => item.category_id === id);
      setFilteredFoods(categoryItem);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-10 space-x-7">
        {categories.map((item) => {
          return (
            <button
              onClick={() => filterCategory(item.id)}
              className="text-xl font-bold"
              key={item.id}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <Foods foods={filteredFoods} />
    </div>
  );
};

export default Categories;
