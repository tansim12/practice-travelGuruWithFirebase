import { Link, NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import useAuthContext from "../../useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "  underline font-extrabold"
              : isPending
              ? "text-black"
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/news"}
          className={({ isActive, isPending }) =>
            isActive ? " underline font-extrabold" : isPending ? "pending" : ""
          }
        >
          {" "}
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/destination"}
          className={({ isActive, isPending }) =>
            isActive
              ? "  underline font-extrabold"
              : isPending
              ? "text-black"
              : ""
          }
        >
          {" "}
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isActive ? " underline font-extrabold" : isPending ? "pending" : ""
          }
        >
          {" "}
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img
            className="w-24"
            src="https://i.ibb.co/WKmYmgr/logo.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end hover:cursor-pointer">
          {!user?.accessToken ? (
            <Link
              to={"/login"}
              className="btn btn-primary text-black font-extrabold"
            >
              Login
            </Link>
          ) : (
            <Avatar></Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
