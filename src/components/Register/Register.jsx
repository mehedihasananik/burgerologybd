import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function Register() {
  const { creatingUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/(?=.*[0-9])/.test(password)) {
      setError("set at least one number");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("at least one uppercase");
      return;
    } else if (password.length < 6) {
      setError("must be 6 charcters");
      return;
    }

    creatingUser(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        console.log(user);
        toast.success("User is created");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      {" "}
      <Card color="transparent">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input name="name" size="lg" label="Name" />
            <Input name="email" size="lg" label="Email" />
            <Input name="password" type="password" size="lg" label="Password" />
          </div>
          <div>{error}</div>
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            disabled={!isChecked}
            type="submit"
            className="mt-6"
            fullWidth
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
