import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" bg-slate-900 py-16 ">
      <div className="container ">
        <div className="text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            data-aos="fade-right"
            className="w-full  md:border-r border-[#3D3D3D] pr-12"
          >
            <Link to={"/"} className="grid justify-center">
              <img className="w-[200px] " src={logo} alt="easy shop" />
            </Link>
            <p className="my-5 hover:text-sky-400 text-center">
              Easy Shop is a vibrant and innovative brand that brings a world of
              any product to life.
            </p>
            <div className="flex gap-5 text-xl text-white justify-center">
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
          <div data-aos="fade-down" className="md:flex md:gap-28 md:ml-12">
            <div className="grid justify-center">
              <p className="text-xl text-white font-semibold mb-4 md:mb-7 text-center">
                Navigation
              </p>
              <div>
                <Link to={"/"}>
                  <p className="hover:text-sky-400 text-center">Home</p>
                </Link>
                <Link to={"/allProduct"}>
                  <p className="my-2 md:my-4 hover:text-sky-400 text-center">
                    All Toys
                  </p>
                </Link>
                <Link to={"/blog"}>
                  <p className="hover:text-sky-400 text-center">Blog</p>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="mt-7 md:mt-0 grid justify-center"
            >
              <p className="text-xl text-white font-semibold mb-2 md:mb-7 text-center">
                Information
              </p>
              <Link>
                <p className="hover:text-sky-400 text-center">Secure Payment</p>
              </Link>
              <Link>
                <p className="my-2 md:my-4 hover:text-sky-400 text-center">
                  Delivery
                </p>
              </Link>
              <Link>
                <p className="hover:text-sky-400 text-center">Contact</p>
              </Link>
            </div>
            <div data-aos="fade-left" className="mt-6 md:mt-0">
              <p className="text-xl text-white font-semibold mb-2 md:mb-7 grid justify-center">
                Find Us
              </p>
              <p className="mb-3 hover:text-sky-400 grid justify-center">
                Greenwich Village & Soho, 10012 New York, USA
              </p>
              <p className="hover:text-sky-400 grid justify-center">
                800 123-456 easy@shop.com
              </p>
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
