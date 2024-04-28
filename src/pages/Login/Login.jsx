import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import {useState} from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const {signIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    setError("");
    /* signIn user */
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError("email and password does not matched!");
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">Please Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Here"
            className="w-full px-4 py-3 rounded-md border"
            {...register("email", {required: true})}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border"
            {...register("password", {required: true})}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-orange-500 text-xl">
          Login
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-xm dark:text-gray-600">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <SocialLogin></SocialLogin>
      <p className="text-xm text-center sm:px-6 dark:text-gray-600">
        Don`t have an account?
        <Link to="/register" className="text-red-500 ml-3 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
