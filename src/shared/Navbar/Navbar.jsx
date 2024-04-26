import {Link, NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut} = useAuth();

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
          to="/allTouristsSpot,"
        >
          All Tourists Spot
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Rana Tourism Economics</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="hidden md:flex lg:flex">
            <img className="size-10 rounded-full mr-2" src={user?.photoURL} />
            <p className="mx-2 p-2 rounded">{user?.displayName}</p>
            <p className="mx-2 p-2 rounded">{user?.email}</p>
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
      </div>
    </div>
  );
};

export default Navbar;