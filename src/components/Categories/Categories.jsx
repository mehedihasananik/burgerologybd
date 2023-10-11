import { useEffect, useState } from "react";
import Foods from "../Foods/Foods";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [filterFoods, setFilterFoods] = useState([]);

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
      setFilterFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFoods();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-x-5 py-5">
        {categories.map((item) => {
          return (
            <div className="" key={item.id}>
              <button className="uppercase font-bole text-xl">
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
      <Foods filterFoods={filterFoods} />
    </div>
  );
};

export default Categories;
