import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const ProductsDetails = () => {
  const items = useLoaderData();
  console.log(items);
  const { name, image, price, seller, category, quantity } = items;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // get discount
  const originalPrice = price;
  const discountPercentage = quantity;
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2  items-center py-36 ">
      <img
        className="w-96 md:w-[800px] mx-auto rounded-xl"
        src={image}
        alt=""
      />
      <div className="md:ml-16 text-slate-700">
        <small className="flex items-center gap-1 text-lg">
          <Link to={"/allProduct"}>
            <span className="text-base font-semibold text-sky-500 ">
              Easy Items
            </span>
          </Link>
          <SlArrowRight />
          <span className="text-base">{category}</span>
        </small>
        <h3 className="text-4xl font-bold  my-8">{name}</h3>
        {/*  price */}
        <div className="mb-6 flex items-center gap-4">
          <p className="text-xl font-medium text-gray-text line-through">
            ${parseInt(price).toFixed(2)}
          </p>
          <p className="text-2xl font-bold text-navy">
            ${discountedPrice?.toFixed(2)}
          </p>
          <button className=" py-1 px-3 text-white bg-pink-700 rounded-lg">
            SAVE {quantity}%
          </button>
        </div>

        {/* button */}
        <div className="flex items-center gap-10 my-8">
          <div className="flex items-center text-lg gap-3 bg-gray-text text-white font-semibold py-2 px-4 bg-gray">
            <button onClick={decrement}>-</button>
            <span>{count.toString().padStart(2, "0")}</span>
            <button onClick={increment}>+</button>
          </div>
          <button className="btn-primary">Add To Cart</button>
        </div>

        <p className="text-xl  my-4">
          <span className="font-semibold">Available Quantity:</span> {quantity}
        </p>
        <p className=" text-stone-800 my-1 text-xl">
          <span className="font-semibold">Seller: </span>
          {seller}
        </p>
        <div className="flex items-center gap-5">
          <span className="font-semibold text-xl">Share :</span>
          <div className="text-blue flex gap-4 items-center text-xl">
            <FaFacebook />
            <BsInstagram className="text-red-700" />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
