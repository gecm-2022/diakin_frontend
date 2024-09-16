import React, { useState } from "react";
import { useAuth } from "../context/contextapi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLogin, logout, userType } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-white  md:h-[14vh] shadow-md sticky top-0 z-10 w-[100vw]  flex">
      <div className="container mx-auto flex items-center justify-between  p-4">
        <div className="md:hidden mx-2 ">
          <img
            className="invert  cursor-pointer mx-1 m-auto flex"
            src={menuOpen ? "/img/close.svg" : "/img/hamburger.svg"}
            onClick={toggleMenu}
            alt="menu"
          />
        </div>
        <img
          src="/logo.png" // Path to the image in the public directory
          alt="Logo"
          width={120}
          height={50}
          className="h-auto mx-12 "
        />
        <div
          className={`humbar md:gap-5 md:justify-center fixed  z-50 top-[15vh] text-xl  md:top-0 right-0 h-full w-2/3  text-white transform ${
            menuOpen
              ? "translate-x-0 flex flex-col bg-[#0a131d] p-5 gap-6"
              : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:transform-none md:flex md:items-center`}
        >
          
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
          <div className="md:ml-[250px]">
            {isLogin ? (
              <div className="border p-2 md:px-3 rounded bg-slate-400">
                <NavLink to={"/logout"}>
                  <button type="button">Logout</button>
                </NavLink>
              </div>
            ) : (
              <div className="flex gap-2 flex-col md:flex-row">
                <div className="border p-2 md:px-3 rounded bg-slate-400">
                  <NavLink to={"/login"}>Login </NavLink>
                </div>
                <div className="border p-2 md:px-3 rounded bg-slate-400">
                  <NavLink to={"/register"}>Sign up</NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
