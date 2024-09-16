import React from "react";
import { useAuth } from "../context/contextapi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLogin, logout, userType } = useAuth();

  return (
    <nav className="bg-white  md:h-[14vh] shadow-md sticky top-0 z-10 w-[100vw] ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img
          src="/logo.png" // Path to the image in the public directory
          alt="Logo"
          width={120}
          height={50}
          className="h-auto"
        />
        <div className="flex space-x-4">
          {/* Example links */}
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-500"
            aria-label="Home"
          >
            Home
          </NavLink>
          {userType == "admin" && (
            <NavLink
              to="/adminDashboard"
              className="text-gray-700 hover:text-blue-500"
              aria-label="Home"
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-500"
            aria-label="About Us"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-500"
            aria-label="Contact Us"
          >
            Contact
          </NavLink>
        </div>
        {isLogin ? (
          <div className="border p-2 px-3 rounded bg-slate-400">
            <NavLink to={"/logout"}>
              <button type="button">Logout</button>
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="border p-2 px-3 rounded bg-slate-400">
              <NavLink to={"/login"}>Login </NavLink>
            </div>
            <div className="border p-2 px-3 rounded bg-slate-400">
              <NavLink to={"/register"}>Sign up</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
