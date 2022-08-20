import React, {useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navicon, setNavicon] = useState("fa-bars")
  const toggleNav = () => {
    let newicon=navicon==="fa-bars"?"fa-x":"fa-bars"
    setNavicon(newicon)
  }
  const location = useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <>
      <nav className="flex py-4 justify-between items-center w-[100%]">
        <button className="md:hidden px-8 text-gray-400 text-2xl cursor-pointer order-1" onClick={toggleNav}>
          <i className={`fa-solid ${navicon}`}></i>
        </button>
        <div
          className="flex flex-col md:flex-row md:space-x-3 items-center order-2 md:order-none"
        >
          <Link to="/" className={`px-8 md:pr-11 text-2xl cursor-pointer ${
              location.pathname === "/"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}>
            <i className="fa-solid fa-font-awesome"></i>
          </Link>
          <Link
            to="/start"
            className={` hidden md:block px-4  ${
              location.pathname === "/start"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Start
          </Link>
          <Link
            to="/search"
            className={` hidden md:block px-4 ${
              location.pathname === "/search"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
            to="/icons"
            className={` hidden md:block px-4 ${
              location.pathname === "/icons"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Icons
          </Link>
          <Link
            to="/docs"
            className={` hidden md:block px-4 ${
              location.pathname === "/docs"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Docs
          </Link>
          <Link
            to="/plans"
            className={` hidden md:block px-4 ${
              location.pathname === "/plans"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Plans
          </Link>
          <Link
            to="/support"
            className={` hidden md:block px-4 ${
              location.pathname === "/support"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Support
          </Link>
          <Link
            to="/blog"
            className={` hidden md:block px-4 ${
              location.pathname === "/blog"
                ? "text-[#183153] font-bold"
                : "text-gray-400 hover:text-blue-700"
            }`}
          >
            Blog
          </Link>
        </div>
        <button className="justify-end px-7 order-3 md:order-none text-xl text-gray-400">
          <i className="fa-regular fa-user hover:text-blue-700 cursor-pointer"></i>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
