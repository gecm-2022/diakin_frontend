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
      <div
        className={`container mx-auto flex items-center justify-between  p-4  `}
      >
        <NavLink to="/">
          <img
            src="/logo.png" // Path to the image in the public directory
            alt="Logo"
            width={120}
            height={50}
            className="h-auto mx-12 "
          />
        </NavLink>
        <div
          className={`humbar md:gap-5 md:justify-center fixed  z-50 top-[13vh] text-xl  md:top-0 right-0 h-full w-2/3  text-white transform ${
            menuOpen
              ? "translate-x-0 flex flex-col md:flex-row md:bg-white bg-[#0a131d] p-5 gap-6"
              : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:transform-none md:flex md:items-center`}
        >
          {/* Example links */}
          <NavLink
            to="/"
            className="md:text-gray-700 hover:text-blue-500"
            aria-label="Home"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          {userType == "admin" && (
            <NavLink
              to="/adminDashboard"
              className="md:text-gray-700 hover:text-blue-500"
              aria-label="Home"
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            to="/about"
            className="md:text-gray-700 hover:text-blue-500"
            aria-label="About Us"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="md:text-gray-700 hover:text-blue-500"
            aria-label="Contact Us"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <div className="md:ml-[250px]">
            {isLogin ? (
              <NavLink to={"/logout"} onClick={toggleMenu}>
                <div className="border p-2 md:px-3 rounded bg-slate-400">
                  <button type="button">Logout</button>
                </div>
              </NavLink>
            ) : (
              <div className="flex gap-2 flex-col md:flex-row">
                <NavLink to={"/login"} onClick={toggleMenu}>
                  <div className="border p-2 md:px-3 rounded bg-slate-400">
                    Login{" "}
                  </div>
                </NavLink>
                <NavLink to={"/register"} onClick={toggleMenu}>
                  <div className="border p-2 md:px-3 rounded bg-slate-400">
                    Sign up
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden mx-2 ">
          <img
            className="invert  cursor-pointer mx-1 m-auto flex"
            src={menuOpen ? "/img/close.svg" : "/img/hamburger.svg"}
            onClick={toggleMenu}
            alt="menu"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
