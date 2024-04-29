import {Link, NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {useEffect, useState} from "react";

const Navbar = () => {
  const {user, logOut} = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleTheme = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut().then(Swal.fire("User Deleted Successfully!")).catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/addTouristsSpot"
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/allTouristsSpot"
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/myList"
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Rana Tourism Economics
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="hidden md:flex lg:flex">
            <a id="my-anchor-element-id">
              <img className="size-10 rounded-full mr-2" src={user?.photoURL} />
            </a>
            <Tooltip
              anchorSelect="#my-anchor-element-id"
              content={user?.displayName}
              data-tooltip-place="top"
            />
            <button
              onClick={handleLogOut}
              className="bg-red-500 px-2 py-1 rounded-lg text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
              Login
            </button>
          </Link>
        )}
        {/* theme */}
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggleTheme}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
