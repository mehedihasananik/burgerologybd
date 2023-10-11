import { useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SingleItem = () => {
  const { image_url, title, _id, details } = useLoaderData();
  console.log(_id);

  return (
    <div className="flex justify-center py-10">
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
        </Card>
      </div>
    </div>
  );
};

export default SingleItem;
