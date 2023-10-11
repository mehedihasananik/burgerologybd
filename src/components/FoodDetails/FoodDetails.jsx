import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FoodDetails = ({ item }) => {
  const { image_url, title, details, _id } = item;

  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image_url} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{details}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/foods/${_id}`}>Read More</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FoodDetails;
