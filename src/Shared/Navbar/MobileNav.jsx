import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = ({ show, toggle }) => {
  return (
    <div>
      <div
        style={
          show
            ? { clipPath: "circle(200% at 100% 0" }
            : { clipPath: "circle(0% at 100% 0)" }
        }
        className={`lg:hidden fixed bg-slate-800 origin-top-right text-white w-[250px] h-screen top-0 right-0 z-50 px-6 transition-all duration-300 ease-in`}
      >
        <div
          onClick={toggle}
          className="text-4xl text-sky-700 hover:text-pink-600 absolute top-1 right-0 p-5"
        >
          <IoCloseSharp />
        </div>
        <ul className="pt-16 flex flex-col gap-3">
          <li>
            <Link to="/" onClick={toggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/allProduct" onClick={toggle}>
              All Toys
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={toggle}>
              Blog
            </Link>
          </li>
          <Link to="/login" className="btn-primary mt-4" onClick={toggle}>
            Login
          </Link>
        </ul>
      </div>
      {/* overlay */}
      <div
        onClick={toggle}
        className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-[rgba(0,0,0,.5)] transition-all duration-300 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default MobileNav;
