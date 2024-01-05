import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";
import { HiTemplate } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex ">
      <div
        className={`${
          open ? "w-36 md:w-72" : "w-20"
        } bg-slate-900 duration-700 h-screen relative`}
      >
        <SlArrowRight
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute text-black cursor-pointer -right-3 top-10 rounded-full w-7 border-2 px-2 border-sky-600 bg-white text-2xl font-bold ${
            open && "rotate-180"
          }`}
        />
        <div className="text-white container py-24">
          <div className="flex gap-4 items-center font-bold ">
            <span className={`text-2xl cursor-pointer duration-500  `}>
              <SlBasketLoaded />
            </span>
            <Link
              className={`text-lg origin-left duration-500 ${
                !open && "scale-0"
              }`}
            >
              Add Items
            </Link>
          </div>
          <div className="flex gap-4 items-center font-bold mt-7">
            <span
              className={`text-2xl cursor-pointer duration-500 ${
                open && "rotate-[180deg]"
              }`}
            >
              <HiTemplate />
            </span>
            <Link
              className={`text-lg origin-left duration-500 ${
                !open && "scale-0"
              }`}
            >
              My Items
            </Link>
          </div>
          <div className="flex gap-4 items-center font-bold mt-7 border-t-2 pt-8">
            <span
              className={`text-2xl cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            >
              <FaHome />
            </span>
            <Link
              className={`text-lg origin-left duration-500 ${
                !open && "scale-0"
              }`}
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <Link to={"/"} className="flex items-center mx-auto">
        <button className="btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default Dashboard;
