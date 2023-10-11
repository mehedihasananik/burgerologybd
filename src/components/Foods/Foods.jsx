/* eslint-disable react/prop-types */
import FoodDetails from "../utiles/Fooddetails";

const Foods = ({ foods }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
        {foods.map((item) => {
          return <FoodDetails key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Foods;
