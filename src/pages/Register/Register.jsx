import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import {useForm} from "react-hook-form";
import {useState} from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const {createUser, user, setUser, updateUser} = useAuth() || {};
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {name, photoURL, email, password} = data;
    setError("");
    /* password authentication */
    if (password.length < 8) {
      setError("Password should be at least 8 characters");
      return;
    } else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password should have one uppercase, one lowercase, one digit & one special character"
      );
      return;
    }
    /* user create */
    createUser(email, password)
      .then((result) => {
        /* for server */
        const newUser = {name, photoURL, email, password};
        fetch("https://b9-a10-server-blush.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User create successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        /* update user */
        updateUser(name, photoURL).then(() => {
          console.log(result.user);
          setUser({...user, displayName: name, photoURL: photoURL});
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.massage);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mx-auto">
      <h1 className="text-2xl font-bold text-center">Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name Here"
            className="w-full px-4 py-3 rounded-md border"
            {...register("name", {required: true})}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block">
            PhotoURL
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="PhotoURL Here"
            className="w-full px-4 py-3 rounded-md border"
            {...register("photoURL", {required: true})}
          />
          {errors.photoURL && (
            <span className="text-red-500">PhotoURL is required</span>
          )}
        </div>
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
          Register
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-xm dark:text-gray-600">
          Register with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <SocialLogin></SocialLogin>
      <p className="text-xm text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link to="/login" className="text-red-500 ml-3 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
