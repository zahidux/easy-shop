import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNav from "./MobileNav";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../Provider/AuthProvider";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <nav className="py-1 md:py-3 shadow-lg w-full z-50 transition-all duration-300 ease-in-out bg-white">
      <div className="container">
        <div className=" flex justify-between items-center">
          {/* logo */}
          <Link to={"/"}>
            <img className="w-[300px]" src={logo} alt="easy shop" />
          </Link>
          {/* bar icon */}
          <button
            className="inline-block md:hidden "
            onClick={() => setShow(!show)}
          >
            <HiBars3BottomRight
              className="text-sky-900 hover:text-pink-700 duration-300"
              size={35}
            />
          </button>
          <ul className="hidden  md:flex gap-8 items-center text-lg font-semibold">
            <li>
              <ActiveLink to={"/"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/allProduct"}>All Product</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/blog"}>Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/dashboard"}>Dashboard</ActiveLink>
            </li>
          </ul>
          <ul className="hidden md:flex items-center gap-7">
            <li className="text-sky-500 text-2xl">
              <FaCartShopping />
            </li>
            {user ? (
              <UserProfile user={user}></UserProfile>
            ) : (
              <li>
                <Link to={"/login"}>
                  <button className="btn-primary">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* responsive nav */}
        <MobileNav show={show} toggle={() => setShow(!show)} />
      </div>
    </nav>
  );
};

export default Navbar;
