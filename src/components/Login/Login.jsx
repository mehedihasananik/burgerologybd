import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const { loginWithUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const providerGoogle = new GoogleAuthProvider();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/blogs";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithUser(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        console.log(user);
        toast.success("Logged in successfully");
        navigate(from, { replace: true });
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
            <Input name="email" size="lg" label="Email" />
            <Input name="password" type="password" size="lg" label="Password" />
          </div>
          <div>{error}</div>

          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link
              to="/register"
              type="submit"
              className="font-medium text-gray-900"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      <div>
        <button onClick={handleLoginGoogle}>With Google</button>
      </div>
    </div>
  );
};

export default Login;
