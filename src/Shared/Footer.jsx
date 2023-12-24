import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" bg-slate-900 py-16 ">
      <div className="container ">
        <div className="text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="w-full  md:border-r border-[#3D3D3D] pr-12">
            <img className="w-[200px]" src={logo} alt="easy shop" />
            <p className="my-5 hover:text-sky-400">
              Easy Shop is a vibrant and innovative brand that brings a world of
              any product to life.
            </p>
            <div className="flex gap-5 text-xl text-white">
              <Link to="https://web.facebook.com/">
                <FaSquareFacebook />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="md:flex gap-28 md:ml-12">
            <div>
              <p className="text-xl text-white font-semibold mb-4 md:mb-7">
                Navigation
              </p>
              <div>
                <Link to={"/"}>
                  <p className="hover:text-sky-400">Home</p>
                </Link>
                <Link to={"/allProduct"}>
                  <p className="my-2 md:my-4 hover:text-sky-400">All Toys</p>
                </Link>
                <Link to={"/blog"}>
                  <p className="hover:text-sky-400">Blog</p>
                </Link>
              </div>
            </div>
            <div className="mt-7 md:mt-0">
              <p className="text-xl text-white font-semibold mb-2 md:mb-7">
                Information
              </p>
              <Link>
                <p className="hover:text-sky-400">Secure Payment</p>
              </Link>
              <Link>
                <p className="my-2 md:my-4 hover:text-sky-400">Delivery</p>
              </Link>
              <Link>
                <p className="hover:text-sky-400">Contact</p>
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-xl text-white font-semibold mb-2 md:mb-7">
                Find Us
              </p>
              <p className="mb-3 hover:text-sky-400">
                Greenwich Village & Soho, 10012 New York, USA
              </p>
              <p className="hover:text-sky-400">800 123-456 easy@shop.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-white text-center border-t-2 border-[#3D3D3D]">
          <p className="mt-7">© 2023 Copyright by Easy Shop</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
